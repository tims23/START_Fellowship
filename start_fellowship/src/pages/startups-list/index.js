// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Components Imports
import CardStartUp from 'src/views/cards/CardStartUp'

const CardBasic = () => {
  return (
    <Grid container spacing={6}>
      
      <Grid item xs={12} sx={{ paddingBottom: 0 }}>
        <Typography variant='h5'>All fellow StartUps</Typography>
        <Typography variant='body2'>Number of StartUps: 106</Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <CardStartUp />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardStartUp />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardStartUp />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardStartUp />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardStartUp />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardStartUp />
      </Grid>

    </Grid>
  )
}

export default CardBasic
