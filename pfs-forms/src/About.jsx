import React from 'react'
import { Link } from 'react-router-dom'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
// import Box from '@material-ui/core/'
// import Box from '@material-ui/core/'


export default function About() {


  return(
    <Box style={{ backgroundColor: 'orange' }}>
      <Typography variant='h2'>
        About Section
      </Typography>

      <Typography variant='body1'>
        Use this to generate a PFS. Click below.
      </Typography>

      <Button
        component={Link}
        to = '/basic-info'
        color='primary'
        variant='contained'
      >
        Start Here
      </Button>
    </Box>
  )
}
