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
    display: 'flex',
    margin: '0 0 1rem 0',
  },
  textField: {
    margin: '0 0 1rem 0',
  },
}))

export default function PersonalInformationForm() {
  const classes = useStyles()

  return(
    <>
      <Box my={4}>
        <Typography variant='h3'>Basic Info</Typography>
      </Box>

      <form noValidate autoComplete='off'>
        <Grid
          container
          direction='row'
          justifyContent='flex-start'
          alignItems='flex-start'
          spacing={0}
        >

          {/* NAME */}
          <Grid container item className={classes.section} sm={12}>
            <Grid item sm={4}>
              <TextField
                id='first-name'
                label='First Name'
                variant='outlined'
                color='secondary'
                fullWidth
              />
            </Grid>

            <Grid item sm={4}>
              <TextField
                id='middle-name'
                label='Middle Name'
                variant='outlined'
                color='secondary'
                fullWidth
              />
            </Grid>

            <Grid item sm={4}>
              <TextField
                id='last-name'
                label='Last Name'
                variant='outlined'
                color='secondary'
                fullWidth
              />
            </Grid>
          </Grid>

          {/* ADDRESSES */}
          <Grid container item className={classes.section} sm={12}>
            <Grid item sm={4}>
              <TextField
                id='primary-address'
                label='Primary Address'
                variant='outlined'
                color='secondary'
                fullWidth
              />
            </Grid>

            <Grid item sm={4}>
              <TextField
                id='personal-phone-number'
                label='Personal Phone'
                variant='outlined'
                color='secondary'
                fullWidth
              />
            </Grid>

            <Grid item sm={4}>
              <TextField
                id='email'
                label='Email'
                variant='outlined'
                color='secondary'
                fullWidth
              />
            </Grid>
          </Grid>


          {/* DATES & IDS */}
          <Grid container item className={classes.section} sm={12}>
            <Grid item sm={4}>
              <TextField
                id='date-of-birth'
                label='DoB'
                variant='outlined'
                color='secondary'
                fullWidth
              />
            </Grid>

            <Grid item sm={4}>
              <TextField
                id='ssn'
                label='SSN'
                variant='outlined'
                color='secondary'
                fullWidth
              />
            </Grid>
          </Grid>

          {/* EMPLOYMENT - employer, type, */}
          <Grid container item className={classes.section} sm={12}>

            <Grid container item sm={12}>
              <Grid item sm={4}>
                <TextField
                  id='employer'
                  label='Employer'
                  variant='outlined'
                  color='secondary'
                  fullWidth
                />
              </Grid>

              <Grid item sm={4}>
                <TextField
                  id='employer-phone'
                  label='Employer Phone'
                  variant='outlined'
                  color='secondary'
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid container item sm={12}>
              <Grid item sm={4}>
                <TextField
                  id='employment-type'
                  label='Type of Employment'
                  variant='outlined'
                  color='secondary'
                  fullWidth
                />
              </Grid>

              <Grid item sm={4}>
                <TextField
                  id='employer-years-employed'
                  label='Years Employed'
                  variant='outlined'
                  color='secondary'
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid item sm={4}>
              <TextField
                id='employer-address'
                label='Employer Address'
                variant='outlined'
                color='secondary'
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
