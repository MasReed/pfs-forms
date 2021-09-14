import React, { useState } from 'react'

import Box from '@material-ui/core/Box'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

export default function BasicInfoForm() {
  const [tabValue, setTabValue] = useState(0)

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  return(
    <>
      <Box style={{ backgroundColor: '#bbb' }}>
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
      </Box>

      <Typography variant='h3'>BASIC INFO FORM</Typography>

      {
        tabValue === 0
        && (
          <Box>
            Page 1
          </Box>
        )
      }

      {
        tabValue === 1
        && (
          <Box>
            Page 2
          </Box>
        )
      }

      {
        tabValue === 2
        && (
          <Box>
            Page 3
          </Box>
        )
      }
    </>
  )
}
