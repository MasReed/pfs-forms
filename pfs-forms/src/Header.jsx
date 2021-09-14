import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default function Header() {

  return (
    <Box style={{ backgroundColor: '#bbb' }}>
      <header id='top'>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6'>
              Personal Financial Statement Generator
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
    </Box>
  )
}
