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
    minWidth: 1000,
  },
})



const columns: GridColDef[] = [
  {
    field: 'owner',
    headerName: 'Account Owner',
    width: 150,
    editable: true
  },
  {
    field: 'description',
    headerName: 'Account Description',
    width: 150,
    editable: true
  },
  {
    field: 'bank',
    headerName: 'Bank Name',
    width: 150,
    editable: true
  },
  {
    field: 'balance',
    headerName: 'Balance',
    width: 150,
    editable: true
  }
]

export default function ScheduleOne() {
  const classes = useStyles()

  const [rows: GridRowsProp, setRows] = useState([
    { id: 1, owner: 'hello', description: 'world', bank: 'biwa', balance: 59999 },
    { id: 2, owner: 'hello', description: 'world', bank: 'biwa', balance: 59999 },
    { id: 3, owner: 'hello', description: 'world', bank: 'biwa', balance: 59999 },
  ])

  const handleAddRow = (event) => {
    event.preventDefault()

    setRows(
      [
        ...rows,
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

  return (
    <>
      <Typography variant='h5'>Schedule 1</Typography>
      <Typography variant='subtitle1'>Cash In Bank Accounts</Typography>

      <div className={classes.table}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight={false}
          autoPageSize={false}
        />

        <Button variant='contained' color='primary' onClick={handleAddRow}>
          Add Row
        </Button>
      </div>

    </>
  )
}
