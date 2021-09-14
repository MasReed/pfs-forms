import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  section: {
    display: 'flex'
  },
  textField: {
    margin: '1rem 0',
  },
}))

export default function SchedulesInformation() {
  const classes = useStyles()

  return (
    <>
      <Box my={4}>
        <Typography variant='h3'>Schedules Info</Typography>
      </Box>

      <Grid
        container
        direction='row'
        justifyContent='flex-start'
        alignItems='flex-start'
        spacing={0}
        xs={12}
      >
        hi
      </Grid>
    </>
  )
}
