import { Spacer, Flex, Text, Button, theme } from "@chakra-ui/react"
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar({ theme, themeToggle }) {
    return (
        <Flex
            // border="1px solid black"
            bg={theme === 'light' ? '#ebdcdcab' : "#353232ff"}
            color={theme === "light" ? '#000' : "#fff"}
            w='100%'
            alignItems='center'
            padding='2'
            as='nav'
        >
            <Text fontSize='xl' fontWeight='bold'>Colour Picker!</Text>
            <Spacer />
            <Button onClick={themeToggle} colorScheme="orange">{theme === "light" ? "Dark" : "Light"} </Button>
        </Flex >
    )
}