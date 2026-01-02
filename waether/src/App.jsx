import { Image, Box, Grid, GridItem, Heading, Input, VStack, HStack, Text, Flex } from '@chakra-ui/react';
import ee from "./assets/ee.png";
import cloudy from "./assets/cloudy.png";
// import rain from "./assets/rain.png";

export default function App() {

  return (
    <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }}
      bg='#0b131e' gap={'5'} padding={'10'}>

      <GridItem colSpan={{ base: 1, lg: 2 }} width={850}>
        <Input placeholder='Enter a city' color={'#eeececb7'} border={'none'} bg={'#2c314156'} _focus={{ boxShadow: "none", borderColor: "transparent" }} />
      </GridItem>

      {/* Weather Left */}
      <GridItem >

        <VStack color={'white'} align={'stretch'} >

          {/* Weather start */}
          <HStack color={'#fff'} justifyContent={'space-around'} padding={'2'}>
            <Box paddingY={'3'} >
              <Heading paddingY={'2'}>Madrid</Heading>
              <Text fontSize={'13px'}>Chance of rain: 0%</Text>
              <Heading fontSize={'50px'} marginTop={'10'}>45</Heading>
            </Box>

            <Box >
              <Image src={ee} boxSize="300px" objectFit={'contain'} />
            </Box>

          </HStack>

          {/* Today Forecast */}
          <Box bg={'#2c314156'} color={'#dddbdba2'} padding={6} marginTop={'1'} borderRadius={'xl'}>
            <Text fontSize={'17px'} >Today Forecast</Text>

            <HStack align={'stretch'}>

              <Flex paddingX={'5'} marginTop={'6'} alignItems={'center'} gap={'1'}
                direction={'column'} borderRight={'1px solid #c4c2c270'} fontSize={'15px'}>
                <Text>6:00</Text>
                <Image src={cloudy} boxSize={"43px"} />
                <Text color={'white'} fontWeight={'bold'} fontSize={'20px'}>25*</Text>
              </Flex>


            </HStack>
          </Box>

          {/* Air Conditions */}
          <Box bg={'#2c314156'} borderRadius={'xl'} padding={'5'} color={'#dddbdba2'} mt={2}>
            <Text paddingX={'2'} paddingY={'3'} fontSize={'17px'}>AIR CONDITIONS</Text>

            <HStack paddingX={'2'} paddingY={'3'} justifyContent={'space-between'}>
              {/* 1 */}
              <Box>
                <Flex direction={'column'} >
                  <Text>Real Feel</Text>
                  <Text color={'#ffff'} fontWeight={'bold'} fontSize={'17px'}>30*</Text>
                </Flex>
              </Box>

              {/* 2 */}
              <Box>
                <Flex direction={'column'}>
                  <Text>wind</Text>
                  <Text color={'#fff'} fontWeight={'bold'} fontSize={'17px'}>0.2 km/h</Text>
                </Flex>
              </Box>


              <Box>
                <Flex direction={'column'}>
                  <Text>Chance of rain</Text>
                  <Text color={'#fff'} fontWeight={'bold'} fontSize={'17px'}>0%</Text>
                </Flex>
              </Box>

              <Box>
                <Flex direction={'column'}>
                  <Text >UV index </Text>
                  <Text color={'#fff'} fontWeight={'bold'} fontSize={'17px'}>3</Text>
                </Flex>
              </Box>



            </HStack>
          </Box>

        </VStack>

      </GridItem>

      {/* Upcoming days weather Right */}
      <GridItem bg={'#2c314156'} borderRadius={"md"} color={'#dddbdba2'} >
        <Box paddingY={'5'} paddingX={'4'}>
          <Text fontWeight={'bold'}>   Day forecast</Text>

          <VStack fontSize={'14'} marginTop={'5'} paddingBottom={'5'} borderBottom={'1px solid #dad9d934'} align={'stretch'}>
            <Flex justifyContent={'space-between'} padding={'3'} alignItems={'center'}>

              <Text>Today</Text>

              <Box display={'flex'} alignItems={'center'} border={'2px solid reds'}>
                <Image src={ee} boxSize={'70px'} objectFit={'contain'} />
                <Text fontWeight={'bold'}>Sunny</Text>
              </Box>
              <Text > <Text as="span" color={'#fff'}>36</Text>/22</Text>
            </Flex>



          </VStack>

        </Box>
      </GridItem>

    </Grid>
  )

}