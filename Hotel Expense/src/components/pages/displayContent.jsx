import { Box } from '@chakra-ui/react';
import DashboardCards from "./dashboardCards";
import DailySheet from "../features/dailySheetPage"


export default function DisplayContent({ view }) {
    return (
        <Box>
            {
                view === 'dashboard' && (<DashboardCards />)
            }

            {
                view === 'daily sheet' && (<DailySheet />)
            }
        </Box>
    )
}