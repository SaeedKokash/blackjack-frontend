import { Badge, Box, Flex, Heading, Image, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import ChakraCarousel from "./ChakraCarousel";

function SliderCom({ items }) {
  const bg = useColorModeValue("pink.50", "gray.50");
  return (
    <Box p="2em" 
    // bg="gray.50"
    bg={bg}
    mt="1em"
    >
        
      <ChakraCarousel gap={32} >
        {items.map((item) => (
          <Flex
            key={item._id}
            boxShadow="md"
            border="1px solid"
            borderColor="gray.300"
            justifyContent="space-between"
            flexDirection="column"
            bg="white.100"
            borderRadius="lg"
            w="full"
            h="full"
            overflow="hidden"
            flex={1}
            p="1em"

          >
            
            <Box  w="10em" h="10em" m="auto" >
              <Link to={`/product/${item.title.replace(/\s+/g, "-").toLowerCase()}`}>
                <Image src={item.images[0]} alt="carousel" objectFit="contain" h="100%" borderRadius="lg"/>
              </Link>
            </Box>

            <Flex justifyContent="space-between" w="100%" mt="1em" px="1em" flexDir="column">
              <Heading fontWeight="semibold" textTransform="capitalize" lineHeight="1" fontSize="sm" align="center">
                {item.title}
                <Badge
                  ml="1"
                  fontSize="xs"
                  colorScheme="green"
                  p="1"
                  borderRadius="xl"
                >
                  ${item.price}
                </Badge>
              </Heading>
            </Flex>

          </Flex>
        ))}
      </ChakraCarousel>
    </Box>
  );
}

export default SliderCom;
