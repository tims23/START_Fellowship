// ** MUI Imports
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Fellow from 'src/views/fellows/Fellow'

const CardBasic = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={24} sx={{ paddingBottom: 0 }}>
        <Typography variant='h5'>Our Fellows 2023/24</Typography>
        <Typography variant='body2'>Number of Fellows: 37</Typography>
      </Grid>

      <Grid item xs={6} md={3} lg={3}>
          <Fellow />
      </Grid>
      <Grid item xs={6} md={3} lg={3}>
          <Fellow />
      </Grid>
      <Grid item xs={6} md={3} lg={3}>
          <Fellow />
      </Grid>
      <Grid item xs={6} md={3} lg={3}>
          <Fellow />
      </Grid>

    </Grid>
  )
}

export default CardBasic