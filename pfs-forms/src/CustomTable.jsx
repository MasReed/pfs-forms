import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addRow, editRow, removeRows } from './reducers/scheduleTwoReducer'

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
    borderRadius: '.25rem',
    boxShadow: theme.shadows[4],
    margin: '2rem 0',
    padding: '0',
  },
  table: {
  },
  head: {
    backgroundColor: theme.palette.primary.main,
  },
  headingText: {
    color: theme.palette.primary.contrastText,
  },
  body: {
    backgroundColor: '#ccc'
  },
  row: {
  },
  cell: {
    color: theme.palette.secondary.main,
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: `${theme.palette.secondary.main + '40'}`, // Hex Opacity
      boxShadow: `0 0 .25rem .125rem inset ${theme.palette.secondary.main}`,
      cursor: 'cell',
    },
    '&:active': {
      backgroundColor: `${theme.palette.primary.main + '40'}`,
      boxShadow: `0 0 .25rem .125rem inset ${theme.palette.common.white}`,
    },
    '&:focus-within': {
      backgroundColor: `${theme.palette.primary.main + '40'}`,
      boxShadow: `0 0 .25rem .125rem inset ${theme.palette.primary.main}`,
    },
  },
  footer: {
    backgroundColor: '#bbb',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem .5rem'
  },
  footerButton: {
    margin: '0 .5rem',
    padding: '.5rem 1rem',
  },
}))


