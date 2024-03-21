// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

const rows = [
  {
    summary: 'Stable Financial Position, Expanding MVP',
    type: 'Quarterly',
    date: '10/02/2024',
    documents: 'meeting-summary_1.docx',
  },
  {
    summary: 'New Expansion Opportunities',
    type: 'General',
    date: '22/02/2024',
    documents: 'meeting-summary_2.docx',
  },
  {
    summary: 'Pitch Coaching',
    type: 'AdHoc',
    date: '03/03/2024',
    documents: 'meeting-summary_3.docx',
  },
  {
    summary: 'Customer Survey Results, Potential Threats',
    type: 'General',
    date: '15/03/2024',
    documents: 'meeting-summary_4.docx',
  }
]

const statusObj = {
  Quarterly: { color: 'info' },
  AdHoc: { color: 'error' },
  Emergenxy: { color: 'warning' },
  General: { color: 'primary' }
}

const Meetings = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 1000 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Summary</TableCell>
              <TableCell>Meeting Type</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Documents</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow hover key={row.summary} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.summary}</Typography>
                    <Typography variant='caption'>{row.designation}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip
                    label={row.type}
                    color={statusObj[row.type].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.documents}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default Meetings
