import { Box, Table, Input, Button, Flex, Text, IconButton, Grid } from "@chakra-ui/react";
import { useState } from "react";

export default function RoomsTable() {

    const [rooms, setRooms] = useState([]);
    const [expense, setExpense] = useState([]);

    const addRow = () => {
        const newRoom = {
            id: rooms.length + 1,
            roomNo: "",
            price: ""
        };

        setRooms([...rooms, newRoom]);

    }

    const handelRooms = (value, field, index) => {
        const updatedRooms = [...rooms];
        updatedRooms[index][field] = value;
        setRooms(updatedRooms);
    }

    const handelExpenses = (value, field, index) => {
        const updatedExpense = [...expense];
        updatedExpense[index][field] = value;
        setExpense(updatedExpense);
    }


    const addExpense = () => {
        const newExpense = {
            id: rooms.length + 1,
            desc: "",
            price: ""
        };

        setExpense([...expense, newExpense]);
    }

    const totalRoomRent = rooms.reduce((sum, item) => sum + (Number(item.price || 0)), 0);
    const totalExpenses = expense.reduce((sum, item) => sum + (Number(item.price || 0)), 0);
    const totalNetCash = totalRoomRent - totalExpenses;
    // console.log(totalRoomRent)

    return (
        <Box maxW={'1250px'} mx={'auto'} my={10} p={4}>

            <Grid alignItems={'start'} templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>

                {/* LEFT SIDE: ROOMS TABLE */}
                <Box border="2px solid" borderColor="appBorder" borderRadius="lg" overflow="hidden">
                    <Flex bg="tableHeaderBg" p={3} justifyContent="space-between" align="center">
                        <Text fontWeight="bold">Rooms Entry</Text>
                        <Button size="xs" className="no-print" onClick={addRow}>Add Room</Button>
                    </Flex>

                    {/* Table */}
                    <Table.Root >
                        <Table.Header>
                            <Table.Row bg={'tableRow'}>
                                <Table.ColumnHeader>Sno</Table.ColumnHeader>
                                <Table.ColumnHeader>Room No</Table.ColumnHeader>
                                <Table.ColumnHeader>Price</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>

                            {rooms.map((room, index) => (
                                <Table.Row bg={'tableRow'} key={index}>
                                    <Table.Cell>{index + 1}</Table.Cell>

                                    <Table.Cell>
                                        <Input
                                            value={room.roomNo}
                                            onChange={(e) => handelRooms(e.target.value, 'roomNo', index)}
                                            size="sm" variant="subtle" placeholder="Room #" />
                                    </Table.Cell>

                                    <Table.Cell>
                                        <Input
                                            value={room.price}
                                            onChange={(e) => handelRooms(e.target.value, 'price', index)}
                                            size="sm" variant="subtle" placeholder="Price"
                                            type="number" />
                                    </Table.Cell>


                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Root>
                </Box>

                {/* RIGHT SIDE: EXPENSES TABLE */}
                <Box border="2px solid" borderColor="appBorder" borderRadius="lg" overflow="hidden">
                    <Flex bg="tableHeaderBg" p={3} justifyContent="space-between" align="center" borderBottom="1px solid" borderColor="appBorder">
                        <Text fontWeight="bold">Expenses</Text>
                        <Button size="xs" onClick={addExpense}>Add Expense</Button>
                    </Flex>

                    <Table.Root variant="line">
                        <Table.Header>
                            <Table.Row bg={'tableRow'} borderBottom={'1px solid'} borderColor={'appBorder'}>
                                <Table.ColumnHeader borderBottom={'1px solid'} borderColor={'appBorder'}>Description</Table.ColumnHeader>
                                <Table.ColumnHeader borderBottom={'1px solid'} borderColor={'appBorder'}>Amount</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {expense.map((expe, index) => (

                                <Table.Row key={index} bg={'tableRow'} borderBottom={'1px solid'} borderColor={'appBorder'}>
                                    <Table.Cell>
                                        <Input
                                            value={expe.desc}
                                            onChange={(e) => handelExpenses(e.target.value, 'desc', index)}
                                            size="sm"
                                            variant="subtle" placeholder="CNG" />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Input
                                            value={expe.price}
                                            onChange={(e) => handelExpenses(e.target.value, 'price', index)}
                                            size="sm" variant="subtle" placeholder="0.00" type="number" />
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Root>
                </Box>

            </Grid>

            {/* FOOTER: TOTALS BAR */}
            <Box mt={6} borderRadius="lg" overflow="hidden" border="2px solid" shadow={'md'} borderColor="appBorder">
                <Grid templateColumns="repeat(3, 1fr)" textAlign="center" p={4}>

                    <Box>
                        <Text fontSize="sm" opacity={0.7}>Total Room Rent</Text>
                        <Text fontWeight="bold" fontSize="xl" >
                            PKR {Number(totalRoomRent).toLocaleString('en-IN')}
                        </Text>
                    </Box>

                    <Box borderX="2px solid" borderColor="appBorder">
                        <Text fontSize="sm" opacity={0.7}>Total Expense</Text>
                        <Text fontWeight="bold" fontSize="xl" color="red.500">
                            {Number(totalExpenses).toLocaleString('en-IN')}
                        </Text>
                    </Box>

                    <Box>
                        <Text fontSize="sm" opacity={0.7}>Net Cash</Text>
                        <Text fontWeight="bold" fontSize="xl" color="green.500">
                            {Number(totalNetCash).toLocaleString('en-IN')}

                        </Text>
                    </Box>


                </Grid>

            </Box>
            <Flex mt={6} justify="left" hideFrom="print">
                <Button colorScheme="blue" onClick={() => window.print()}>
                    Print Report
                </Button>
            </Flex>

        </Box>
    );
}