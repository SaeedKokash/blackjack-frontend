import {
    Box,
    Button,
    Container,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    Textarea,
    useColorModeValue,
    useToast,
    VStack,
    Wrap,
    WrapItem,
  } from "@chakra-ui/react";
//   import emailjs from "@emailjs/browser";
  import { useEffect, useRef } from "react";
  import { BsFacebook, BsInstagram, BsPerson, BsWhatsapp } from "react-icons/bs";
  import { MdEmail, MdLocationOn, MdOutlineEmail, MdPhone } from "react-icons/md";
  
  export default function Contact() {
    const toast = useToast();
  
    const form = useRef();
  
    function sendEmail(e) {
      e.preventDefault();
    //   emailjs.sendForm("service_xq50kw5", "template_dco31gp", form.current, "IX5VyXcqhp-pd31y4").then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    //   e.target.reset();
      toast({
        title: "Your message has been sent successfully",
        description: "We will contact you as soon as possible",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }

    const smHoverProps = {
      _hover: {
        color: useColorModeValue("#88304e", "#3d84a8"),
      },
    };
    const iconColor = useColorModeValue("#c5597e", "#7cb3cf");
    const bg = useColorModeValue("pink.50", "gray.100");
    const borderColor = useColorModeValue("maroon.100", "blue.100");

    useEffect (() => {
      window.scrollTo(0, 0);
      document.title = "Contact Us | JackBlack Clothing";
    }, []);
  
    return (
      <Container 
      bg={bg}
      maxW="full" py={5} overflow="hidden"
      centerContent
      >
        <Flex>
          <Box
            borderRadius="3xl"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
            bg="white"
            boxShadow="lg"
            border="1px solid"
            borderColor={borderColor}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 5, md: 15 }}>
                <WrapItem>
                  <Box>
                    <Text fontSize={{ sm: "2xl", md: "3xl", lg: "4xl" }} fontWeight="bold">
                      Contact</Text>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Any questions or remarks? Feel free to contact us!
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack alignItems="flex-start" w="full">
                        <Button
                          size="md"
                          height="48px"
                          variant="ghost"
                          leftIcon={<MdPhone color={iconColor} size="20px" />}
                          colorScheme="none"
                        >
                          +962 79 123 4567
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          variant="ghost"
                          leftIcon={<MdEmail color={iconColor} size="20px" />}
                          colorScheme="none"
                        >
                          info@jackblack-clothing.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          variant="ghost"
                          leftIcon={<MdLocationOn color={iconColor} size="20px" />}
                          colorScheme="none"
                        >
                          Amman, Jordan
                        </Button>
                      </VStack>
                    </Box>
                    <HStack alignItems="flex-start">
                      <IconButton
                        aria-label="facebook"
                        color="gray.600"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={smHoverProps}
                        icon={<BsFacebook size="28px" />}
                      />
                      <IconButton
                        aria-label="instagram"
                        variant="ghost"
                        color="gray.600"
                        size="lg"
                        isRound={true}
                        _hover={smHoverProps}
                        icon={<BsInstagram size="28px" />}
                      />
                
                      <IconButton
                        aria-label="whatsapp"
                        variant="ghost"
                        color="gray.600"
                        size="lg"
                        isRound={true}
                        _hover={smHoverProps}
                        icon={<BsWhatsapp size="28px" />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg={bg} borderRadius="2xl" p={5} boxShadow="md" border="1px" borderColor={borderColor}>
                    <Box p="1em">
                      <VStack >
                        <form ref={form} onSubmit={sendEmail}>
                          <FormControl id="name" >
                            <FormLabel>Your Name</FormLabel>
                            <InputGroup borderColor="gray.50">
                              <InputLeftElement pointerEvents="none" children={<BsPerson color="gray.800" />} />
                              <Input
                                type="text"
                                name={"user_name"}
                                placeholder="name"
                                variant="primary"
                              />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name" mt={5}>
                            <FormLabel>Mail</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement pointerEvents="none" children={<MdOutlineEmail color="gray.800" />} />
                              <Input
                                type="email"
                                name={"user_email"}
                                placeholder="email"
                                variant="primary"
                              />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name" mt={5}>
                            <FormLabel>Message</FormLabel>
                            <Textarea
                              resize="none"
                              placeholder="message"
                              name={"message"}
                              variant="primary"
                            />
                          </FormControl>
                          <FormControl id="name" float="right" mt={5}>
                            <Button variant="submit" type="submit" w="100%">
                              Send Message
                            </Button>
                          </FormControl>
                        </form>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }