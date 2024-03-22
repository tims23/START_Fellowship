// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import TrendingUp from 'mdi-material-ui/TrendingUp'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import CellphoneLink from 'mdi-material-ui/CellphoneLink'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import { useState } from 'react'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Button, TextField } from '@mui/material'


const salesData = [
  {
    stats: '245k',
    title: 'Sales',
    color: 'primary',
    icon: <TrendingUp sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '12.5k',
    title: 'Customers',
    color: 'success',
    icon: <AccountOutline sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '1.54k',
    color: 'warning',
    title: 'Products',
    icon: <CellphoneLink sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '$88k',
    color: 'info',
    title: 'Revenue',
    icon: <CurrencyUsd sx={{ fontSize: '1.75rem' }} />
  }
]

const renderStats = (editingOnGoing) => {
  const [kpis, setkpis] = useState({
    "Sales": "",
    "Customers": "",
    "Products": "",
    "Revenue": ""
  })
  const [sales, setsales] = useState(0)
  const [Customers, setCustomers] = useState(0)
  const [products, setproducts] = useState(0)
  const [revenue, setrevenue] = useState(0)

  const handleChangeValues = (title, newVal) => {
    var copy = {...kpis}
    copy[title] = newVal
    setkpis(copy)
  }

  return salesData.map((item, index) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          variant='rounded'
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: 'common.white',
            backgroundColor: `${item.color}.main`
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {editingOnGoing ? 
            <TextField 
            style={{width: "6rem"}} 
            size='small' 
            id="outlined-basic" 
            value={kpis[item]} 
            label={item.stats} 
            variant="outlined" 
            onChange={(e)=>{handleChangeValues(item.title, e.target.value)}}/>
           : 
           <div>
            <Typography variant='caption'>{item.title}</Typography>
            <Typography variant='h6'>{item.stats}</Typography>
           </div>
           }
          
        </Box>
      </Box>
    </Grid>
  ))
}

const StatisticsCard = () => {
  const [editingOnGoing, seteditingOnGoing] = useState(false)

  function handleStartEdit() {
    handleClose()
     seteditingOnGoing(!editingOnGoing)
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card>
      <CardHeader
        title='Overview'
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
              <div>
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <DotsVertical></DotsVertical>
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleStartEdit}>{editingOnGoing ? "Stop Editing" : "Edit"}</MenuItem>
                </Menu>
              </div>
          </IconButton>
        }
        subheader={
          <Typography variant='body2'>
            <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
              Total 48.5% growth
            </Box>{' '}
            😎 this month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats(editingOnGoing)}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default StatisticsCard
