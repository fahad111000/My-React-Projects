// src/theme/system.js
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          100: { value: '#E3F2FF' },
        },

        border: {
          light: { value: '#e2e8f0' },
          dark: { value: '#70707263' }
        }
      },
    },
  },


})

export const system = createSystem(defaultConfig, config)
