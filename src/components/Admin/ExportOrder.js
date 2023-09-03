import { Box, Button, Flex, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { exportOrderXlsx } from "../../store/actions/adminActions";
import { useDispatch } from "react-redux";
import { useState } from "react";

function ExportOrder() {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const today = new Date().toISOString().slice(0, 10);
  const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().slice(0, 10);

  return (
    <Box w={{base: "100%", md: "100%"}} align="center" justify="center">
      <Stack  mb="1em" align="center" mx="auto" w="100%">
        <Flex w="100%" gap="1em" direction={{base: "column", md: "row"}}>
          <FormControl >
            <FormLabel >Start Date</FormLabel>
            <Input type="date" onChange={(e) => setStartDate(e.target.value)} />
          </FormControl>
          <FormControl >
            <FormLabel >End Date</FormLabel>
            <Input type="date" onChange={(e) => setEndDate(e.target.value)} />
          </FormControl>
        </Flex>
        <Button colorScheme="blue"  w="100%" onClick={() => exportOrderXlsx(dispatch, startDate, endDate)}>
          Export Orders
        </Button>
      </Stack>

      <Button colorScheme="blue"  onClick={() => exportOrderXlsx(dispatch, today, tomorrow)}>
        Export Todays Orders
      </Button>
    </Box>
  );
}

export default ExportOrder;
