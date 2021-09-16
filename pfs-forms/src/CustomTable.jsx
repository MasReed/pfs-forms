import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Checkbox from '@material-ui/core/Checkbox'
import Paper from '@material-ui/core/Paper'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'
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
  footer: {
    backgroundColor: theme.palette.secondary.main
  }
}))

export default function CustomTable ({ rows, colHeadings }) {
  const classes = useStyles()

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table}>
        {/* Table Header */}
        <TableHead className={classes.head}>
          <TableRow>
            {/* Select All Checkbox */}
            <TableCell padding='checkbox' variant='head'>
              <Checkbox
                checked={true}
                onChange={() => console.log('checkbox onchange called')}
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
