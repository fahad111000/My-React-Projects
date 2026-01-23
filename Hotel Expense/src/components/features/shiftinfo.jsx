import { Flex, Text, Input, Box } from "@chakra-ui/react"
export default function ShiftInfo() {
    return (
        <Box maxW={'1200px'} mx={'auto'}>
            <Flex borderBottom={'1p solid #70707263'} justifyContent={'space-between'} my={'5'} >

                <Flex gap={2} flexDirection={'column'}>
                    <Text fontWeight={'semibold'}>Manager</Text>
                    <Input placeholder="Manager Name" size={'sm'} />
                </Flex>

                <Flex gap={2} flexDirection={'column'}>
                    <Text fontWeight={'semibold'}>Date</Text>
                    <Input
                        type="date"
                        size="sm"
                        cursor={'pointer'}
                    />
                </Flex>

                <Flex gap={2} flexDirection={'column'}>
                    <Text fontWeight={'semibold'}>Time</Text>
                    <Input
                        type="time"
                        size="sm"
                        cursor={'pointer'}
                    />
                </Flex>
            </Flex>


        </Box>
    )
}