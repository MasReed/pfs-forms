import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Toolbar from '@material-ui/core/Toolbar'

export default function Header() {

  const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to='/' {...props} />
  ))

  return (
    <Box style={{ backgroundColor: '#bbb' }}>
      <header id='top'>
        <AppBar position='static'>
          <Toolbar>
            <Link
              color='textPrimary'
              component={LinkBehavior}
              variant='h6'
            >
              Personal Financial Statement Generator
            </Link>
          </Toolbar>
        </AppBar>
      </header>
    </Box>
  )
}
