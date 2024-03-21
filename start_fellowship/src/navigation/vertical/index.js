// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountGroup from 'mdi-material-ui/AccountGroup'
import AccountCowboyHat from 'mdi-material-ui/AccountCowboyHat'
import AccountCog from 'mdi-material-ui/AccountCog'
import AccountCash from 'mdi-material-ui/AccountCash'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

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
      path: '/tables'
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
      title: 'Profile Settings',
      icon: AccountCog,
      path: '/account-settings'
    },
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: FormatLetterCase
    },
    {
      icon: FormatLetterCase,
      title: 'Form Layouts',
      path: '/form-layouts'
    }
  ]
}

export default navigation
