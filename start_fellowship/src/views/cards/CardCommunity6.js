// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const Card6 = () => {
  return (
    <Card>
      <CardMedia sx={{ height: '14.5625rem' }} image='/images/cards/glass-house.png' />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Text
        </Typography>
        <Typography variant='body2'>
          Dirimlaa1
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Card6
