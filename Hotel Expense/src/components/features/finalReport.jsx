import { Box, Text, Flex } from "@chakra-ui/react"
export default function FinalSummary({ shiftsData }) {

    // all rooms are merging
    const allRoomsRent = [...shiftsData.morning.rooms, ...shiftsData.night.rooms];
    // all expense are merging
    const allExpenses = [...shiftsData.morning.expense, ...shiftsData.night.expense];

    const totalSale = allRoomsRent.reduce((acc, item) => acc + Number(item.price), 0)
    const totalExpenses = allExpenses.reduce((acc, item) => acc + Number(item.price), 0)
    const totalNetCash = totalSale - totalExpenses;

    return (
        <Box color={'appText'} my={15} maxW={"1200px"} mx={'auto'} border={'2px solid'} borderColor={'appBorder'} borderRadius={'md'} p={6}>

            <Text fontSize="20px" fontWeight="bold" mb={4} textAlign="center">Final Summary</Text>
            <Box borderBottom={'1px solid'} borderColor={'appBorder'} />
            <Flex justify="space-between" my={5}>
                <Text>Total Room </Text>
                <Text fontWeight="bold">{totalSale.length}</Text>
            </Flex>

            <Flex justify="space-between" my={5}>
                <Text>Total Room Cash</Text>
                <Text fontWeight="bold">{totalSale.toLocaleString('en-IN')}</Text>
            </Flex>

            <Flex justify="space-between" mb={2}>
                <Text>Total Expense</Text>
                <Text fontWeight="bold">{totalExpenses.toLocaleString('en-IN')}</Text>
            </Flex>

            <Box borderTop="1px solid" borderColor={'appBorder'} my={5} />

            <Flex justify="space-between">
                <Text fontSize="lg" fontWeight="bold">
                    Final Net Cash
                </Text>
                <Text fontSize="lg" fontWeight="bold">
                    {totalNetCash.toLocaleString('en-IN')}
                </Text>
            </Flex>

        </Box >
    )
}