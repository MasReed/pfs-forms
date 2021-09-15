import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid'

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  table: {
    backgroundColor: '#bbb',
    color: 'primary',
    height: 300,
    width: '100%',
    minWidth: 1005,
  },
})

const columns: GridColDef[] = [
  {
    field: 'owner',
    headerName: 'Account Owner',
    width: 250,
    editable: true
  },
  {
    field: 'description',
    headerName: 'Account Description',
    width: 250,
    editable: true
  },
  {
    field: 'bank',
    headerName: 'Bank Name',
    width: 250,
    editable: true
  },
  {
    field: 'balance',
    headerName: 'Balance',
    width: 250,
    editable: true
  }
]

export default function ScheduleOne() {
  const classes = useStyles()

  const [rows: GridRowsProp, setRows] = useState([
    { id: 1, owner: 'hllo', description: 'wrld', bank: 'biwa', balance: 59999 },
    { id: 2, owner: 'helo', description: 'wrld', bank: 'biwa', balance: 59999 },
    { id: 3, owner: 'helo', description: 'wrld', bank: 'biwa', balance: 59999 },
  ])

  const handleAddRow = (event) => {
    event.preventDefault()

    setRows(
      [
        ...(rows: GridRowsProp),
        {
          id: rows.length + 1,
          owner: '',
          description: '',
          bank: '',
          balance: 0
        }
      ]
    )
  }

  const handleCellUpdate = (event) => {
    console.log('event', event)
    console.log('rows', rows)

    const updatedRow = rows.find(row => row.id === event.id)
    console.log('updateRow', updatedRow)

    const updated = {
      ...updatedRow,
      [event.field]: event.value
    }
    console.log('updated', updated)


    const updatedState = rows.map(row => row.id !== updatedRow.id ? row : updated)
    console.log('updatedState', updatedState)

    setRows(updatedState)

  }

  return (
    <>
      <Typography variant='h5'>Schedule 1</Typography>
      <Typography variant='subtitle1'>Cash In Bank Accounts</Typography>

      <Box className={classes.table}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight={false}
          autoPageSize={false}
          hideFooter={true}
          onCellEditCommit={handleCellUpdate}
        />
      </Box>

      <Button variant='contained' color='primary' onClick={handleAddRow}>
        Add Row
      </Button>
    </>
  )
}
