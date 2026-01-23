import Header from "./components/features/header"
import ShiftInfo from "./components/features/shiftinfo"
import RoomsTable from "./components/features/roomexpenseTable"
import FinalSummary from "./components/features/finalReport"

export default function App() {
  return (
    <>
      <Header />
      <ShiftInfo />
      <RoomsTable />
      <FinalSummary />
    </>
  )

}