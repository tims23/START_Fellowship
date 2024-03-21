// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardStartUp = (props) => {
  return (
    <Card>
      <CardMedia sx={{height: '9rem'}} image={props.image} />
      <CardContent style={{height: '10rem'}}>
        <Typography variant='h6' sx={{ marginBottom: 2 }}> {props.name} </Typography>
        <Typography sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            }} 
            variant='body2'> 
            {props.description} 
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardStartUp
