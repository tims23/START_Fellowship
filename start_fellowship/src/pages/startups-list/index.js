// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import getDocument from 'src/firebase/firestore/getData'
import getStartups from 'src/firebase/firestore/getStartups'

// ** Components Imports
import CardStartUp from 'src/views/startups/CardStartUp'

const StartUps = () => {
  const [startups, setStartups] = useState([])

  useEffect(() => {
    getStartups().then((querySnapshot) => {
      try {
        const newData = querySnapshot.result.docs.map((doc) => ({...doc.data(), id:doc.id }));
        setStartups(newData)
      } catch (error) { }      
    })
  }, [])
  
  const listItems = startups.map((startup) =>
    <Grid item xs={12} sm={6} md={4} key={startup.id}>
      <CardStartUp name={startup.name} image="/images/cards/glass-house.png" description={startup.productDescription}></CardStartUp>
    </Grid>
  );

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 0 }}>
        <Typography variant='h5'>StartUps</Typography>
      </Grid>
     
      {listItems}
    </Grid>
  )
}

export default StartUps
