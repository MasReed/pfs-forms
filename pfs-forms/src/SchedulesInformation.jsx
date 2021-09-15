import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import ScheduleOne from './assetSchedules/ScheduleOne'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  section: {
    margin: '1rem 0'
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
        direction='column'
        justifyContent='flex-start'
        alignItems='flex-start'
        spacing={0}
        xs={12}
      >
        {/* Schedule 1 */}
        <Grid item className={classes.section}>
          <ScheduleOne />
        </Grid>

        {/* Schedule 2 */}
        <Grid item className={classes.section}>
          <Typography variant='h5'>Schedule 2</Typography>
          <Typography variant='subtitle1'>
            Publicly Traded Investments - stocks, bonds, mutual funds, 401k, IRAs
          </Typography>
        </Grid>

        {/* Schedule 3 */}
        <Grid item className={classes.section}>
          <Typography variant='h5'>Schedule 3</Typography>
          <Typography variant='subtitle1'>
            Other Assets - vehicles, boats, partnerships, proprietyorships, cash-value life insurance
          </Typography>
        </Grid>

        {/* Schedule A */}
        <Grid item className={classes.section}>
          <Typography variant='h5'>Schedule A</Typography>
          <Typography variant='subtitle1'>
            Total Revolving Credit - credit cards, credit lines
          </Typography>
        </Grid>

        {/* Schedule B */}
        <Grid item className={classes.section}>
          <Typography variant='h5'>Schedule B</Typography>
          <Typography variant='subtitle1'>
            Total Installment Loans - cars, furniture, appliances
          </Typography>
        </Grid>

        {/* Schedule C */}
        <Grid item className={classes.section}>
          <Typography variant='h5'>Schedule C</Typography>
          <Typography variant='subtitle1'>
            Other Liabilities - contract debts, maintenance payments, lawsuits, tax penalties
          </Typography>
        </Grid>

        {/* Schedule D */}
        <Grid item className={classes.section}>
          <Typography variant='h5'>Schedule D</Typography>
          <Typography variant='subtitle1'>
            Contingent Liabilities - partnerships, guarantees
          </Typography>
        </Grid>







      </Grid>
    </>
  )
}
