import { Box, SimpleGrid, Text, Flex, Heading, Icon, Badge, VStack } from "@chakra-ui/react";
import { LuCalendarDays, LuArrowDown, LuArrowUp, LuTrendingUp } from "react-icons/lu";

export default function ThisMonth() {
    // --- FAKE DATA (30 Days) ---
    const generateFakeData = () => {
        const data = [];
        const totalDays = 30; // 30 Cards

        for (let i = 1; i <= totalDays; i++) {
            // Fake status: 1=Profit, 2=Loss, 3=Break Even
            const status = Math.floor(Math.random() * 3) + 1;

            data.push({
                id: i,
                date: `Dec ${i < 10 ? '0' + i : i}`, // Dec 01, Dec 02...
                day: new Date(2023, 11, i).toLocaleDateString('en-US', { weekday: 'short' }), // Mon, Tue...
                revenue: Math.floor(Math.random() * 50000) + 10000,
                expense: Math.floor(Math.random() * 20000) + 5000,
                status: status,
            });
        }
        console.log(data)
        return data;
    };

    const monthlyHistory = generateFakeData();

    // Color logic for status
    const getStatusColor = (status) => {
        if (status === 1) return { bg: "green.50", color: "green.600", borderColor: "green.300" }; // Profit
        if (status === 2) return { bg: "red.50", color: "red.600", borderColor: "red.300" }; // Loss
        return { bg: "yellow.50", color: "yellow.600", borderColor: "yellow.300" }; // Break Even
    };

    return (
        <Box p="6" bg="gray.50" minH="100vh">
            {/* Header Section */}
            <Flex justify="space-between" align="center" mb="6">
                <VStack align="start" spacing={0}>
                    <Heading size="lg" color="gray.700">December 2023 Summary</Heading>
                    <Text color="gray.500">Overview of daily performance</Text>
                </VStack>

                {/* Total Monthly Summary (Optional Card) */}
                <Box bg="white" p="4" borderRadius="15px" shadow="sm" border="1px solid #e2e8f0" minW="200px">
                    <Flex align="center" gap="3">
                        <Icon as={LuTrendingUp} fontSize="28px" color="blue.500" />
                        <VStack align="start" spacing={0}>
                            <Text fontSize="xs" color="gray.500">Total Revenue</Text>
                            <Text fontSize="xl" fontWeight="bold" color="blue.700"> PKR 1,250,000</Text>
                        </VStack>
                    </Flex>
                </Box>
            </Flex>

            {/* --- 30 CARDS GRID START --- */}
            {/* Responsive columns: 1 on mobile, 3 on small tablet, 5 on big screen */}
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4, lg: 4 }} gap={'5'}>
                {monthlyHistory.map((entry) => {
                    const { bg, color, borderColor } = getStatusColor(entry.status);

                    return (
                        <Box
                            key={entry.id}
                            bg="white"
                            p="4"
                            borderRadius="15px"
                            shadow="sm"
                            border="1px solid"
                            borderColor="gray.100"
                            transition="all 0.2s"
                            _hover={{ shadow: "md", transform: "translateY(-3px)", borderColor: "blue.100" }}
                            cursor="pointer"
                            position="relative"
                            overflow="hidden"
                        >
                            {/* Date & Day Header */}
                            <Flex justify="space-between" align="center" mb="3">
                                <VStack align="start" spacing={0}>
                                    <Text fontSize="2xl" fontWeight="extrabold" color="gray.800" lineHeight="1">{entry.id}</Text>
                                    <Text fontSize="xs" fontWeight="bold" color="gray.400" textTransform="uppercase">{entry.day}</Text>
                                </VStack>
                                <Badge
                                    colorScheme=
                                    {entry.status === 1 ? 'green' : (entry.status === 2 ? 'red' : 'yellow')}
                                    borderRadius="full" px="2"
                                >
                                    {entry.status === 1 ? 'Profit' : (entry.status === 2 ? 'Loss' : 'Neutral')}
                                </Badge>
                            </Flex>

                            {/* Data Section (Revenue & Expense) */}
                            <VStack align="start" spacing="1" borderTop="1px solid #f0f0f0" pt="3">
                                <Flex align="center" gap="1" color="green.600">
                                    <Icon as={LuArrowUp} fontSize="12px" />
                                    <Text fontSize="xs" fontWeight="bold">PKR</Text>
                                    <Text fontSize="sm" fontWeight="bold">{(entry.revenue / 1000).toFixed(1)}k</Text>
                                </Flex>
                                <Flex align="center" gap="1" color="red.500">
                                    <Icon as={LuArrowDown} fontSize="12px" />
                                    <Text fontSize="xs">PKR</Text>
                                    <Text fontSize="sm">{(entry.expense / 1000).toFixed(1)}k</Text>
                                </Flex>
                            </VStack>

                            {/* Optional Status Border Bottom */}
                            <Box position="absolute" bottom="0" left="0" right="0" height="4px" bg={color} />
                        </Box>
                    );
                })}
            </SimpleGrid>
            {/* --- GRID END --- */}
        </Box>
    );
}