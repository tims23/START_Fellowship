// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const Card2 = () => {
  return (
    <Card>
      <CardMedia sx={{ height: '9.375rem' }} image='https://images.sifted.eu/wp-content/uploads/2024/01/12130936/SantiagodeChile-scaled.jpg?auto=format&fit=crop&crop=faces%2Cedges%2Centropy&ar=3%3A1&w=1920&q=75' />
      <CardContent sx={{ padding: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
        European Startups consider Latin American Expansion
        </Typography>
        <Typography variant='body2'>
        European startups, transcending linguistic and regional boundaries, are increasingly targeting Latin American markets for growth. Companies from various countries and sectors are tapping into the region's vast customer base, tech talent, and conducive public policies. Despite cultural and administrative hurdles, ventures like Payflow and Nutrix have successfully ventured into this market, attracted by the potential for quicker regulatory approvals and substantial customer needs. However, challenges such as the high cost of leadership talent and local employment regulations persist.
        </Typography>
      </CardContent>
      <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
        Show StartUp
      </Button>
    </Card>
  )
}

export default Card2
