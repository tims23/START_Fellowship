// ** Icon imports
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountGroup from 'mdi-material-ui/AccountGroup'
import AccountCowboyHat from 'mdi-material-ui/AccountCowboyHat'
import AccountCash from 'mdi-material-ui/AccountCash'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Community',
      icon: AccountGroup,
      path: '/cards'
    },
    {
      sectionTitle: 'Database'
    },
    {
      title: 'Fellows',
      icon: AccountCowboyHat,
      path: '/tables'
    },
    {
      title: 'StartUps',
      icon: CubeOutline,
      path: '/startups-list'
    },
    {
      title: 'Investors',
      icon: AccountCash,
      path: '/tables'
    },
    {
      sectionTitle: 'Other'
    },
    {
      title: 'Your Profile',
      icon: AccountOutline,
      path: '/profile'
    }
  ]
}

export default navigation
