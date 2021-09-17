import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Paper from '@material-ui/core/Paper'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: '4px',
    margin: '3rem 0',
    padding: '0',
  },
  table: {
  },
  head: {
    backgroundColor: theme.palette.primary.main,
  },
  headingText: {
    color: '#fff'
  },
  body: {
    backgroundColor: '#ccc'
  },
  row: {
  },
  cell: {
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: `${theme.palette.secondary.main + '40'}`, // Hex Opacity
      boxShadow: `0 0 .25rem .125rem inset ${theme.palette.secondary.main}`,
      cursor: 'cell',
    },
  },
  footer: {
    backgroundColor: '#bbb',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem'
  },
  footerButton: {
    margin: '0 .5rem',
    padding: '.5rem 1rem',
  },
}))


export default function CustomTable ({ rows, colHeadings }) {
  const classes = useStyles()
  const [selectedRows, setSelectedRows] = useState([])
  const [cellEditing, setCellEditing] = useState({
    id: '',
    status: false,
  })

  //
  const isSelected = (id) => selectedRows.indexOf(id) !== -1

  //
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelectedRows = rows.map((row) => row.id)
      setSelectedRows(newSelectedRows)
      return
    }
    setSelectedRows([])
  }

  //
  const handleRowClick = (event, id) => {
    console.log('SelectRowEvent', event.target)
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

  //
  const handleCellClick = (event, id) => {
    console.log('SelectCellEvent', event.target)
    console.log('cellId', event.target.id)

    setCellEditing({
      ...cellEditing,
      id: event.target.id,
      status: true
    })
  }

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table}>

        {/* Table Header */}
        <TableHead className={classes.head}>
          <TableRow>
            {/* Select All Checkbox */}
            <TableCell padding='checkbox' variant='head'>
              <Checkbox
                checked={rows.length > 0 && selectedRows.length === rows.length}
                onChange={handleSelectAllClick}
              />
            </TableCell>

            {/* Generate Column Headings */}
            {
              colHeadings.map(heading => (
                <TableCell key={`column-heading-${heading}`}>
                  <Typography
                    className={classes.headingText}
                    variant='subtitle1'
                  >
                    {heading}
                  </Typography>
                </TableCell>
              ))
            }

          </TableRow>
        </TableHead>

        {/* Table body */}
        <TableBody className={classes.body}>
          {rows.filter(row => row.isDeleted === false).map((row, index) => {
            const isItemSelected = isSelected(row.id)
            const labelId = `table-row-checkbox-${index}`

            return (
              <TableRow
                aria-checked={isItemSelected}
                className={classes.row}
                key={row.id}
                role='checkbox'
                selected={isItemSelected}
                tabIndex={-1}
              >
                <TableCell
                  component='th'
                  padding='checkbox'
                  scope='row'
                >
                  <Checkbox
                    checked={isItemSelected}
                    inputProps={{ 'aria-labelledby': labelId }}
                    onClick={(event) => handleRowClick(event, row.id)}
                  />
                </TableCell>

                <TableCell
                  className={classes.cell}
                  component='td'
                  id={`row-${row.id}-description`}
                  scope='row'
                  onClick={handleCellClick}
                  tabIndex={0}
                >
                  {
                    cellEditing.status
                    ? (
                      <TextField
                      inputProps={{style: {textTransform: 'capitalize'}}}
                      name='description'
                      onChange={(e) => e.target.value}
                      value={row.description}
                    />)
                    : (<Typography variant='body1'>
                      {row.description}
                    </Typography>)
                  }

                </TableCell>



                <TableCell
                  className={classes.cell}
                  component='td'
                  scope='row'
                  onClick={(e) => console.log(e.target)}
                  tabIndex={0}
                >
                  {row.registrant}
                </TableCell>

                <TableCell
                  className={classes.cell}
                  component='td'
                  scope='row'
                  onClick={(e) => console.log(e.target)}
                  tabIndex={0}
                >
                  {row.amount}
                </TableCell>

                <TableCell
                  component='td'
                  scope='row'
                  onClick={(e) => console.log(e.target)}
                >
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
                    </>
                  }
                </TableCell>

                <TableCell
                  className={classes.cell}
                  component='td'
                  scope='row'
                  onClick={(e) => console.log(e.target)}
                  tabIndex={0}
                >
                  {row.value}
                </TableCell>

              </TableRow>
            )})
          }
        </TableBody>
      </Table>


      {/* Footer Area */}
      <Box className={classes.footer}>
        <Typography className={classes.footerButton} variant='button'>
          {
            selectedRows.length > 1
            ? `${selectedRows.length} Rows Selected`
            : selectedRows.length === 1
              ? `${selectedRows.length} Row Selected`
              : null
          }
        </Typography>

        {/* ADD & REMOVE ROW BUTTONS */}
        <Box>
          {
            selectedRows.length >= 1 &&
            <Button
              onClick={() => console.log('remove rows clicked')}
              className={classes.footerButton}
              color='primary'
              variant='contained'
            >
              Remove Selected {selectedRows.length > 1 ? 'Rows' : 'Row'}
            </Button>
          }

          <Button
            onClick={() => console.log('ADD ROW CLICKED')}
            className={classes.footerButton}
            color='secondary'
            variant='contained'
          >
            Add Row
          </Button>
        </Box>
      </Box>

    </TableContainer>
  )
}
