import { Box, Container, IconButton, Stack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import blueLogo from "../assets/blueLogo/3.JPG";
import maroonLogo from "../assets/maroonLogo/3.JPG";

export default function Footer() {
  const { colorMode } = useColorMode();
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
        <img src={
          colorMode === "light" ? maroonLogo : blueLogo

        } alt="footer-logo" width="300px" />
        <Text>© 2023 Divine Therapy. All rights reserved</Text>

        <Stack direction={"row"} spacing={1}>
          <IconButton
            as="a"
            // href="https://www.facebook.com/tgroupjo"
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
            as="a"
            // href="https://wa.me/962777737180"
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