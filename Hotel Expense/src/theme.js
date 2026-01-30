// src/theme/system.js
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {

        // CutomeBg color for light and dark mode
        customBg: {
          value: {
            base: "#f4f4f4", // Soft Off-white
            _dark: "#121215"  // Deep Navy/Slate (Bohat sukoon deh dark mode)
          },
        },

        // appText
        appText: {
          value: {
            base: "#334155", // Soft Dark Gray
            _dark: "#F1F5F9"  // Almost White
          },
        },

        appLogoColor: {
          value: {
            base: "#04417ede",
            _dark: "#cbd2dffd"
          }
        },

        // app border
        appBorder: {
          value: {
            base: "#cedbecad",
            _dark: "#a9b4c5a8"
          }
        },

        // section bg
        sectionBg: {
          value: {
            base: "#FFFFFF",
            _dark: "#1E293B"
          }
        },

        tableHeaderBg: {
          value: { base: "#e5e7eb", _dark: "#1E293B" } 
        },

        tableRow: {
          value: { base: "#f4f4f4", _dark: "##4567" } 
        },


        tableBorder: {
          value: { base: "#E2E8F0", _dark: "#1E293B" }
        },

      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
