import { useEffect } from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminItems } from "../../../store/actions/adminActions";
// import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import SliderCom from "./Carousel/SliderCom";

function SuggestedItems() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.admin);
  const { cart } = useSelector((state) => state.order);

  // filter out items in cart and keep the rest in remainingItems
  const remainingItems = items.filter((item) => {
    return !cart.find((cartItem) => cartItem._id === item._id);
  });

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrevClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? remainingItems.length - 3 : prevIndex - 1));
//   };

//   const handleNextClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === remainingItems.length - 3 ? 0 : prevIndex + 1));
//   };

  useEffect(() => {
    getAdminItems(dispatch);
    window.scrollTo(0, 0);
  }, [dispatch]);

  return (
    <Stack align="center" w="100%">
      {remainingItems.length > 0 && (
        <Box w="100%">
          <Text align="center" fontWeight="semibold" px="2em">Recommendations based on items in your cart</Text>
          <SliderCom items={remainingItems} />
        </Box>
      )}

         {/* {remainingItems.map((item) => (
        <div key={item._id}>
          <Box key={item.id} textAlign="center">
            <Box bg="gray.200" borderRadius="md" overflow="hidden" w="20" h="20">
              <Box bg={`url(${item.images[0]}) center center / contain no-repeat`} w="full" h="full" />
            </Box>
            <Text mt="2">{item.title}</Text>
          </Box>
        </div>
      ))} */}

      {/* <Box bg="gray.50" py="8">
        <Flex alignItems="center" justifyContent="center" mb="4">
          <IconButton
            aria-label="Previous"
            icon={<ChevronLeftIcon />}
            onClick={handlePrevClick}
            disabled={currentIndex === 0}
            mr="4"
          />
          <Box overflow="hidden" position="relative" w="full" maxW="lg" h="80">
            <Stack
              direction="row"
              position="absolute"
              left={`${-(currentIndex * 33.33)}%`}
              transition="left 0.5s"
              w="full"
            >
              {remainingItems.slice(currentIndex, currentIndex + 3).map((item) => (
                <Box key={item.id} w={`${100 / 3}%`} textAlign="center">
                  <Box bg="gray.200" borderRadius="md" overflow="hidden" w="full" h="64">
                    <Box bg={`url(${item.images[0]}) center center / contain no-repeat`} w="full" h="full" />
                  </Box>
                  <Text mt="2">{item.title}</Text>
                </Box>
              ))}
            </Stack>
          </Box>
          <IconButton
            aria-label="Next"
            icon={<ChevronRightIcon />}
            onClick={handleNextClick}
            disabled={currentIndex === carouselItems.length - 3}
            ml="4"
          />
        </Flex>
      </Box> */}
    </Stack>
  );
}

export default SuggestedItems;
