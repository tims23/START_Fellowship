// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardUser = () => {
  return (
    <Card sx={{ position: 'relative' }}>
      <CardMedia sx={{ height: '12.625rem' }} image='/images/cards/background-user.png' />
      <Avatar
        alt='Robert Meyer'
        src='/images/avatars/1.png'
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
          <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ mb:-1 }} variant='h5'>Dirimla AI</Typography>
            <Typography sx={{ mb:3 }}variant='caption'>Software Technology, Germany</Typography>
            <Typography variant='body2'>DirimlaAI is a software company based in Frankfurt, Germany commited to solve the problem of knowledge decline within large companies.</Typography>
          </Box>
          <Button sx={{ mt: 5, mb: -10 }}variant='contained'>Show Details</Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardUser
