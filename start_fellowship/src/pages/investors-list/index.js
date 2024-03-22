// ** MUI Imports
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Investor from 'src/views/investors/Investor'

const CardBasic = () => {
  return (
    <Grid container spacing={6}>
      
      <Grid item xs={24} sx={{ paddingBottom: 0 }}>
        <Typography variant='h5'>Our Network - Your Network</Typography>
        <Typography variant='body2'>Number of Partners: 28</Typography>
      </Grid>

      <Grid item xs={6} md={3} lg={3}>
          <Investor />
      </Grid>
      <Grid item xs={6} md={3} lg={3}>
          <Investor />
      </Grid>
      <Grid item xs={6} md={3} lg={3}>
          <Investor />
      </Grid>
      <Grid item xs={6} md={3} lg={3}>
          <Investor />
      </Grid>

    </Grid>
  )
}

export default CardBasic
