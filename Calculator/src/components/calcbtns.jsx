import { SimpleGrid, GridItem } from '@chakra-ui/react'
import CalBTN from './calcBTN'

export default function CalcButtons({ handleClick }) {
    return (
        <SimpleGrid columns={4} spacing={3}>

            <CalBTN value="AC" type='special' onClick={handleClick}>AC</CalBTN>
            <CalBTN value="C" onClick={handleClick}>C</CalBTN>
            <CalBTN value="%" type='operator' onClick={handleClick}>%</CalBTN>
            <CalBTN value="/" type='operator' onClick={handleClick}>/</CalBTN>

            <CalBTN value="7" type='number' onClick={handleClick}>7</CalBTN>
            <CalBTN value="8" type='number' onClick={handleClick}>8</CalBTN>
            <CalBTN value="9" type='number' onClick={handleClick}>9</CalBTN>
            <CalBTN value="x" type='operator' onClick={handleClick}>X</CalBTN>

            <CalBTN value="6" type='number' onClick={handleClick}>6</CalBTN>
            <CalBTN value="5" type='number' onClick={handleClick}>5</CalBTN>
            <CalBTN value="4" type='number' onClick={handleClick}>4</CalBTN>
            <CalBTN value="-" type='operator' onClick={handleClick}>-</CalBTN>

            <CalBTN value="1" type='number' onClick={handleClick}>1</CalBTN>
            <CalBTN value="2" type='number' onClick={handleClick}>2</CalBTN>
            <CalBTN value="3" type='number' onClick={handleClick}>3</CalBTN>
            <CalBTN value="+" type='operator' onClick={handleClick}>+</CalBTN>

            <GridItem colSpan={2}>
                <CalBTN w={'100%'} value="0" type='number' onClick={handleClick}>0</CalBTN>
            </GridItem>
            <CalBTN value="." type='number' onClick={handleClick}>.</CalBTN>
            <CalBTN value="=" type='operator' onClick={handleClick}>=</CalBTN>

        </SimpleGrid>
    )
}