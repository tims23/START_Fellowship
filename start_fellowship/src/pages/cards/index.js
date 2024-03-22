// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports

import CardCommunity1 from 'src/views/cards/CardCommunity1'
import CardCommunity2 from 'src/views/cards/CardCommunity2'
import CardCommunity3 from 'src/views/cards/CardCommunity3'
import CardCommunity4 from 'src/views/cards/CardCommunity4'
import CardCommunity5 from 'src/views/cards/CardCommunity5'
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
        <CardCommunity3 />
      </Grid>

      <Grid item xs={12} sm={6}>
        <CardCommunity4 />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardCommunity1 />
      </Grid>

      <Grid item xs={12} sx={{ pb: 0, pt:10 }}>
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
