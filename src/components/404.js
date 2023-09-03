import { Heading, Text, Button, Flex, useColorModeValue } from '@chakra-ui/react';
import {Link } from "react-router-dom";

export default function NotFound() {
  const bg = useColorModeValue("pink.50", "gray.100");
  const bgGradient = useColorModeValue("linear(to-r, maroon.300, maroon.200, maroon.100, maroon.200)", "linear(to-r, blue.300, blue.200, blue.100, blue.200)");
  const color = useColorModeValue("white.100", "white.100");

  return (
    <Flex textAlign="center" py={24} px={6} minH={"76vh"} w="100%" bg={bg} justify="center" direction="column">
      <Heading
        display="inline-block"
        as="h2"
        size="4xl"
        // bgGradient="linear-gradient(90deg, blue.600 0%, blue.500 35%, blue.400 100%)"
        bgGradient={bgGradient}
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="20px" mt={3} mb={2} fontWeight='bold'>
        Page Not Found!
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you're looking for does not seem to exist :(
      </Text>

      <Link to={'/'}> 
      <Button
        colorScheme="none" 
        // bgGradient="linear-gradient(90deg, blue.600 0%, blue.500 35%, blue.400 100%)"
        bgGradient={bgGradient}
        color="white"
        _hover={{
          bg:{color},
        }}
        >
        Go to Home
      </Button>
      </Link>
    </Flex>
  );
}