// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const Fellow = () => {
  return (
    <Card>
      <CardMedia sx={{ height: '14.5625rem' }} image='/images/cards/glass-house.png' />
      <CardContent>
        <Typography variant='h6' sx={{ mb: -2 }}>
          Simon Bacher
        </Typography>
        <Typography variant='body1'sx={{ mb: 2 }}>
          Fellow
        </Typography>
        <Typography variant='body2'sx={{ mb: 5 }}>
          Bachelor of Business Administration,
          University of St. Gallen
        </Typography>
        <Button size='small' variant='contained' sx={{ ml: 3 }}>
          LinkedIn
        </Button>
        <Button size='small' variant='contained' sx={{ ml: 2 }}>
          E-mail
        </Button>
      </CardContent>
    </Card>
  )
}

export default Fellow
