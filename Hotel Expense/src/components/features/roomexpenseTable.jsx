
import {
    Box, Table, Input, Button, Flex, Text
} from "@chakra-ui/react";

export default function RoomsTable() {
    return (
        <Box maxW={'1200px'} mx={'auto'}  border={'2px solid'} my={10}
         borderColor={'border.light'} borderRadius={'md'} overflow={'hidden'}>
            <Table.Root >
                <Table.Header >
                    <Table.Row>
                        <Table.ColumnHeader>Sno</Table.ColumnHeader>
                        <Table.ColumnHeader>Rooms</Table.ColumnHeader>
                        <Table.ColumnHeader>Price</Table.ColumnHeader>
                        <Table.ColumnHeader borderLeft={"2px solid"} borderColor={'border.light'}>Expense</Table.ColumnHeader>
                        <Table.ColumnHeader >Expense Price</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell borderRight={'2px solid'} borderColor={'border.light'} fontWeight={'bold'}>
                            1
                        </Table.Cell>


                        <Table.Cell >
                            <Input placeholder={'Room No'} size={'sm'} />
                        </Table.Cell>


                        <Table.Cell>
                            <Input placeholder={'Price'} size={'sm'} type="number" />
                        </Table.Cell>

                        <Table.Cell borderLeft={'2px solid'} borderColor={'border.light'}>
                            <Input placeholder={'Expense'} size={'sm'} />


                        </Table.Cell>

                        <Table.Cell  >
                            <Input placeholder={'Amount'} size={'sm'} type="number" />
                        </Table.Cell>

                    </Table.Row>


                    {/* Total Row */}

                    {/* Total */}
                    <Table.Row>
                        <Table.Cell borderRight={'2px solid'} borderColor={'border.light'} fontWeight={'bold'} >Total</Table.Cell>
                        <Table.Cell fontWeight="bold" borderRight={'2px solid'} borderColor={'border.light'} colSpan={2}>0</Table.Cell>
                    </Table.Row>

                    {/* Expense Row */}
                    <Table.Row>
                        <Table.Cell borderRight={'2px solid'} borderColor={'border.light'} fontWeight="bold">Expense</Table.Cell>
                        <Table.Cell borderRight={'2px solid'} borderColor={'border.light'} fontWeight="bold" colSpan={2} >0</Table.Cell>
                    </Table.Row>


                    {/* Net Cash */}
                    <Table.Row>
                        <Table.Cell borderRight={'2px solid'} borderColor={'border.light'} colSpan={1} textAlign="left" fontWeight="bold">Net Cash</Table.Cell>
                        <Table.Cell borderRight={'2px solid'} borderColor={'border.light'} colSpan={2} textAlign="left" fontWeight="bold">3000</Table.Cell>
                    </Table.Row>

                </Table.Body>
            </Table.Root>
        </Box>
    )
}
