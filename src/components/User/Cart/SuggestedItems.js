import { useEffect } from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import SliderCom from "./Carousel/SliderCom";
import products from "../../../assets/prdocuts.data";

function SuggestedItems() {
  const { cart } = useSelector((state) => state.order);

  // filter out items in cart and keep the rest in remainingItems
  const remainingItems = products.filter((item) => {
    return !cart.find((cartItem) => cartItem._id === item._id);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Stack align="center" w="100%">
      {remainingItems.length > 0 && (
        <Box w="100%">
          <Text align="center" fontWeight="semibold" px="2em">Recommendations based on items in your cart</Text>
          <SliderCom items={remainingItems} />
        </Box>
      )}
    </Stack>
  );
}

export default SuggestedItems;
