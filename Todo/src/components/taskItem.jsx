import { Flex, Box, Checkbox, Text, textDecoration, } from '@chakra-ui/react'
import { FaTrash } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react"
import { EditIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box)
export default function TaskItem({ task, handelDelete, handelEdit, toggleComplete }) {

    return (
        <>
            {/* Flex Box Row(Detials) */}

            <MotionBox
                // px="15px"
                // py="1px"
                borderRadius="md"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
            // whileHover={{ scale: 1.01 }}
            >

                < Box px={"15px"} py={'8px'} borderRadius={"md"}  >
                    <Flex borderRadius={'md'} w="100%" bg={"white"}
                        py={"10px"} px={'10px'} mb={"1px"} align={'center'} justify={'space-between'} >

                        {/* Check box */}
                        <Checkbox size={'lg'} gap={"5px"}
                            isChecked={task.completed}
                            onChange={toggleComplete} >

                            <Flex direction={'column'} align={'left'}>
                                <Text
                                    textDecoration={task.completed ? "line-through" : 'none'}
                                    color={task.completed ? "gray.500" : "gray.600"}
                                    fontSize={'16px'}>{task.title}</Text>
                            </Flex>

                        </Checkbox>

                        {/*Delet and Edit Buttons  */}
                        <Flex gap={'5px'}>
                            <IconButton onClick={handelEdit} _hover={{ color: 'blue' }} icon={<EditIcon />} />
                            <IconButton onClick={handelDelete} _hover={{ color: 'maroon' }} icon={<FaTrash />} />
                        </Flex>
                    </Flex>
                </Box >
            </MotionBox>
        </>

    )
}