// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Link from 'next/link'

const CardStartUp = (props) => {
  return (
    <Card>
      <CardMedia sx={{height: '9rem'}} image={props.image} />
      <CardContent style={{height: '10rem'}}>
        <Link href={"/dashboard/test"}>
            <Typography variant='h6' sx={{ marginBottom: 2 }}> {props.name} </Typography>
        </Link>
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
