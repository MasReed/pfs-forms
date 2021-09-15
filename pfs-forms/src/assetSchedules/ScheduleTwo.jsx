import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'

import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import DeleteIcon from '@material-ui/icons/Delete'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  paper: {
    marginBottom: theme.spacing(2),
  },
  table: {
    flexGrow: 1,
  },
  tableCell: {
    padding: '0 .5rem',
  },
  tableContainer: {
    backgroundColor: '#ccc',
  },
}))

export default function ScheduleTwo() {
  const classes = useStyles()
  const dispatch = useDispatch()
  // const rows = useSelector(state => state.scheduleTwo.rows)
  const rows = [
    {
      description: 'an investement',
      registrant: 'its me',
      amount: 10,
      retirement: false,
      value: 100000,
    },
    {
      description: 'another investement',
      registrant: 'its me2',
      amount: 1000,
      retirement: true,
      value: 999990,
    },
  ]

  const [selectedRows, setSelectedRows] = useState([])

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id)
      setSelectedRows(newSelecteds)
      return
    }
  }

  const handleClick = (event, id) => {
    const selectedIndex = selectedRows.indexOf(id)

    let newSelected = []

    if (selectedIndex === - 1) {
      newSelected = newSelected.concat(selectedRows, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelected = newSelected.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1),
      );
    }

    setSelectedRows(newSelected)
  }

  const isSelected = (id) => selectedRows.indexOf(id) !== -1

  return (
    <Box className={classes.root}>
      <Typography variant='h5'>Schedule 2</Typography>
      <Typography variant='subtitle1'>
        Publicly Traded Investments - stocks, bonds, mutual funds, 401k, IRAs
      </Typography>

      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label='Schedule Two Table'>
          <TableHead>
            <TableRow>
              <TableCell padding='checkbox'>
                <Checkbox
                  onChange={handleSelectAllClick}
                />
              </TableCell>
              <TableCell>Account Description</TableCell>
              <TableCell>Name Registered In</TableCell>
              <TableCell>Shares/Amount</TableCell>
              <TableCell>Retirement</TableCell>
              <TableCell>Current Value</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                hover
                onClick={(event) => handleClick(event, row.id)}
                role='checkbox'
                tabIndex={-1}
                selected={() => isSelected(row.id)}
                aria-checked={() => isSelected(row.id)}
              >
                <TableCell padding='checkbox'>
                  <Checkbox checked={() => isSelected(row.id)}/>
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.registrant}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>
                  {
                    <>
                      <Checkbox checked={row.retirement === true}/> Yes
                      <Checkbox checked={row.retirement === false}/> No
                    </>
                  }
                </TableCell>
                <TableCell>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
