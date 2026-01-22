import { Flex, Text, Input, Box } from "@chakra-ui/react"
export default function ShiftInfo() {
    return (
        <Box>
            <Flex borderBottom={'1px solid #70707263'} justifyContent={'space-between'} p={5}>

                <Flex gap={1} flexDirection={'column'}>
                    <Text fontWeight={'semibold'}>Manager</Text>
                    <Input placeholder="Manager Name" size={'sm'} />
                </Flex>

                <Flex gap={1} flexDirection={'column'}>
                    <Text fontWeight={'semibold'}>Date</Text>
                    <Input
                        type="date"
                        size="sm"
                        cursor={'pointer'}
                    />
                </Flex>

                <Flex gap={1} flexDirection={'column'}>
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