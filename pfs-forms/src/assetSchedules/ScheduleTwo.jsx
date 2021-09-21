import React from 'react'
import { useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

import Typography from '@material-ui/core/Typography'

// import IconButton from '@material-ui/core/IconButton'
// import Tooltip from '@material-ui/core/Tooltip'
// import DeleteIcon from '@material-ui/icons/Delete'

import CustomTable from '../CustomTable'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  }
}))

export default function ScheduleTwo() {
  const classes = useStyles()
  const rows = useSelector(state => state.scheduleTwo.rows)

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

      <CustomTable
        colHeadings={columnHeadings}
        rows={rows}
      />

    </Box>
  )
}
