// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import Button from '@mui/material/Button'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Founding Date' fullWidth {...props} />
})

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const FileStyled = styled('img')(({ theme }) => ({
  width: 600,
  height: 240,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))


const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const TabProfile = () => {
  // ** State
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')
  const [date, setDate] = useState(null)

  const onChange = file => {
    const reader = new FileReader()
    const { files } = file.target
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])
    }
  }


  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ImgStyled src={imgSrc} alt='Profile Pic' />
              <Box>
                <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                  Upload New Photo
                  <input
                    hidden
                    type='file'
                    onChange={onChange}
                    accept='image/png, image/jpeg'
                    id='account-settings-upload-image'
                  />
                </ButtonStyled>
                <ResetButtonStyled color='error' variant='outlined' onClick={() => setImgSrc('/images/avatars/1.png')}>
                  Reset
                </ResetButtonStyled>
                <Typography variant='body2' sx={{ marginTop: 5 }}>
                  Allowed PNG or JPEG. Max size of 800K.
                </Typography>
              </Box>
            </Box>
          </Grid>



          <Grid item xs={24} sm={24}>
            <Typography variant='body1' sx={{ m: 0 }} xs={4} sm={4}>
              Primary Information
            </Typography>
            <Divider sx={{ m:0, ml: 43, mt:-3 }} xs={20} sm={20}/>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Company' placeholder='e.g. "Dirimla AI"' />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormControl fullWidth>
              <InputLabel>Country</InputLabel>
              <Select label='Country'>
                <MenuItem value='Germany'>Germany</MenuItem>
                <MenuItem value='Australia'>Australia</MenuItem>
                <MenuItem value='Switzerland'>Switzerland</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={3}>
            <DatePickerWrapper>
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                id='profile-date'
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput />}
                onChange={date => setDate(date)}
              />
            </DatePickerWrapper>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mt: -2 }}>
            <TextField fullWidth label='Industry' placeholder='e.g. "Software Technology"' />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mt: -2 }}>
            <FormControl>
              <FormLabel sx={{ fontSize: '0.875rem' }}>Stage</FormLabel>
              <RadioGroup row defaultValue='male' aria-label='gender' name='account-settings-info-radio'>
                <FormControlLabel value='junior' label='Junior' control={<Radio />} />
                <FormControlLabel value='incubator' label='Incubator' control={<Radio />} />
                <FormControlLabel value='accelarator' label='Accelarator' control={<Radio />} />
                <FormControlLabel value='Veteran' label='Veteran' control={<Radio />} />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sx={{ mt: -2, mb: 3 }}>
            <TextField
              fullWidth
              multiline
              label='Description'
              minRows={2}
              placeholder='e.g. "We are a software startup based in Frankfurt, Germany ..."'            />
          </Grid>

          <Grid item xs={24} sm={24}>
            <Typography variant='body' sx={{ m: 0 }} xs={4} sm={4}>
              Presentation
            </Typography>
            <Divider sx={{ m:0, ml: 30, mt:-3 }} xs={20} sm={20}/>
          </Grid>

          <Grid item xs={12} sx={{ marginTop: 0, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FileStyled src={imgSrc} alt='Profile Pic' />
              <Box>
                <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                  Upload Business Plan
                  <input
                    hidden
                    type='file'
                    onChange={onChange}
                    accept='image/png, image/jpeg'
                    id='account-settings-upload-image'
                  />
                </ButtonStyled>
                <ResetButtonStyled color='error' variant='outlined' onClick={() => setImgSrc('/images/avatars/1.png')}>
                  Reset
                </ResetButtonStyled>
                <Typography variant='body2' sx={{ marginTop: 5 }}>
                  Allowed PNG or JPEG. Max size of 800K.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={24} sm={24}>
            <Typography variant='body' sx={{ m: 0 }} xs={4} sm={4}>
              Further Information
            </Typography>
            <Divider sx={{ m:0, ml: 30, mt:-3 }} xs={20} sm={20}/>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type='email'
              label='Email'
              placeholder='e.g. "info@dirimlaAI.com"' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type='phone'
              label='Phone'
              placeholder='e.g. "+49 12345678"' />
          </Grid>

          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }}>
              Save Changes
            </Button>
            <Button type='reset' variant='outlined' color='secondary'>
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabProfile
