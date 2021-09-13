import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

export default function Footer() {

  return (
    <Box style={{ height: '20vh', backgroundColor: '#bbb' }}>
      <footer id='bottom'>
        <Typography variant='h6'>This footer is also a component.</Typography>
      </footer>
    </Box>
  )
}
