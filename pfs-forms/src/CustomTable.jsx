import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'


import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    margin: '3rem 0',
    padding: '1rem 0'
  },
  head: {
    backgroundColor: theme.palette.primary.main
  },
  body: {
    backgroundColor: '#ccc'
  },
  footer: {
    backgroundColor: theme.palette.secondary.main
  }
}))

export default function CustomTable ({ rows, columnHeadings }) {
  const classes = useStyles()

  return (
    <TableContainer className={classes.tableContainer}>
      <Table>
        {/* Table Header */}
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell>
              HEAD
            </TableCell>
          </TableRow>
        </TableHead>

        {/* Table body */}
        <TableBody className={classes.body}>
          <TableRow>
            <TableCell>
              BODY
            </TableCell>
          </TableRow>
        </TableBody>

        {/* Table Footer */}
        <TableFooter className={classes.footer}>
          <TableRow>
            <TableCell>
              FOOTER
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}
