import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
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
  const [selectedRows, setSelectedRows] = useState([2, 3, 4])

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
      </Table>

      {/* Footer Area */}
      <Box className={classes.footer}>

        <Typography className={classes.footerButton} variant='button'>
          {selectedRows.length} rows selected
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
              {selectedRows.length > 1 ? 'Remove Rows' : 'Remove Row'}
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
