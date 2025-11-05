import { useState } from "react";
import { Button, Heading, Text, VStack, HStack } from "@chakra-ui/react";

export default function App() {

  const [count, setCount] = useState(0);

  return (
    <VStack color={'teal'} my={'10'}>
      <Heading fontSize={'5xl'}>Counter App</Heading>

      <Text border={'1px solid gray'} fontWeight={'bold'} bg={'teal.600'} color={'white'}
        fontSize={'5xl'} my={'5'} px={'16'} py={'10'} borderRadius={'4'}>{count}</Text>

      <HStack>
        <Button onClick={() => setCount(count + 1)} size={'lg'}
          _hover={{ background: '#116161', color: 'white' }}>+</Button>

        <Button onClick={() => setCount(0)} size={'lg'}
          _hover={{ background: '#2E6F40 ', color: 'white' }}>Rest</Button>

        <Button onClick={() => setCount(count - 1)} size={'lg'}

          _hover={{ background: 'maroon', color: 'white' }}>-</Button>
      </HStack>
    </VStack>
  )
}