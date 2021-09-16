import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRow, editRow, removeRows } from '../reducers/scheduleTwoReducer'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Divider from '@material-ui/core/Divider'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'

import Toolbar from '@material-ui/core/Toolbar'

import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
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
    margin: 'auto',
    width: '100%',
  },
  tableHead: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
}))

export default function ScheduleTwo() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const rows = useSelector(state => state.scheduleTwo.rows)

  const [selectedRows, setSelectedRows] = useState([])

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((row) => row.id)
      setSelectedRows(newSelecteds)
      return
    }
    setSelectedRows([])
  }

  const handleClick = (event, id) => {
    console.log('handling click')
    console.log('event', event.target)
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

  //
  const handleAddRow = async (event) => {
    const makeId = () => {
      const ids = rows.map(row => row.id)
      return Math.max(...ids) + 1
    }

    await dispatch(addRow({
        id: makeId(),
        description: '',
        registrant: '',
        amount: '',
        retirement: false,
        value: 0,
        isDeleted: false
      }
    ))
  }

  //
  const handleRemoveRows = async () => {
    await dispatch(removeRows(selectedRows))
    setSelectedRows([])
  }

  //
  const columnHeadings = [
    'Account Description',
    'Name Registerd In',
    'Shares or Amount',
    'Retirement',
    'Current Value',
  ]

  return (
    <Box className={classes.root}>
      <Typography variant='h5'>Schedule 2</Typography>
      <Typography variant='subtitle1'>
        Publicly Traded Investments - stocks, bonds, mutual funds, 401k, IRAs
      </Typography>

      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label='Schedule Two Table'>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell
                className={classes.tableHeadCell}
                padding='checkbox'
              >
                <Checkbox
                  checked={rows.length > 0 && selectedRows.length === rows.length}
                  onChange={handleSelectAllClick}
                />
              </TableCell>

              {/* Generate Column Headings */}
              {
                columnHeadings.map(heading => (
                  <TableCell key={`column-heading-${heading}`}>
                    <Typography variant='subtitle1'>
                      {heading}
                    </Typography>
                  </TableCell>
                ))
              }
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.filter(row => row.isDeleted === false).map((row, index) => {
              const isItemSelected = isSelected(row.id)
              const labelId = `table-row-checkbox-${index}`

              return (
                <TableRow
                  key={row.id}
                  hover
                  onClick={(event) => handleClick(event, row.id)}
                  role='checkbox'
                  tabIndex={-1}
                  selected={isItemSelected}
                  aria-checked={isItemSelected}
                >
                  <TableCell padding='checkbox'>
                    <Checkbox
                      checked={isItemSelected}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.registrant}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>
                    {
                      <>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={row.retirement}
                              onChange={() => console.log('check changed')}
                              name='retirementChecked'
                            />
                          }
                          label='Yes'
                        />

                        <Checkbox checked={row.retirement === false}/> No
                      </>
                    }
                  </TableCell>
                  <TableCell>{row.value}</TableCell>
                </TableRow>
              )})
            }
          </TableBody>
        </Table>

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
      </TableContainer>


    </Box>
  )
}
