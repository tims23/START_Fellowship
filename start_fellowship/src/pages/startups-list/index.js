// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import getDocument from 'src/firebase/firestore/getData'
import getStartups from 'src/firebase/firestore/getStartups'

// ** Components Imports
import CardStartUp from 'src/views/cards/CardStartUp'

const CardBasic = () => {
  const [startUps, setStartups] = useState([])

  useEffect(() => {
    getStartups().then((querySnapshot) => {
      const newData = querySnapshot.result.docs.map((doc) => ({...doc.data(), id:doc.id }))
      console.log(newData)
      if (querySnapshot.error != null) { console.error(querySnapshot.error) }
      setStartups(newData)
    })
  }, [])
  
  const startUpList = startUps.map((startUp) => 
      <Grid item xs={12} sm={6} md={4} key={startUp.id}>
        <CardStartUp 
        name={startUp.name} 
        image={startUp.logo} 
        description={startUp.productDescription} 
        location={startUp.countryHQ} 
        industry={startUp.industry}>
        banner={startUp.banner}
        </CardStartUp>
      </Grid>
  )

  return (
    <Grid container spacing={6}>
      
      <Grid item xs={12} sx={{ paddingBottom: 0 }}>
        <Typography variant='h5'>All fellow StartUps</Typography>
        <Typography variant='body2'>Number of StartUps: 106</Typography>
      </Grid>

     {startUpList}

    </Grid>
  )
}

export default CardBasic
