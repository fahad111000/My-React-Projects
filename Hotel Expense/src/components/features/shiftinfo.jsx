
import { Flex, Text, Input, Box, createListCollection } from "@chakra-ui/react"
import { SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValueText } from "../ui/select"

const shifts = createListCollection({
    items: [
        { label: "Morning", value: "morning" },
        { label: "Night", value: "night" },
    ],
});


export default function ShiftInfo({ setActiveShift, currentManger, onUpdate }) {
    return (
        <Box maxW={'1200px'} mx={'auto'} color={'appText'}>
            <Flex justifyContent={'space-between'} my={10}>


                {/* Manager */}
                <Flex gap={2} flexDirection={'column'}>
                    <Text fontWeight={'semibold'}>Manager</Text>
                    <Input placeholder="Manager Name" size={'sm'}
                        value={currentManger}
                        onChange={(e) => onUpdate("manager", e.target.value)} />
                </Flex>

                {/* date */}
                <Flex gap={2} flexDirection={'column'}>
                    <Text fontWeight={'semibold'}>Date</Text>
                    <Input
                        type="date"
                        size="sm"
                        cursor={'pointer'}
                    />
                </Flex>

                {/* Time */}
                <Flex gap={2} flexDirection={'column'}>
                    <Text fontWeight={'semibold'}>Time</Text>
                    <Input
                        type="time"
                        size="sm"
                        cursor={'pointer'}
                    />
                </Flex>

                {/* Shift Chanage */}
                <Flex gap={2} flexDirection={'column'}>
                    <Text fontWeight={'semibold'}>Select Shift</Text>

                    <SelectRoot collection={shifts}

                        onValueChange={(details) => {
                            const selectedValue = details.value[0]
                            setActiveShift(selectedValue)
                        }}
                        size={'sm'} width={'120px'} >
                        <SelectTrigger >
                            <SelectValueText placeholder='Select Shift' />
                        </SelectTrigger>

                        <SelectContent >
                            {shifts.items.map((shift) => (
                                <SelectItem cursor={"pointer"} item={shift} key={shift.value}>
                                    {shift.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </SelectRoot>


                </Flex>
            </Flex>


        </Box>
    )
}
