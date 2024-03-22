// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const Card1 = () => {
  return (
    <Card>
      <CardMedia sx={{ height: '14.5625rem' }} image='https://blog.startglobal.org/hubfs/OH7A1318-Pano.jpg' />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
        Global Start Summit x Hack startet
        </Typography>
        <Typography variant='body2'>
        Every year, the "Start Summit x Hack" takes place in St.Gallen - a student-led business and tech conference. Over 6,000 participants from the European ecosystem as well as players from Silicon Valley and Southeast Asia are expectet to come together this week in the St.Galler Kantonalbank Halle to promote intergenerational dialog and drive innovation. 
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Card1
