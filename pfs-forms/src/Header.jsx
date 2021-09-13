import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default function Header() {
  const [tabValue, setTabValue] = useState(0)

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  return (
    <Box style={{ height: '20vh' }}>
      <header id='top'>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6'>
              Personal Financial Statement Generator
            </Typography>

            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor='secondary'
              textColor=''
              centered
            >
              <Tab label='one'/>
              <Tab label='two'/>
              <Tab label='three'/>
            </Tabs>

          </Toolbar>
        </AppBar>
      </header>
    </Box>
  )
}
