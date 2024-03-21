// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'

// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import InformationOutline from 'mdi-material-ui/InformationOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import EmailOutline from 'mdi-material-ui/EmailOutline'

// ** Demo Tabs Imports
import TabOverview from 'src/views/profile/TabOverview'
import TabPeople from 'src/views/profile/TabPeople'
import TabFinancialData from 'src/views/profile/TabFinancialData'
import TabNews from 'src/views/dashboard/News'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const Profile = () => {
  // ** State
  const [value, setValue] = useState('profile')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='profile tabs'
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value='overview'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <HomeOutline />
                <TabName>Overview</TabName>
              </Box>
            }
          />
          <Tab
            value='people'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountOutline />
                <TabName>People</TabName>
              </Box>
            }
          />
          <Tab
            value='financialData'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <InformationOutline />
                <TabName>Financial Data</TabName>
              </Box>
            }
          />
          <Tab
            value='news'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailOutline />
                <TabName>News</TabName>
              </Box>
            }
          />
        </TabList>
        

        <TabPanel sx={{ p: 0 }} value='overview'>
          <TabOverview />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='people'>
          <TabPeople />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='financialData'>
          <TabFinancialData />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='news'>
          <TabNews />
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default Profile
