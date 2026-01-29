import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ColorModeProvider } from "./components/ui/color-mode"
import { ChakraProvider } from "@chakra-ui/react"
import { system } from './theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider value={system}>

      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </ChakraProvider>

  </StrictMode>,
)
