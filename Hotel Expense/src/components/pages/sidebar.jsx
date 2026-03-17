
import { VStack, Icon, Text, Box, Flex } from "@chakra-ui/react"
import { LucideClipboard, LucideHistory, LucideLayoutDashboard, LucideTrendingUp } from "lucide-react"



export default function SideBar({ view, setView }) {

    return (
        <Box
            w='260px'
            h='100vh'
            bg="white"
            borderRight='2px solid'
            borderColor='appBorder'
            px={1}
            shadow={'md'}

        >
            <VStack align={'strech'} gap={1}  >


                {/* Logo */}
                <Box p={2} >
                    <Text
                        fontSize="2xl" fontWeight="bold"
                        color="blue.400" letterSpacing="tight">
                        AR
                    </Text>
                </Box>

                {/* Divider ka Alternative v3 ke liye */}
                <Box my={1} height="1px" bg="gray.100" width="100%" />


                {/* Navigation Links */}
                <NavItem
                    label={'dashboard'}
                    icon={LucideLayoutDashboard}
                    isActive={view === 'dashboard'}
                    onClick={() => setView('dashboard')}
                />

                {/* Dailysheet */}
                <NavItem
                    label={'daily-sheet'}
                    icon={LucideClipboard}
                    isActive={view === 'daily sheet'}
                    onClick={() => setView('daily sheet')}
                />


                {/* This week */}
                <NavItem
                    label={'this week'}
                    icon={LucideHistory}
                    isActive={view === 'this week'}
                    onClick={() => setView('this week')}
                />

                {/* This month */}
                <NavItem
                    label={'this month'}
                    icon={LucideTrendingUp}
                    isActive={view === 'this month'}
                    onClick={() => setView('this month')}
                />



            </VStack>


        </Box >
    )
}


function NavItem({ label, icon, isActive, onClick }) {
    return (
        <Flex
            onClick={onClick}
            align={'center'}
            gap={4}
            p={4}
            cursor={'pointer'}
            borderRadius={'sm'}
            transition={'all 0.2s'}

            bg={isActive ? "blue.50" : "transparent"}
            color={isActive ? "blue.600" : "gray.600"}

            _hover={{ bg: "gray.50", color: "blue.500" }}
        >

            {/* Icon */}
            <Icon as={icon} fontSize={'20px'} />

            {/* Text */}
            <Text>
                {label}
            </Text>


        </Flex>
    )
}