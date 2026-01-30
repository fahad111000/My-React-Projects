import { LuSun, LuMoon } from "react-icons/lu";
import { Box, Text, Flex, Button, IconButton } from "@chakra-ui/react"
import { useColorMode } from "../ui/color-mode"


export default function Header() {

    const { toggleColorMode, colorMode } = useColorMode();
    console.log(colorMode)
    return (
        <Box borderBottom="1px solid"  borderColor={'appBorder'} py={6} >

            <Flex justifyContent={'center'} align={'center'}>

                <Box flex={1}  />

                {/* logo */}
                <Box  textAlign={'center'} flex={2} >
                    <Text color={'appLogoColor'} hideFrom="print"  fontSize={40} fontWeight={'extrabold'} fontFamily={"-apple-system"} >Aryana Hotel</Text>
                </Box>
                <hr />


                {/* Toggle Button */}
                <Flex flex={1}   justifyContent={'right'}>
                    <IconButton variant={'outline'}  onClick={toggleColorMode} size={'sm'} mx={10}>
                        {colorMode === "light" ? <LuMoon size={'10px'} /> : <LuSun />}
                    </IconButton>
                </Flex>
            </Flex>

        </Box>
    )
}
