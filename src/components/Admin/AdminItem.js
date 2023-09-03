import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  SimpleGrid,
  StackDivider,
  // useColorModeValue,
  ListItem,
  Divider,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  UnorderedList,
} from "@chakra-ui/react";

export default function AdminItem({ item }) {
  return (
    <Container maxW={"7xl"}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: 18, md: 18 }}>
            <Flex w="100%" h="100%" align="left" direction="column">

              { item.images &&
              <Image
              rounded={"md"}
              alt={"product image"}
              src={(item.images[0]) }
              fit={"cover"}
              align={"center"}
              w={"100%"}
              boxShadow="lg"
              />
            }

              <Flex
                w="15%"
                // transform={{ base: "translateX(0)", lg: "translateX(-200%)" }}
                mt="5"
                gap={2}
              >
                {item.images &&
                  item.images.map((image, index) => (
                    <Image
                      key={index}
                      rounded={"md"}
                      alt={"product image"}
                      src={image}
                      fit={"cover"}
                      align={"center"}
                      _hover={{
                        cursor: "pointer",
                        transform: "scale(1.1)",
                        transition: "all 0.2s ease-in-out",
                        border: "1px dashed",
                        borderColor: "blue.100",
                      }}
                    />
                  ))}
              </Flex>
            </Flex>

            <Stack spacing={{ base: 6, md: 10 }}>
              <Box>
                <Text fontWeight="semibold" fontSize={{ base: "2xl", sm: "4xl" }}>
                  {item.title}
                </Text>

                <Text
                  // color={useColorModeValue("blue.100", "gray.400")}
                  fontWeight="semibold"
                  fontSize={{ base: "2xl", sm: "4xl" }}
                  textAlign="left"
                >
                  ${item.price}
                </Text>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={
                  <StackDivider
                  // borderColor={useColorModeValue("gray.200", "gray.600")}
                  />
                }
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text
                    // color={useColorModeValue("gray.500", "gray.400")}
                    fontSize={"2xl"}
                    fontWeight={"300"}
                  >
                    {item.description}
                  </Text>
                  <Text fontSize={"lg"}>{item.description}</Text>

                </VStack>
              </Stack>

              <Box mt="0px">
                <Box mt="0px">
                  <Divider orientation="horizontal" colorScheme="blue" mt="10" mb="10" />
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    // color={useColorModeValue("yellow.500", "yellow.300")}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Product Details
                  </Text>

                  <Table variant="striped" colorScheme="blue">
                    <Thead>
                      <Tr>
                        <Th>Specifications</Th>
                        <Th>Details</Th>
                      </Tr>
                    </Thead>
                    {item.details && (
                      <Tbody>
                        {Object.keys(item.details.specifications).map((key, index) => (
                          <Tr key={index}>
                            <Td>{key}</Td>
                            <Td>{item.details.specifications[key]}</Td>
                          </Tr>
                        ))}
                      </Tbody>
                    )}
                  </Table>
                </Box>

                <Box>
                  <Divider orientation="horizontal" colorScheme="blue" mt="10" mb="10" />
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    // color={useColorModeValue("yellow.500", "yellow.300")}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Features
                  </Text>

                  {item.details && (
                    <UnorderedList spacing={2}>
                      {item.details.list.map((listItem, index) => (
                        <ListItem key={index}> {listItem}</ListItem>
                      ))}
                    </UnorderedList>
                  )}
                </Box>

                {item.video && item.video.length > 0 && (
                  <Box>
                    <Divider orientation="horizontal" colorScheme="blue" mt="10" mb="10" />

                    <Text
                      fontSize={{ base: "16px", lg: "18px" }}
                      color="yellow.500"
                      fontWeight={"500"}
                      textTransform={"uppercase"}
                      mb={"4"}
                    >
                      Videos
                    </Text>
                    <Box w="100%" h= "360px">
                      {item.video.map((video, index) => (
                        <video key={index} controlsList="nodownload" controls
                        style={{display:"block", maxWidth:"100%", height:'100%', width:'100%'}}
                        >
                            <source src={video} type="video/mp4"/>      
                        </video>
                      ))}
                    </Box>
                  </Box>
                )}
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>
  );
}
