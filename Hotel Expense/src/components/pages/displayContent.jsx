import { Box } from '@chakra-ui/react';
import DashboardCards from "./dashboardCards";
import DailySheet from "../features/dailySheetPage"
import ThisMonth from './ThisMonth';
import ThisWeek from './ThisYear';


export default function DisplayContent({ view }) {
    return (
        <Box>
            {
                view === 'dashboard' && (<DashboardCards />)
            }

            {
                view === 'daily sheet' && (<DailySheet />)
            }

            {
                view === 'this month' && (<ThisMonth />)
            }

            {
                view === 'this week' && (<ThisWeek />)
            }
        </Box>
    )
}