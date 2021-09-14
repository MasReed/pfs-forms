import React, { useState } from 'react'

import Box from '@material-ui/core/Box'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'

import PersonalInformationForm from './PersonalInformationForm'
import SchedulesInformation from './SchedulesInformation'

export default function FormDisplay() {
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
          <Tab label='Personal' />
          <Tab label='Schedules' />
          <Tab label='Review' />
          <Tab label='Calculations' />
        </Tabs>
      </Box>

      {
        tabValue === 0
        && (
          <PersonalInformationForm />
        )
      }

      {
        tabValue === 1
        && (
          <SchedulesInformation />
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

      {
        tabValue === 3
        && (
          <Box>
            Page 4
          </Box>
        )
      }
    </>
  )
}
