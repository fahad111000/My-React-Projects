import { Box, Text, Flex } from "@chakra-ui/react"
export default function FinalSummary() {
    return (
        <Box mt={15}  maxW={"1200px"} mx={'auto'} border={'2px solid #e2e8f0'} borderRadius={'md'} p={6}>

            <Text fontSize="20px" fontWeight="bold" mb={4} textAlign="center">Final Summary</Text>
            <Box borderBottom={'1px solid'} borderColor={'border.light'} />
            <Flex justify="space-between" my={5}>
                <Text>Total Room </Text>
                <Text fontWeight="bold">30</Text>
            </Flex>

            <Flex justify="space-between" my={5}>
                <Text>Total Room Cash</Text>
                <Text fontWeight="bold">30,000</Text>
            </Flex>

            <Flex justify="space-between" mb={2}>
                <Text>Total Expense</Text>
                <Text fontWeight="bold">3,000</Text>
            </Flex>

            <Box borderTop="1px solid" borderColor={'border.light'} my={5} />

            <Flex justify="space-between">
                <Text fontSize="lg" fontWeight="bold">
                    Final Net Cash
                </Text>
                <Text fontSize="lg" fontWeight="bold">
                    27,000
                </Text>
            </Flex>

        </Box >
    )
}