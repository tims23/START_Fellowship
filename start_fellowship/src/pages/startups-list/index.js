// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import getDocument from 'src/firebase/firestore/getData'
import getStartups from 'src/firebase/firestore/getStartups'

// ** Components Imports
import CardStartUp from 'src/views/startups/CardStartUp'

const StartUps = () => {
  const [startups, setStartups] = useState([])

  useEffect(() => {
    getStartups().then((querySnapshot) => {
      const newData = querySnapshot.result.docs.map((doc) => ({...doc.data(), id:doc.id }));
      
      setStartups(newData)
      console.log(newData)
    })
  }, [])
  
  const listItems = startups.map((startup) =>
    <Grid item xs={12} sm={6} md={4}>
      <CardStartUp name={startup.name} image="/images/cards/glass-house.png" description={startup.productDescription}></CardStartUp>
    </Grid>
  );

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 0 }}>
        <Typography variant='h5'>Startups</Typography>
      </Grid>
     
      {listItems}
    </Grid>
  )
}

export default StartUps
