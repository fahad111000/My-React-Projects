import { VStack, Flex, Heading, Box, Input, Text } from "@chakra-ui/react"
export default function ColorPick({ setColorPicker, colorPicker }) {
    return (
        <VStack >

            <Flex
                direction='column'
                alignItems='center'
                gap='14px'
                mt='10'
            >

                <Box
                    bg={colorPicker}
                    mt='3px'
                    h='300px'
                    w='300px'
                    borderRadius='5px'
                    boxShadow='1px 1px 5px 1px gray'
                >
                </Box>

                <Heading fontSize='md' color='blue.700'>Please pick a colour!</Heading>
                <Input type="color" w='200px' cursor='pointer'
                    onChange={(e) => setColorPicker(e.target.value)} />
                <Text fontWeight='bold'>
                    {colorPicker}
                </Text>
            </Flex>
        </VStack>
    )
}