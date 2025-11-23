import {
    Modal, ModalBody, ModalContent, ModalHeader,
    ModalCloseButton, ModalFooter, Button, Input, VStack,
    ModalOverlay
} from "@chakra-ui/react"
import { useState, useEffect } from "react"

export default function EditTask({ isOpen, onClose, onSave, task }) {

    const [input, setInput] = useState();

    useEffect(() => {
        if(task) setInput(task.title)
    }, [task])

    const handelSave = () => {
        if (input.trim() === "") {
            alert("Task cannot be empty!");
            return;
        }
        onSave(input);
        onClose();

    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay>
                <ModalContent>
                    <ModalHeader>
                        Edit Task
                    </ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <VStack>
                            <Input placeholder="Edit Task.." value={input}
                                onChange={(e) => setInput(e.target.value)} />
                        </VStack>
                    </ModalBody>


                    <ModalBody>
                        <ModalFooter gap={'2'}>

                            <Button onClick={handelSave} bg="blue.500"
                                _hover={{ bg: "blue.600" }} color='white'>Save</Button>

                            <Button onClick={onClose}
                                _hover={{ bg: "maroon", color: "#fff" }}>Cancel</Button>

                        </ModalFooter>
                    </ModalBody>
                </ModalContent>
            </ModalOverlay>

        </Modal>
    )
}
