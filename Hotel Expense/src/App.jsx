// import Header from "./components/features/header"
// import ShiftInfo from "./components/features/shiftinfo"
// import RoomsTable from "./components/features/roomexpenseTable"
// import FinalSummary from "./components/features/finalReport"
// import Dashboard from "./components/pages/mainDashboard"
// import IM from './assets/logo.png'
import { Box } from "@chakra-ui/react"
// import { useState, useEffect } from "react"
import MainDashboard from "./components/pages/mainDashboard"
import DailySheet from "./components/features/dailySheetPage"

export default function App() {

  // const [shiftsData, setShiftsData] = useState(() => {
  //   const savedData = localStorage.getItem("hotel_data");
  //   return savedData ? JSON.parse(savedData) : {
  //     morning: { rooms: [], expense: [], manager: "", date: "", time: "", shiftClosed: false },
  //     night: { rooms: [], expense: [], manager: "", date: "", time: "", shiftClosed: false }
  //   };
  // });



  // const handelResetShift = () => {
  //   let newShiftsData = { ...shiftsData };
  //   newShiftsData[activeShift] = {
  //     rooms: [],
  //     expense: [],
  //     manager: "",
  //     date: "",
  //     time: "",
  //     shiftClosed: false
  //   };

  //   setShiftsData(newShiftsData)
  // }

  // // shifts selection
  // const [activeShift, setActiveShift] = useState("morning");

  // useEffect(() => {
  //   localStorage.setItem("hotel_data", JSON.stringify(shiftsData));
  // }, [shiftsData]);

  // const handleUpdateData = (type, newData) => {
  //   setShiftsData(prev => ({
  //     ...prev, [activeShift]: { ...prev[activeShift], [type]: newData }
  //   }));
  // };

  return (

    <Box bg={'customBg'}>

      <MainDashboard  />
      {/* <DailySheet /> */}
      {/* 
      <Header />

      <ShiftInfo activeShift={activeShift} setActiveShift={setActiveShift}
        currentShiftData={shiftsData[activeShift]}
        onUpdate={handleUpdateData}
        shiftClosed={shiftsData[activeShift].shiftClosed} />

      <RoomsTable currentData={shiftsData[activeShift]}
        shiftClosed={shiftsData[activeShift].shiftClosed}
        setShiftClosed={(val) => { handleUpdateData("shiftClosed", val) }}
        onUpdate={handleUpdateData}
        onReset={handelResetShift} />

      <FinalSummary shiftsData={shiftsData} /> */}

    </Box >
  )

}