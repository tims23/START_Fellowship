// ** Icon imports
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import CogOutline from 'mdi-material-ui/CogOutline'
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
      title: 'Settings',
      icon: CogOutline,
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
