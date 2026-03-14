
import { Flex, Text, Input, Box, createListCollection } from "@chakra-ui/react"
import { SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValueText } from "../ui/select"

const shifts = createListCollection({
    items: [
        { label: "Morning", value: "morning" },
        { label: "Night", value: "night" },
    ],
});


export default function ShiftInfo({ setActiveShift, currentShiftData, shiftClosed, onUpdate }) {
    return (
        <Box maxW={'1200px'} mx={'auto'} color={'appText'}>
            <Flex justifyContent={'space-between'} my={10}>


                {/* Manager */}
                <Flex gap={2} flexDirection={'column'}>
                    <Text fontWeight={'semibold'}>Manager</Text>
                    <Input disabled={shiftClosed}
                        placeholder="Manager Name" size={'sm'}
                        value={currentShiftData.manager || ""}
                        onChange={(e) => onUpdate("manager", e.target.value)} />
                </Flex>

                {/* date */}
                <Flex gap={2} flexDirection={'column'}>
                    <Text fontWeight={'semibold'}>Date</Text>
                    <Input disabled={shiftClosed}
                        type="date"
                        size="sm"
                        cursor={'pointer'}
                        value={currentShiftData.date || ""}
                        onChange={(e) => onUpdate("date", e.target.value)}
                    />
                </Flex>

                {/* Time */}
                <Flex gap={2} flexDirection={'column'}>
                    <Text fontWeight={'semibold'}>Time</Text>
                    <Input disabled={shiftClosed}
                        type="time"
                        size="sm"
                        cursor={'pointer'}
                        value={currentShiftData.time || ""}
                        onChange={(e) => onUpdate("time", e.target.value)}
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
