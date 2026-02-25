import Header from "./components/features/header"
import ShiftInfo from "./components/features/shiftinfo"
import RoomsTable from "./components/features/roomexpenseTable"
import FinalSummary from "./components/features/finalReport"
import { Box, Text } from "@chakra-ui/react"
import { useState, useEffect } from "react"


export default function App() {

  const [shiftsData, setShiftsData] = useState(() => {
    const savedData = localStorage.getItem("hotel_app_data");
    return savedData ? JSON.parse(savedData) : {
      morning: { rooms: [], expense: [], manager: "" },
      night: { rooms: [], expense: [], manager: "" }
    };
  });

  const [activeShift, setActiveShift] = useState("morning");

  useEffect(() => {
    localStorage.setItem("hotel_app_data", JSON.stringify(shiftsData));
  }, [shiftsData]);

  const handleUpdateData = (type, newData) => {
    setShiftsData(prev => ({
      ...prev, [activeShift]: { ...prev[activeShift], [type]: newData }
    }));
  };

  return (
    <Box bg={'customBg'}>
      <Header />
      <ShiftInfo setActiveShift={setActiveShift} currentManger={shiftsData[activeShift].manager} onUpdate={handleUpdateData} />
      <RoomsTable currentData={shiftsData[activeShift]} onUpdate={handleUpdateData} />
      {/* <Text fontWeight={'semibold'}>{activeShift}</Text> */}
      {/* <FinalSummary /> */}
    </Box >
  )

}