import { Image, Box, Grid, GridItem, Heading, Input, VStack, HStack, Text, Flex } from '@chakra-ui/react';
import ee from "./assets/ee.png";
import cloudy from "./assets/cloudy.png";
import rainy from "./assets/rainy.png";
import { useState } from 'react';

export default function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [todayForecast, setTodayForecast] = useState([]);

  const weatherIcons = {
    Clear: ee,
    Clouds: cloudy,
    Rain: rainy,
    Drizzle: rainy,
    Fog: cloudy,
  }


  const handleSearch = async (e) => {
    if (e.key !== "Enter") return;

    const apiKey = '1fa7a7b1e0e782ce51806d3000f1899f'
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
      const data = await res.json();
      setWeather(data)

      const forRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`);
      const forecastData = await forRes.json();
      const days = {};

      forecastData.list.forEach(list => {
        const date = list.dt_txt.split(" ")[0];
        if (!days[date]) {
          days[date] = []
        }

        days[date].push(list);
      });


      const daily = Object.keys(days).map(date => {
        const dayItems = days[date];

        return {
          date: date,
          dayName: new Date(date).toLocaleDateString("en-US", { weekday: "long" }),

          tempMax: Math.round(Math.max(...dayItems.map(i => i.main.temp))),
          tempMin: Math.round(Math.min(...dayItems.map(i => i.main.temp))),
          weather: dayItems[0].weather[0].main,
        }

      })

      setDailyForecast(daily.slice(0, 5));
      const next24Hours = forecastData.list.slice(0, 8);
      setTodayForecast(next24Hours);


    }

    catch (err) {
      console.log("Error")
    }
  }



  return (
    <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }}
      bg='#0b131e' gap={'5'} padding={'10'}>

      <GridItem colSpan={{ base: 1, lg: 2 }} width={850}>
        <Input placeholder='Enter a city' color={'#eeececb7'}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          border={'none'} bg={'#2c314156'} _focus={{
            boxShadow: "none",
            borderColor: "transparent"
          }}
          onKeyDown={(e) => handleSearch(e)}
        />
      </GridItem>

      {/* Weather Left */}
      <GridItem >

        <VStack color={'white'} align={'stretch'} >

          {/* Weather start */}
          {weather && (
            <HStack color={'#fff'} justifyContent={'space-around'} padding={'2'}>

              <Box paddingY={'3'} >
                <Heading paddingY={'2'}>{weather.name}</Heading>
                <Text fontSize={'13px'}>Chance of rain: 0%</Text>
                <Heading fontSize={'50px'} marginTop={'10'}>{Math.round(weather.main.temp)}°C</Heading>
              </Box>

              <Box >
                <Image src={weatherIcons[weather.weather[0].main] || cloudy} boxSize="300px" objectFit={'contain'} />
              </Box>

            </HStack>
          )}

          {/* Today Forecast */}
          <Box bg={'#2c314156'} color={'#dddbdba2'} padding={6} marginTop={'1'} borderRadius={'xl'}>
            <Text fontSize={'17px'} >Today Forecast</Text>

            <HStack align={'stretch'}>
              {todayForecast.map((item, index) => (

                <Flex paddingX={'5'} marginTop={'6'} alignItems={'center'} gap={'1'} key={index}
                  direction={'column'} borderRight={'1px solid #c4c2c270'} fontSize={'15px'}>
                  <Text>
                    {new Date(item.dt_txt).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit"
                    })}
                  </Text>
                  <Image
                    src={weatherIcons[item.weather[0].main] || cloudy}
                    boxSize="43px"
                    objectFit="contain"
                  />
                  <Text color={'white'} fontWeight={'bold'} fontSize={'20px'}>{Math.round(item.main.temp)}°</Text>
                </Flex>

              ))}


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
            {dailyForecast.map((day, index) => (

              <Flex key={index} justifyContent={'space-between'} padding={'3'} alignItems={'center'}>

                <Text w="90px">
                  {index === 0 ? "Today" : day.dayName}
                </Text>
                <Box display={'flex'} alignItems={'center'} border={'2px solid reds'}>
                  <Image src={weatherIcons[day.weather] || cloudy} boxSize={'80px'} objectFit={'contain'} />
                  <Text fontWeight={'bold'} >{day.weather}</Text>
                </Box>
                <Text > <Text as="span" color={'#fff'}>{day.tempMax}</Text>/{day.tempMin}°</Text>
              </Flex>


            ))}

          </VStack>

        </Box>
      </GridItem>

    </Grid>
  )

}