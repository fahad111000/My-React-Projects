import Header from "./components/features/header"
import ShiftInfo from "./components/features/shiftinfo"
import RoomsTable from "./components/features/roomexpenseTable"
import FinalSummary from "./components/features/finalReport"
import { Box } from "@chakra-ui/react"


export default function App() {
  return (
    <Box bg={'customBg'}>
    <Header />
      <ShiftInfo />
      <RoomsTable />
      {/* <FinalSummary /> */}
    </Box >
  )

}