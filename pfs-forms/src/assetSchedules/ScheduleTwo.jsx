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
  const tableObjects = [
    {
      heading: 'Account Description',
      name: 'description',
      type: 'text',
    },
    {
      heading: 'Registered By',
      name: 'registrant',
      type: 'text',
    },
    {
      heading: 'Shares or Amount',
      name: 'amount',
      type: 'text',
    },
    {
      heading: 'Retirement?',
      name: 'retirement',
      type: 'boolean',
    },
    {
      heading: 'Current Value',
      name: 'value',
      type: 'text',
    },
  ]

  return (
    <Box className={classes.root}>
      <Typography variant='h5'>Schedule 2</Typography>
      <Typography variant='subtitle1'>
        Publicly Traded Investments - stocks, bonds, mutual funds, 401k, IRAs
      </Typography>

      <CustomTable
        rows={rows}
        tableObjects={tableObjects}
      />

    </Box>
  )
}
