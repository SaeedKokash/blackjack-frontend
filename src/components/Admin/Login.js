import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  // useToast,
  Image,
  FormLabel,
  VStack,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

import blueLogo from "../../assets/logo/blackjack logo4.png";
import maroonLogo from "../../assets/logo/blackjack logo4.png";


import { useSelector, useDispatch } from "react-redux";
import { loginAdmin } from "../../store/actions/adminActions";
import { useEffect } from "react";

function Login() {

  // const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error = useSelector((state) => state.admin.error);
  const loading = useSelector((state) => state.admin.loading);

  const { colorMode } = useColorMode();
  // const bg = useColorModeValue("maroon.300", "blue.300");
  const bgGradient = useColorModeValue("linear(to-r, maroon.300, maroon.200, maroon.100, maroon.200)", "linear(to-r, blue.300, blue.200, blue.100, blue.200)");

  const handleLogin = async (e) => {
    e.preventDefault();
    loginAdmin(dispatch, e, navigate);
  };

  useEffect(() => {
    document.title = 'Login | JackBlack Clothing'
  }, [])

  return (
    <Flex direction={{ base: "column", md: "row" }} justify="center" align="center" w="100%" minH={"76vh"}
      bgGradient={bgGradient}

    >
      <VStack
        pt="2em"
        pb="2em"
      >
        {/* <Heading textStyle="h1" color="white.100" mb="1em">
            Welcome Back!
          </Heading> */}

        <Box
          maxW="lg"
          rounded={"lg"} 
          p={8}
          boxShadow="xl"
          filter={{ base: 'none', sm: 'drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.3))' }}
          align="center"
        // bg="grey.100"
        >

          <Image src={colorMode === "light" ? maroonLogo : blueLogo}
            alt="logo"
            w="60%"
            mb="1em"
            transition="all 0.3s ease-in-out"
            borderRadius="xl"
          />
          <form onSubmit={(e) => handleLogin(e)}>

            <FormControl pb="2em" isRequired>
              <FormLabel color="white.100">Username</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<TfiEmail />} />
                <Input type="text" name="userName" placeholder="Username" variant='primary' autoComplete="Username" />
              </InputGroup>
            </FormControl>

            <FormControl pb="2em" isRequired>
              <FormLabel color="white.100">Password</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<FaLock />} />
                <Input type="password" name="password" placeholder="password" autoComplete="current-password" variant='primary' />
              </InputGroup>
            </FormControl>

            {error && (
              <Alert status="error" variant="left-accent" mb="1em">
                <AlertIcon />
                {error}
              </Alert>
            )}

            {loading ?
              <Button variant="back" type="submit" mb="1rem" w="100%" isLoading>
                Login
              </Button>
              :
              <Button variant="back" type="submit" mb="1rem" w="100%"
              >
                Login
              </Button>
            }

          </form>
        </Box>
      </VStack>
    </Flex>
  );
}

export default Login;