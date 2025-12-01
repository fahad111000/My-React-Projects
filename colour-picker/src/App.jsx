import { Heading, VStack } from "@chakra-ui/react"
import Navbar from "./components/navbar"
import ColorPick from "./components/colorPick"
import { useEffect, useState } from "react"

export default function App() {
  const [theme, setTheme] = useState("light");
  const [colorPicker, setColorPicker] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem('color');
    if (saved) {
      setColorPicker(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('color', colorPicker)
  }, [colorPicker])



  const themeToggle = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  }



  return (
    <VStack spacing={0}>
      <Heading
        py='15px'
        w='100%' color='blue.700'
        bg='#17a8cce8'
        fontSize='20px'
        textAlign='center'
      >
        Colour Picker!
      </Heading>

      <Navbar theme={theme} themeToggle={themeToggle} />
      <ColorPick colorPicker={colorPicker} setColorPicker={setColorPicker} />
    </VStack>
  )
}