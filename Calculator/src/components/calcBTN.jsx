import { Button } from '@chakra-ui/react';

export default function CalBTN({ value, type, onClick }) {

    let bg, hover, colorScheme;
    if (type === 'number') {
        bg = 'gray.200';
        hover = 'gray.300';
    }

    else if (type === 'operator') {
        colorScheme = 'orange';
    }

    else {
        bg = 'blue.300';
        hover = 'blue.400';
    }

    return (
        <>
            <Button onClick={() => onClick(value)} bg={bg} _hover={{ bg: hover }}
                colorScheme={colorScheme} w='100%'>

                {value}

            </Button>
        </>
    )
}