export default function CustomTable ({ rows, tableObjects }) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [selectedRows, setSelectedRows] = useState([])
  const [cellEditing, setCellEditing] = useState({
    id: undefined,
    status: false,
  })

  useEffect(() => {
    const hasFocusListener = (e) => {
      const cellEditingElement = document.getElementById(cellEditing.id)
      // console.log('****NEW****')
      // console.log('cellEditingElement', cellEditingElement)
      // console.log('losingFocus', e.target)
      // console.log('receivingFocus', e.relatedTarget)

      // target gaining focus is within the current cellEditing element
      if (cellEditingElement && cellEditingElement.contains(e.relatedTarget)) {
        // console.log('cellEditing child element in focus')
      }

      // target losing focus is within the current cellEditing element
      if (cellEditingElement && cellEditingElement.contains(e.target)) {
        // console.log('cellEditing element in focus')
      }

      // TODO: implement saving form data on focus out

      // focusing non table cell (td) elements reset state
      if (!e.relatedTarget) {
        setCellEditing({ id: undefined, status: false })
      } else if (!e.relatedTarget.closest('tbody')) {
        setCellEditing({ id: undefined, status: false })
      } else if (e.relatedTarget.type === 'checkbox') {
        setCellEditing({ id: undefined, status: false })
      }
    }

    window.addEventListener('focusout', hasFocusListener, false)
    // console.log('effecthook called: cellEditing:', cellEditing)

    return () => window.removeEventListener('focusout', hasFocusListener)
  }, [cellEditing])

  //
  const isSelected = (id) => selectedRows.indexOf(id) !== -1

  //
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelectedRows = rows.filter(row => !row.isDeleted).map((row) => row.id)
      setSelectedRows(newSelectedRows)
      return
    }
    setSelectedRows([])
  }

  //
  const handleRowClick = (event, id) => {
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
  const handleCellClick = (event) => {
    setCellEditing({
      ...cellEditing,
      id: event.target.closest('td').id,
      status: true
    })
  }

  //
  const handleCellEdit = async (event) => {
    await dispatch(editRow({
      id: Number(event.target.closest('tr').id),
      field: event.target.name,
      value: event.target.value,
    }))
  }

  //
  const handleBooleanCellEdit = async (event) => {
    await dispatch(editRow({
      id: Number(event.target.closest('tr').id),
      field: event.target.name,
      value: event.target.checked
    }))
  }

  //
  const handleAddRow = async () => {
    await dispatch(addRow())
  }

  //
  const handleRemoveRows = async () => {
    await dispatch(removeRows(selectedRows))
    setSelectedRows([])
  }

  //
  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table}>

        {/* Table Header */}
        <TableHead className={classes.head}>
          <TableRow>
            {/* Select All Checkbox */}
            <TableCell padding='checkbox' variant='head'>
              <Checkbox
                checked={
                  rows.filter(row => !row.isDeleted).length > 0
                  && selectedRows.length === rows.filter(row => !row.isDeleted).length
                }
                onChange={handleSelectAllClick}
              />
            </TableCell>

            {/* Generate Column Headings from tableObjects Prop */}
            {
              tableObjects.map(object => (
                <TableCell key={`column-heading-${object.name}`}>
                  <Typography
                    className={classes.headingText}
                    variant='subtitle1'
                  >
                    {object.heading}
                  </Typography>
                </TableCell>
              ))
            }

          </TableRow>
        </TableHead>

        {/* Table body */}
        <TableBody className={classes.body}>
          {rows.filter(row => !row.isDeleted).map((row, index) => {
            const isItemSelected = isSelected(row.id)
            const labelId = `table-row-checkbox-${index}`

            return(
              <TableRow
                aria-checked={isItemSelected}
                className={classes.row}
                key={row.id}
                id={row.id}
                role='checkbox'
                selected={isItemSelected}
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

                {
                  Object.entries(row).map(([cellKey, cellValue]) => {

                    const cellHasTableObject = tableObjects.map(object => object.name).includes(cellKey)

                    const matchingTableObject = tableObjects.find(object => object.name === cellKey)

                    const cellType = matchingTableObject && matchingTableObject.type

                  return (

                    cellHasTableObject
                    ? cellType === 'text'
                      ? <TableCell
                        className={classes.cell}
                        component='td'
                        id={`row-${row.id}-${cellKey}`}
                        key={`row-${row.id}-${cellKey}`}
                        scope='row'
                        onClick={handleCellClick}
                        onKeyPress={handleCellClick}
                        tabIndex={0}
                      >
                        {
                          cellEditing.status && (cellEditing.id === `row-${row.id}-${cellKey}`)
                          ? (<TextField
                            autoFocus
                            inputProps={{style: {textTransform: 'capitalize'}}}
                            name={cellKey}
                            onChange={handleCellEdit}
                            value={cellValue}
                          />)
                          : (<Typography
                            variant='body1'
                          >
                            {cellValue}
                          </Typography>)
                        }
                      </TableCell>

                      : <TableCell
                        component='td'
                        id={`row-${row.id}-${cellKey}`}
                        key={`row-${row.id}-${cellKey}`}
                        scope='row'
                        onClick={handleCellClick}
                        onKeyPress={handleCellClick}
                      >
                        {
                          <>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={row.retirement}
                                  id='retirementChecked'
                                  onChange={handleBooleanCellEdit}
                                  onKeyPress={handleBooleanCellEdit}
                                  name='retirement'
                                />
                              }
                              label='Yes'
                            />
                          </>
                        }
                      </TableCell>
                    : null
                  )})
                }
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
              onClick={handleRemoveRows}
              className={classes.footerButton}
              color='primary'
              variant='contained'
            >
              Remove Selected {selectedRows.length > 1 ? 'Rows' : 'Row'}
            </Button>
          }

          <Button
            onClick={handleAddRow}
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

//
// <TableRow
//   aria-checked={isItemSelected}
//   className={classes.row}
//   key={row.id}
//   id={row.id}
//   role='checkbox'
//   selected={isItemSelected}
//   tabIndex={0}
// >
//   <TableCell
//     component='th'
//     padding='checkbox'
//     scope='row'
//   >
//     <Checkbox
//       checked={isItemSelected}
//       inputProps={{ 'aria-labelledby': labelId }}
//       onClick={(event) => handleRowClick(event, row.id)}
//     />
//   </TableCell>
//
//   <TableCell
//     className={classes.cell}
//     component='td'
//     id={`row-${row.id}-description`}
//     scope='row'
//     onClick={handleCellClick}
//     onKeyPress={handleCellClick}
//     tabIndex={0}
//   >
//     {
//       cellEditing.status && (cellEditing.id === `row-${row.id}-description`)
//       ? (<TextField
//         autoFocus
//         inputProps={{style: {textTransform: 'capitalize'}}}
//         name='description'
//         onChange={handleCellEdit}
//         value={row.description}
//       />)
//       : (<Typography
//         variant='body1'
//       >
//         {row.description}
//       </Typography>)
//     }
//   </TableCell>
//
//   <TableCell
//     className={classes.cell}
//     component='td'
//     id={`row-${row.id}-registrant`}
//     scope='row'
//     onClick={handleCellClick}
//     onKeyPress={handleCellClick}
//     tabIndex={0}
//   >
//   {
//     cellEditing.status && (cellEditing.id === `row-${row.id}-registrant`)
//     ? (<TextField
//       autoFocus
//       inputProps={{style: {textTransform: 'capitalize'}}}
//       name='registrant'
//       onChange={handleCellEdit}
//       value={row.registrant}
//     />)
//     : (<Typography
//       variant='body1'
//     >
//       {row.registrant}
//     </Typography>)
//   }
//   </TableCell>
//
//   <TableCell
//     className={classes.cell}
//     component='td'
//     id={`row-${row.id}-amount`}
//     scope='row'
//     onClick={handleCellClick}
//     onKeyPress={handleCellClick}
//     tabIndex={0}
//   >
//   {
//     cellEditing.status && (cellEditing.id === `row-${row.id}-amount`)
//     ? (<TextField
//       autoFocus
//       inputProps={{style: {textTransform: 'capitalize'}}}
//       name='amount'
//       onChange={handleCellEdit}
//       value={row.amount}
//     />)
//     : (<Typography
//       variant='body1'
//     >
//       {row.amount}
//     </Typography>)
//   }
//   </TableCell>
//
//   <TableCell
//     component='td'
//     scope='row'
//     onClick={handleCellClick}
//     onKeyPress={handleCellClick}
//   >
//     {
//       <>
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={row.retirement}
//               id='retirementChecked'
//               onChange={handleBooleanCellEdit}
//               onKeyPress={handleBooleanCellEdit}
//               name='retirement'
//             />
//           }
//           label='Yes'
//         />
//       </>
//     }
//   </TableCell>
//
//   <TableCell
//     className={classes.cell}
//     component='td'
//     id={`row-${row.id}-value`}
//     scope='row'
//     onClick={handleCellClick}
//     onKeyPress={handleCellClick}
//     tabIndex={0}
//   >
//   {
//     cellEditing.status && (cellEditing.id === `row-${row.id}-value`)
//     ? (<TextField
//       autoFocus
//       inputProps={{style: {textTransform: 'capitalize'}}}
//       name='value'
//       onChange={handleCellEdit}
//       value={row.value}
//     />)
//     : (<Typography
//       variant='body1'
//     >
//       {row.value}
//     </Typography>)
//   }
//   </TableCell>
// </TableRow>
