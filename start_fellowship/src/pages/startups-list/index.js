// ** MUI Imports
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import getDocument from 'src/firebase/firestore/getData'
import getFilters from 'src/firebase/firestore/getFilters'
import getStartups from 'src/firebase/firestore/getStartups'

// ** Components Imports
import CardStartUp from 'src/views/cards/CardStartUp'

const CardBasic = () => {
  const [startUps, setStartups] = useState([])
  const [filters, setfilters] = useState([{}])
  const [appliedFilters, setappliedFilters] = useState([])

  useEffect(() => {
    getStartups().then((querySnapshot) => {
      const newData = querySnapshot.result.docs.map((doc) => ({...doc.data(), id:doc.id }))
      if (querySnapshot.error != null) { console.error(querySnapshot.error) }
      setStartups(newData)
    })

    getFilters().then((querySnapshot) => {
      const newData = querySnapshot.result.docs.map((doc) => ({...doc.data(), id:doc.id }))
      if (querySnapshot.error != null) { console.error(querySnapshot.error) }
      setfilters(newData)
    })
  }, [])
  
  function isAppliedFilter(startup) {

    for (var i = 0; i < appliedFilters.length; i++) {
      const filter = appliedFilters[i]
      //console.log(filter)
      //console.log(startup.businessModel)
      console.log(startup[filter.name])
      if (startup[filter.name] != undefined) {
        if (startup[filter.name] != filter.selected) {
          return false
        }
      }
    }
    return true
  }

  const startUpList = startUps.filter((startUp)=>isAppliedFilter(startUp)).map((startUp) => 
      <Grid item xs={12} sm={6} md={4} key={startUp.id}>
        <CardStartUp 
        name={startUp.name} 
        image={startUp.logo} 
        description={startUp.productDescription} 
        location={startUp.countryHQ} 
        industry={startUp.industry}
        banner={startUp.banner}>
        </CardStartUp>
      </Grid>
  )

  function filterOptions(options = []) {
    return options.map((option) => 
      <MenuItem key={option} value={option}>{option}</MenuItem>
    )
  }

  const filterComponents = filters.map((filter) => 
    <Grid item xs={2} sx={{ paddingBottom: 0 }} key={filter.id}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{filter.id}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          onChange={(e)=>{
            setappliedFilters(appliedFilters.concat({
              "name": filter.property,
              "selected": e.target.value
            }))}}
        >
          {filterOptions(filter.options)}
        </Select>
      </FormControl>
    </Grid>
  )

  const resetButton = (
    <Grid item xs={1} sx={{ paddingBottom: 0 }}>
      <Button onClick={() => {
        setappliedFilters([])
      }}>Reset</Button>
    </Grid>
  )

  return (
    <Grid container spacing={6}>
      
      <Grid item xs={3} sx={{ paddingBottom: 0 }}>
        <Typography variant='h5'>All fellow StartUps</Typography>
        <Typography variant='body2'>Number of StartUps: {startUps.length}</Typography>
      </Grid>

      {resetButton}
      {filterComponents}
      <Grid xs={12}></Grid>

     {startUpList}

    </Grid>
  )
}

export default CardBasic
