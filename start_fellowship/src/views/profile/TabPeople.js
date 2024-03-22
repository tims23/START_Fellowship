// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Employees from '../dashboard/Employees'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import KeyOutline from 'mdi-material-ui/KeyOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'

const TabPeople = () => {

  return (
    <form>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Grid container spacing={5}>
          <Grid item xs={6} md={3} lg={3}>
            <Employees />
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
              <Employees />
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
              <Employees />
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
              <Employees />
          </Grid>
        </Grid>
      </CardContent>
    </form>
  )
}

export default TabPeople
