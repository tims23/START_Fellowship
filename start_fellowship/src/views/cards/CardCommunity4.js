// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const Card4 = () => {
  return (
    <Card>
      <CardMedia sx={{ height: '14.5625rem' }} image='https://cdn.sanity.io/images/bl383u0v/production/3cc59ab78ea5980edb12799254856cbd8daa247c-4000x2935.jpg?rect=2,0,3996,2935&w=900&h=661&q=80&fit=max&auto=format&dpr=2' />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
        Neuralink: First human received a brane implant
        </Typography>
        <Typography variant='body2'>
        Elon Musk's Neuralink claims its first human brain implant was a success, aiming to help people with paralysis control devices with their thoughts. Despite FDA approval for human trials, details are limited with no scientific confirmation. Critics question the company's research ethics and long-term patient safety.        </Typography>
      </CardContent>
    </Card>
  )
}

export default Card4
