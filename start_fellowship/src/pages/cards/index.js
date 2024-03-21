// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CardUser from 'src/views/cards/CardUser'
import CardImgTop from 'src/views/cards/CardImgTop'
import CardMobile from 'src/views/cards/CardMobile'
import CardTwitter from 'src/views/cards/CardTwitter'
import CardFacebook from 'src/views/cards/CardFacebook'
import CardLinkedIn from 'src/views/cards/CardLinkedIn'
import CardAppleWatch from 'src/views/cards/CardAppleWatch'
import CardMembership from 'src/views/cards/CardMembership'
import CardWithCollapse from 'src/views/cards/CardWithCollapse'
import CardHorizontalRatings from 'src/views/cards/CardHorizontalRatings'

const CardBasic = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 0 }}>
        <Typography variant='h5'>News</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardImgTop />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardImgTop />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardImgTop />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardImgTop />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardImgTop />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardAppleWatch />
      </Grid>
      <Grid item xs={12} sm={8}>
        <CardAppleWatch />
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
