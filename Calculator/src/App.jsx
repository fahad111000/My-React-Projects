import { Box, Text, Heading, VStack, Flex } from '@chakra-ui/react'
import CalcButtons from './components/calcbtns'
import { useState } from 'react'

export default function App() {
  const [upper, setUpper] = useState("") // upper expression
  const [lower, setLower] = useState("") // lower result
  const [lastPressed, setLastPressed] = useState("") // last pressed type

  // ---------------- Number Input ----------------
  const handleNumberInput = (value) => {
    if (lastPressed === "=") {
      setUpper(value === "." ? "0." : value);
      setLower("");
      setLastPressed("number");
      return;
    }

    if (upper === "" && value === ".") {
      setUpper("0.");
      setLastPressed("number");
      return;
    }

    const newUpper = upper + value;
    setUpper(newUpper);
    setLastPressed("number");

    // Live calculation
    try {
      let exp = newUpper.replace(/x/g, "*").replace(/÷/g, "/");
      let result = eval(exp);
      setLower(result);
    } catch {
      setLower("");
    }
  }

  // ---------------- Operator Input ----------------
  const handleOperatorInput = (op) => {
    if (upper === "" && lower !== "") {
      setUpper(lower + op);
      setLower("");
      setLastPressed("operator");
      return;
    }

    if (lastPressed === "operator") {
      setUpper(prev => prev.slice(0, -1) + op);
      setLastPressed("operator");
      return;
    }

    setUpper(prev => prev + op);
    setLastPressed("operator");

    // Live result calculation before operator
    try {
      let exp = upper.replace(/x/g, "*").replace(/÷/g, "/");
      let result = eval(exp);
      setLower(result);
    } catch {
      setLower("");
    }
  }

  // ---------------- Equal Input ----------------
  const handleEqual = () => {
    if (upper === "") return;

    let exp = upper.replace(/x/g, "*").replace(/÷/g, "/");
    try {
      let result = eval(exp);
      setLower("");       // neeche result ko clear kar do (Samsung style)
      setUpper(result);   // upper me final result shift
      setLastPressed("=");
    } catch {
      setLower("Error");
    }
  }

  // ---------------- Clear / AC / C ----------------
  const handleClear = (value) => {
    if (value === "AC") {
      setUpper("");
      setLower("");
      setLastPressed("");
    } else if (value === "C") {
      // Remove last character
      setUpper(prev => prev.slice(0, -1));
    }
  }

  // ---------------- Percent ----------------
  const handlePercent = () => {
    if (upper === "") return;
    try {
      let exp = upper.replace(/x/g, "*").replace(/÷/g, "/");
      let result = eval(exp) / 100;
      setLower(result);
      setLastPressed("percent");
    } catch {
      setLower("Error");
    }
  }

  // ---------------- Unified handleClick ----------------
  const handleClick = (value) => {
    if (!isNaN(value) || value === ".") {
      handleNumberInput(value);
      return;
    }

    if (value === "+" || value === "-" || value === "x" || value === "/") {
      handleOperatorInput(value);
      return;
    }

    if (value === "=") {
      handleEqual();
      return;
    }

    if (value === "AC" || value === "C") {
      handleClear(value);
      return;
    }

    if (value === "%") {
      handlePercent();
      return;
    }
  }

  return (
    <VStack p={4} mt={'20px'}>
      <Heading color={'blue.800'}>Calculator App!</Heading>

      <Box w={'300px'} mt={'30px'} bg={'gray.800'} p={3} borderRadius={'lg'}>
        <Flex
          w='100%'
          h='90px'
          bg='grey.100'
          borderBottom='1px solid #464343ff'
          align='center'
          direction='column'
          justify='Center'
          alignItems='flex-end'
          p={3}
        >
          <Text color='gray.500' fontSize='2xl'>{upper || '0'}</Text>
          <Text color='gray.500' fontSize='xl'>{lower}</Text>
        </Flex>

        <Box mt={8}>
          <CalcButtons handleClick={handleClick} />
        </Box>
      </Box>
    </VStack>
  )
}
