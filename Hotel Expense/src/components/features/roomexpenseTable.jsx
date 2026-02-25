import { Box, Table, Input, Button, Flex, Text, Grid } from "@chakra-ui/react";
import { LuTrash2 } from "react-icons/lu";
import { useState, useEffect } from "react";

export default function RoomsTable({ currentData, onUpdate }) {
    const [rooms, setRooms] = useState(currentData.rooms || []);
    const [expense, setExpense] = useState(currentData.expense || []);

    useEffect(() => {
        setRooms(currentData.rooms || []);
        setExpense(currentData.expense || []);
    }, [currentData]);

    const isLastRoomEmpty =
        rooms.length > 0 && (!rooms[rooms.length - 1].roomNo || !rooms[rooms.length - 1].price);

    const isLastExpenseEmpty =
        expense.length > 0 && (!expense[expense.length - 1].desc || !expense[expense.length - 1].price);

    // --- Rooms Handlers ---
    const addRow = () => {
        const newRooms = [...rooms, { id: Date.now(), roomNo: "", price: "" }];
        setRooms(newRooms);
        onUpdate('rooms', newRooms); // Parent (App.js) mein save
    };

    const handelRooms = (value, field, index) => {
        const updatedRooms = [...rooms];
        updatedRooms[index][field] = value;
        setRooms(updatedRooms);
        onUpdate('rooms', updatedRooms);
    };

    const deleteRoom = (index) => {
        const updatedRooms = rooms.filter((_, i) => i !== index);
        setRooms(updatedRooms);
        onUpdate('rooms', updatedRooms);
    };

    // --- Expense Handlers ---
    const addExpense = () => {
        const newExpense = [...expense, { id: Date.now(), desc: "", price: "" }];
        setExpense(newExpense);
        onUpdate('expense', newExpense);
    };

    const handelExpenses = (value, field, index) => {
        const updatedExpense = [...expense];
        updatedExpense[index][field] = value;
        setExpense(updatedExpense);
        onUpdate('expense', updatedExpense);
    };


    // const deleteRoom = (index) => {
    //     const updatedRooms = rooms.filter((_, i) => i !== index);
    //     setRooms(updatedRooms);
    // };

    // const deleteExpense = (index) => {
    //     const updatedExpense = expense.filter((_, i) => i !== index);
    //     setExpense(updatedExpense);
    // };

    const deleteExpense = (index) => {
        const updatedExpense = expense.filter((_, i) => i !== index);
        setExpense(updatedExpense);
        onUpdate('expense', updatedExpense);
    };

    const totalRoomRent = rooms.reduce((sum, item) => sum + (Number(item.price || 0)), 0);
    const totalExpenses = expense.reduce((sum, item) => sum + (Number(item.price || 0)), 0);
    const totalNetCash = totalRoomRent - totalExpenses;
    // console.log(totalRoomRent)

    return (
        <Box maxW={'1250px'} mx={'auto'} my={10} p={4} height={'100vh'}>

            <Grid alignItems={'start'} templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>

                {/* LEFT SIDE: ROOMS TABLE */}
                <Box border="2px solid " borderColor="appBorder" borderRadius="lg" overflow="hidden">
                    <Flex bg="tableHeaderBg" p={3} justifyContent="space-between" align="center">
                        <Text fontWeight="bold">Rooms Entry</Text>
                        <Button
                            size="xs"
                            onClick={addRow}
                            disabled={isLastRoomEmpty} // Agar khali hai toh button kaam nahi karega
                            opacity={isLastRoomEmpty ? 0.5 : 1}
                            cursor={isLastRoomEmpty ? "not-allowed" : "pointer"}
                        >
                            Add Room
                        </Button>
                    </Flex>

                    {/* Table */}
                    <Table.Root >
                        <Table.Header>
                            <Table.Row bg={'tableRow'}>
                                <Table.ColumnHeader>Sno</Table.ColumnHeader>
                                <Table.ColumnHeader>Room No</Table.ColumnHeader>
                                <Table.ColumnHeader>Price</Table.ColumnHeader>
                                <Table.ColumnHeader>Delete</Table.ColumnHeader>

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

                                    <Table.Cell className="no-print">
                                        <Button
                                            variant="outline"
                                            color="red.600"
                                            size="xs"
                                            onClick={() => deleteRoom(index)}
                                        >
                                            <LuTrash2 size={16} />
                                        </Button>
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
                        <Button size="xs"
                            disabled={isLastExpenseEmpty}
                            opacity={isLastExpenseEmpty ? 0.7 : 1}
                            cursor={isLastExpenseEmpty ? "not-allowed" : "pointer"}
                            onClick={addExpense}>Add Expense</Button>
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


                                    <Table.Cell className="no-print">
                                        <Button
                                            variant="outline"
                                            color="red.600"
                                            size="xs"
                                            onClick={() => deleteExpense(index)}
                                        >
                                            <LuTrash2 size={16} />
                                        </Button>
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
                        <Text fontWeight="bold" fontSize="xl" color={totalNetCash > 0 ? 'green.500' : 'red'}>
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