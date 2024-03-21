// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

const rows = [
  {
    task: 'Reach 10,000 Users'
  },
  {
    task: 'Finish 2nd Develoment Stage'
  },
  {
    task: 'Visit 5 International Fairs'
  },
  {
    task: 'Reach 25,000 Yearly Sales'
  }
]

const ToDos = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 300 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Quarterly Tasks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow hover key={row.task} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                    <Typography>
                      <FormGroup>
                        <FormControlLabel required control={<Checkbox />} label={row.task} />
                     </FormGroup>
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default ToDos
