import { Box, Container, IconButton, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo/blackjack logo4.png";

export default function Footer() {
  const bgGradient = useColorModeValue("linear(to-r, maroon.300, maroon.200, maroon.100, maroon.200)", "linear(to-r, blue.300, blue.200, blue.100, blue.200)");
  const color = useColorModeValue("white.100", "white.100");
  
  return (
    <Box
      bgGradient={bgGradient}
      color={color}
      position="relative"
      bottom="0"
      width="100%"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <img src={logo} alt="footer-logo" width="300px" />
        <Text>© 2023 JackBlack Clothing. All rights reserved</Text>

        <Stack direction={"row"} spacing={1}>
          <IconButton
            href={"#"}
            target="_blank"
            rounded={"full"}
            color = {useColorModeValue("white.100", "white.100")}
            bg="none"
            _hover={{
              bg: useColorModeValue("whiteAlpha.500", "blue.300"),
            }}
            icon={<FaFacebookF />}
          />

          <IconButton
            label={"WhatsApp"}
            href={"#"}
            target="_blank"
            rounded={"full"}
            color = {useColorModeValue("white.100", "white.100")}
            bg="none"
            _hover={{
              bg: useColorModeValue("whiteAlpha.500", "blue.300"),
            }}
            icon={<FaWhatsapp size="20px"/>}
          />

          <IconButton
            label={"Instagram"}
            href={"#"}
            rounded={"full"}
            color = {useColorModeValue("white.100", "white.100")}
            bg="none"
            _hover={{
              bg: useColorModeValue("whiteAlpha.500", "blue.300"),
            }}
            icon={<FaInstagram size="20px"/>}
          />
        </Stack>
        
      </Container>
    </Box>
  );
}