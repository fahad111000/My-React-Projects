
import { Box, Text, Flex } from "@chakra-ui/react"
export default function Header() {
    return (
        <Box borderBottom="1px solid" borderColor={'border.light'} py={6} >
            <Flex justifyContent={'center'} align={'center'}>
                <Text fontSize={40} fontFamily={"math"} fontWeight={'bolder'}>Aryana Hotel</Text>
                <hr />
            </Flex>
        </Box>
    )
}
