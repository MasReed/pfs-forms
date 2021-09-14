import React from 'react'

import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

export default function PersonalInformationForm() {
  return(
    <>
      <Box>
        <Typography variant='h3'>BASIC INFO FORM</Typography>
      </Box>

      <form noValidate autoComplete='off'>

        {/* NAME */}
        <div>
          <TextField
            id='first-name'
            label='First Name'
            variant='outlined'
            color='secondary'
          />

          <TextField
            id='middle-name'
            label='Middle Name'
            variant='outlined'
            color='secondary'
          />

          <TextField
            id='last-name'
            label='Last Name'
            variant='outlined'
            color='secondary'
          />
        </div>

        {/* ADDRESSES */}
        <div>
          <TextField
            id='primary-address'
            label='Primary Address'
            variant='outlined'
            color='secondary'
          />

          <TextField
            id='personal-phone-number'
            label='Personal Phone'
            variant='outlined'
            color='secondary'
          />

          <TextField
            id='email'
            label='Email'
            variant='outlined'
            color='secondary'
          />
        </div>


        {/* DATES & IDS */}
        <div>
          <TextField
            id='date-of-birth'
            label='DoB'
            variant='outlined'
            color='secondary'
          />

          <TextField
            id='ssn'
            label='SSN'
            variant='outlined'
            color='secondary'
          />
        </div>

        {/* EMPLOYMENT - employer, type, */}
        <div>
          <TextField
            id='employer'
            label='Employer'
            variant='outlined'
            color='secondary'
          />

          <TextField
            id='employment-type'
            label='Type of Employment'
            variant='outlined'
            color='secondary'
          />

          <TextField
            id='employer-phone'
            label='Employer Phone'
            variant='outlined'
            color='secondary'
          />

          <TextField
            id='employer-address'
            label='Employer Address'
            variant='outlined'
            color='secondary'
          />

          <TextField
            id='employer-years-employed'
            label='Years Employed'
            variant='outlined'
            color='secondary'
          />
        </div>
      </form>
    </>
  )
}
