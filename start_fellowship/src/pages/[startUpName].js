// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import News from 'src/views/dashboard/News'
import Meetings from 'src/views/dashboard/Meetings'
import ToDos from 'src/views/dashboard/ToDos'
import Employees from 'src/views/dashboard/Employees'
import Trophy from 'src/views/dashboard/Trophy'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import { styled } from '@mui/material/styles'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import { useRouter } from 'next/router'

const Dashboard = () => {

    const router = useRouter()

    return (
        <ApexChartWrapper>
        <Grid container spacing={6}>
            <Grid item xs={1} sm={1} lg={1} sx={{ mb: 5 }}>
                <Badge
                overlap='circular'
                sx={{ ml: 2, cursor: 'pointer' }}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <Avatar
                alt='John Doe'
                sx={{ width: 60, height: 60 }}
                src='/images/avatars/1.png'/>
                </Badge>
            </Grid>
            <Grid item xs={21} sm={8.5} lg={8.5}>
                <Typography variant='h6' sx={{ mt:2 }}>{router.query.startUpName}</Typography>
                <Typography variant='body2' sx={{ letterSpacing: '0.25px', mt:-2 }}>
                Software Technology, Germany
                </Typography>
            </Grid>
            <Grid item xs={3} sm={2.5} lg={2.5}>
                <Typography variant='body2' sx={{ letterSpacing: '0.25px', mt:15 }}>
                Last updated: <b>18 days ago</b>
                </Typography>
            </Grid>
        </Grid>
        <Grid container spacing={6}>
            <Grid item xs={24} sm={24}>
                <Typography variant='body' sx={{ m: 0 }} xs={4} sm={4}>
                Financial Overview
                </Typography>
                <Divider sx={{ m:0, ml: 40, mt:-3 }} xs={20} sm={20}/>
            </Grid>

            <Grid item xs={12} md={4}>
                <Trophy />
            </Grid>

            <Grid item xs={12} md={8}>
                <StatisticsCard />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
                <WeeklyOverview />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
                <TotalEarning />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
                <Grid container spacing={6}>
                    <Grid item xs={6}>
                    <CardStatisticsVerticalComponent
                        stats='$25.6k'
                        icon={<Poll />}
                        color='success'
                        title='Total Profit'
                        subtitle='Weekly Profit'
                        trendNumber='+42%'
                    />
                    </Grid>
                    <Grid item xs={6}>
                    <CardStatisticsVerticalComponent
                        stats='$78'
                        title='Refunds'
                        trend='negative'
                        color='secondary'
                        trendNumber='-15%'
                        subtitle='Past Month'
                        icon={<CurrencyUsd />}
                    />
                    </Grid>
                    <Grid item xs={6}>
                    <CardStatisticsVerticalComponent
                        stats='862'
                        trend='negative'
                        trendNumber='-18%'
                        title='New Project'
                        subtitle='Yearly Project'
                        icon={<BriefcaseVariantOutline />}
                    />
                    </Grid>
                    <Grid item xs={6}>
                    <CardStatisticsVerticalComponent
                        stats='15'
                        color='warning'
                        trend='negative'
                        trendNumber='-18%'
                        subtitle='Last Week'
                        title='Sales Queries'
                        icon={<HelpCircleOutline />}
                    />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={24} sm={24}>
                <Typography variant='body' sx={{ m: 0 }} xs={4} sm={4}>
                Employee Overview
                </Typography>
                <Divider sx={{ m:0, ml: 42, mt:-3 }} xs={20} sm={20}/>
            </Grid>

            <Grid item xs={6} md={3} lg={3}>
                <Employees />
            </Grid>
            <Grid item xs={6} md={3} lg={3}>
                <Employees />
            </Grid>
            <Grid item xs={6} md={3} lg={3}>
                <Employees />
            </Grid>
            <Grid item xs={6} md={3} lg={3}>
                <Employees />
            </Grid>

            <Grid item xs={24} sm={24}>
                <Typography variant='body' sx={{ m: 0 }} xs={4} sm={4}>
                News
                </Typography>
                <Divider sx={{ m:0, ml: 15, mt:-3 }} xs={20} sm={20}/>
            </Grid>

            <Grid item xs={12}>
                <News />
            </Grid>

            <Grid item xs={24} sm={24}>
                <Typography variant='body' sx={{ m: 0 }} xs={4} sm={4}>
                Communication
                </Typography>
                <Divider sx={{ m:0, ml: 34, mt:-3 }} xs={20} sm={20}/>
            </Grid>

            <Grid item xs={16} md={8} lg={8}>
                <Meetings />
            </Grid>

            <Grid item xs={8} md={4} lg={4}>
                <ToDos />
            </Grid>

        </Grid>
        </ApexChartWrapper>
    )
}

export default Dashboard
