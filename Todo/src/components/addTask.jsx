import {
    Modal, ModalOverlay, Flex, Select, ModalContent,
    ModalHeader, ModalBody, VStack, ModalCloseButton, Button, Input,
    ModalFooter, useDisclosure
} from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useState } from "react";

export default function AddTask({ handelTasks, filter, setFilters }) {

    const [input, SetInput] = useState("");

    const { isOpen, onOpen, onClose } = useDisclosure();

    const onSave = () => {
        handelTasks(input)
        SetInput("")
        onClose();
    }

    return (
        <>

            {/* Flex(Box) 1 Button and Filter */}
            <Flex my={'10px'}
                borderRadius={'4px'}
                p={"20px"}
                w={["100px", "200px", "800px"]}
                justify={'space-between'} py={'10px'} borderBottom={'1px solid #8285862c'}>

                {/* Add Button */}
                <Button onClick={onOpen} bg={'blue.500'} _hover={{ bg: 'blue.600' }} color={'white'}>Add Task</Button>

                {/* Select Status(Filter) */}
                <Select focusBorderColor="gray.400" _focus={{ borderColor: "transparent", }}
                    w={'130px'} outline={'none'}
                    value={filter}
                    onChange={(e) => setFilters(e.target.value)}
                    cursor={'pointer'} icon={<ChevronDownIcon />}>
                    <option style={{ fontSize: "0.85rem" }} value={'all'}>All</option>
                    <option style={{ fontSize: "0.85rem" }} value={'pending'}>Pending</option>
                    <option style={{ fontSize: "0.85rem" }} value={'completed'}>Completed</option>
                </Select>

            </Flex>



            {/* Modal */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Task</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack>
                            <Input placeholder="Enter a task... " value={input}
                                onChange={(e) => SetInput(e.target.value)} />
                        </VStack>
                    </ModalBody>

                    {/* Modal Footer */}
                    <ModalFooter gap={'1'}>
                        <Button onClick={onSave} bg={'blue.500'} _
                            _hover={{ bg: 'blue.600' }} color={'white'}>Save</Button>
                        <Button  onClick={onClose} _hover={{ bg: 'maroon', color: '#fff' }}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    )

}