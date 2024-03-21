// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports

import CardCommunity1 from 'src/views/cards/CardCommunity1'
import CardCommunity2 from 'src/views/cards/CardCommunity2'
import CardTwitter from 'src/views/cards/CardTwitter'
import CardFacebook from 'src/views/cards/CardFacebook'
import CardLinkedIn from 'src/views/cards/CardLinkedIn'

const CardBasic = () => {
  return (
    <Grid container spacing={6}>
      
      <Grid item xs={12} sx={{ paddingBottom: 0 }}>
        <Typography variant='h5'>News</Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <CardCommunity1 />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardCommunity2 />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardCommunity1 />
      </Grid>

      <Grid item xs={12} sm={6}>
        <CardCommunity1 />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardCommunity2 />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <CardCommunity2 />
      </Grid>
      <Grid item xs={12} sm={8}>
        <CardCommunity1 />
      </Grid>

      <Grid item xs={12} sx={{ pb: 0, pt: theme => `${theme.spacing(17.5)} !important` }}>
        <Typography variant='h5'>Social Media</Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <CardTwitter />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardFacebook />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardLinkedIn />
      </Grid>

    </Grid>
  )
}

export default CardBasic
