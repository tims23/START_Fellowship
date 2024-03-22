// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const Card3 = () => {
  return (
    <Card>
      <CardMedia sx={{ height: '9.375rem' }} image='https://images.handelsblatt.com/BQSDOseA-5I5/cover/1600/1067/201/0/0/0/0.5/0.5/gastbeitrag.avif' />
      <CardContent sx={{ padding: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
        Triggering Innovation Growth in Germany
        </Typography>
        <Typography variant='body2'>
        Dr. Hendrik Brandis, co-founder of Earlybirdventure, shares an optimistic outlook on Germany's potential for revolutionary technologies. He proposes a no-state-funds-required strategy to leverage state creditworthiness, attracting institutional investor capital and significantly increasing investment volume. This approach could benefit the economy by unlocking growth capital needed for scaling innovations while offering attractive investment alternatives and better returns for the insurance industry.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Card3
