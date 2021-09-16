import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    margin: '3rem 0',
    padding: '1rem 0'
  },
}))

export default function CustomTable ({ rows, columnHeadings }) {
  const classes = useStyles()

  return (
    <TableContainer className={classes.tableContainer}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              ABCKD
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  )
}
