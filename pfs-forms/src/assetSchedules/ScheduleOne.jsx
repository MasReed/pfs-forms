import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRow, removeRows } from '../reducers/scheduleOneReducer'

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
    minWidth: 1060,
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
  const dispatch = useDispatch()
  const rows: GridRowsProp = useSelector(state => state.scheduleOne.rows)
  const [selectedRows, setSelectedRows] = useState([])

  const handleAddRow = async (event) => {
    await dispatch(addRow({
        id: rows.length + 1, // how to ensure unique id?
        owner: '',
        description: 'e.g., checking',
        bank: '',
        balance: 0
      }
    ))
  }

  const handleRemoveRows = async () => {
    console.log('removing row...')
    await dispatch(removeRows(selectedRows))
  }

  //
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

    // setRows(updatedState)

  }

  return (
    <>
      <Typography variant='h5'>Schedule 1</Typography>
      <Typography variant='subtitle1'>Cash In Bank Accounts</Typography>

      <Box className={classes.table}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection={true}
          onSelectionModelChange={(rowIds) => setSelectedRows(rowIds)}
          onCellEditCommit={handleCellUpdate}
          autoHeight={false}
          autoPageSize={false}
          disableSelectionOnClick={true}
          hideFooter={false}
          showColumnRightBorder={false}
          showCellRightBorder={true}
        />
      </Box>

      <Button variant='contained' color='primary' onClick={handleAddRow}>
        Add Row
      </Button>

      {
        selectedRows.length >= 1 &&
        <Button
          variant='contained' color='secondary' onClick={handleRemoveRows}
        >
          {selectedRows.length > 1 ? 'Remove Rows' : 'Remove Row'}
        </Button>
      }

    </>
  )
}
