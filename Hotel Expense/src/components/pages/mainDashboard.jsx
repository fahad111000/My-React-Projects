import SideBar from "./sidebar"
import DailySheet from "../features/dailySheetPage"

import DisplayContent from "./displayContent"
import { useState } from "react"
import { Flex, Box, Text } from "@chakra-ui/react"

export default function MainDashboard() {
    const [view, setView] = useState('dashboard');

    return (
        <Box>
            {/* <ShiftInfo /> */}

            <Flex>

                {/* Sidebar */}
                <SideBar view={view} setView={setView} />

                <Box border={'1px solid '} borderColor={'appBorder'} />

                {/*DsiplayContent  */}
                <Box flex={1} p={2} my={1}>

                    {/* Current Page Showing */}
                    <Box p={2} px={4} my={1}>
                        <Text>{view}</Text>
                    </Box>

                    <Box border={'1px solid '} borderColor={'appBorder'} />

                    <DisplayContent view={view} />

                </Box>

            </Flex>
        </Box>
    )
}