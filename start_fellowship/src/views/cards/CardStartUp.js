// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Link from 'next/link'

const CardUser = ({id="7FjQ6uEwevcO9THlTSnu", name, image, description, industry, location, banner='/images/cards/background-user.png'}) => {
  return (
    <Card sx={{ position: 'relative' }}>
      <CardMedia sx={{ height: '12.625rem' }} image={banner} />
      <Avatar
        alt='Robert Meyer'
        src={image}
        sx={{
          width: 75,
          height: 75,
          left: '1.313rem',
          top: '10.28125rem',
          position: 'absolute',
          border: theme => `0.25rem solid ${theme.palette.common.white}`
        }}
      />
      <CardContent>
        <Box
          sx={{
            mt: 5.75,
            mb: 8.75,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box style={{height: "9rem"}} sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ mb:-1 }} variant='h5'>{name}</Typography>
            <Typography sx={{ mb:3 }}variant='caption'>{industry}, {location}</Typography>
            <Typography 
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
              }} 
            variant='body2'>
              {description}
              </Typography>
          </Box>
          <Link href={`/${id}`}>
            <Button sx={{ mt: 5, mb: -10 }}variant='contained'>Show Details</Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardUser
