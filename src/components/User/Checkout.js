import React, { useEffect, useState } from "react";
import {
  Progress,
  Box,
  Button,
  Heading,
  Flex,
  Input,
  useToast,
  useColorModeValue,
  Stack,
  HStack,
  StackDivider,
  Text,
  Textarea,
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { addOrder } from "../../store/actions/orderActions";
import { useDispatch } from "react-redux";
import ReactFlagsSelect from "react-flags-select";

import CheckoutCartSummary from "./CheckoutCartSummary";
import "./flags.css";

export default function Checkout() {
  const toast = useToast();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = location.state.cart;

  const [select, setSelect] = useState("");
  const flagsClass = useColorModeValue("menu-flags-maroon", "menu-flags-blue");

  const itemsModel = cart.map((item) => {
    return {
      itemId: item._id,
      quantity: item.quantity,
    };
  });

  const totalItemsPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    totalPrice: totalItemsPrice,
    items: itemsModel
  });

  const handlePhoneAndCountry = () => {
    if (select === "JO") {
      setForm({
        ...form,
        country: "Jordan",
        phoneNumber: "962" + form.phoneNumber,
      });
    } else if (select === "SA") {
      setForm({
        ...form,
        country: "Saudi Arabia",
        phoneNumber: "966" + form.phoneNumber,
      });
    };
  };

  const handleSubmit = () => {
    handlePhoneAndCountry();
    console.log(form);
    addOrder(dispatch, form, navigate, select);
  };

  const handleNext = () => {
    if (step === 1) {
      if (form.firstName === "" || form.lastName === "" || form.email === "" || form.phoneNumber === "" || form.address === "" || form.city === "" || form.zip === "" || form.country === "") {
        toast({
          title: "All fields are required.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else {
        setStep(step + 1);
        setProgress(progress + 50);
      }
    } else if (step === 2) {
      if (form.address === "" || form.city === "" || form.zip === "" || form.country === "") {
        toast({
          title: "All fields are required.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else {
        setStep(step + 1);
        setProgress(progress + 33);
      }
    } else if (step === 3) {
      if (form.quantity === "" || form.totalPrice === "" || form.items === "") {
        toast({
          title: "All fields are required.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else {
        setStep(step + 1);
        setProgress(progress + 33);
      }
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(step - 1);
      setProgress(progress - 50);
    } else if (step === 3) {
      setStep(step - 1);
      setProgress(progress - 33);
    } else if (step === 4) {
      setStep(step - 1);
      setProgress(progress - 33);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Checkout | Divine Therapy";
  }, []);

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      divider={<StackDivider borderColor="gray.200" />}
      my={{ base: "0.5em", md: "2em" }} maxW="7xl" mx="auto"
      minH={"76vh"}
    >

      <Box w="100%" h="100%" p="1em" >

        <Flex align="center" justify="space-between">
          <Heading>Checkout</Heading>
          <Button variant="submit" size={{ base: "sm", md: "md" }}>
            <Link to="/cart" style={{ padding: "14px" }}>
              Back to cart
            </Link>
          </Button>
        </Flex >

        <Progress value={progress} size="sm" my="2em" colorScheme={useColorModeValue("pink", "blue")} bg="grey.100" />
        {step === 1 && (
          <Stack spacing={{ base: "5", md: "5" }} columns={{ base: 1, md: 2 }} my={{ base: "5%", md: "0" }}>
            <Text fontSize="lg" fontWeight="bold">
              Personal Information
            </Text>

            <HStack>
                <Input
                  id="first-name"
                  placeholder="First name"
                  name="firstName"
                  variant="primary"
                  value={form.firstName}
                  onChange={handleChange}
                />
    
                <Input
                  id="last-name"
                  placeholder="Last name"
                  name="lastName"
                  variant="primary"
                  value={form.lastName}
                  onChange={handleChange}
                />
            </HStack>

              <Input
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                variant="primary"
                value={form.email}
                onChange={handleChange}
              />

              <InputGroup>
                
                <InputLeftAddon 
                  fontSize="sm"
                  bg="grey.100"
                  children= {select === "SA" ? "+966" : "+962"}
                />       

                <Input
                  type='tel'
                  id="phone-number"
                  placeholder="Phone"
                  name="phoneNumber"
                  variant="primary"
                  value={form.phoneNumber}
                  // value={select === "JO" ? '962' + form.phoneNumber : '966' + form.phoneNumber}
                  onChange={handleChange}
                />
            </InputGroup>
          
              

            <Text fontSize="lg" fontWeight="bold">
              Shipping Details
            </Text>

              <Textarea
                id="address"
                placeholder="Address"
                name="address"
                variant="primary"
                value={form.address}
                onChange={handleChange}
              />

              <Input
                id="city"
                placeholder="City"
                name="city"
                variant="primary"
                value={form.city}
                onChange={handleChange}
              />

              <Input
                id="zip"
                placeholder="Zip"
                name="zip"
                variant="primary"
                value={form.zip}
                onChange={handleChange}
              />

              <Box>
                <ReactFlagsSelect 
                countries={["JO", "SA"]} 
                customLabels={{"JO": "Jordan", "SA": "Saudi Arabia"}} 
                placeholder="Select Country" 
                selectedSize={14}
                selected={select}
                onSelect={code => [setForm({ ...form, country: code }), setSelect(code)]}
                className={flagsClass}
                id="country"
                name="country"
                />
              </Box>
          </Stack>

        )}
        {step === 2 && (
          <Stack spacing={{ base: "5", md: "5" }} columns={{ base: 1, md: 2 }} my={{ base: "5%", md: "0" }}>
              <Text fontSize="lg" fontWeight="bold">
                Card Details
              </Text>

              <Input
                id="card-number"
                placeholder="Card number"
                name="cardNumber"
                variant="primary"
                value={form.cardNumber}
                onChange={handleChange}
              />

              <Input
                id="card-holder"
                placeholder="Card holder"
                name="cardHolder"
                variant="primary"
                value={form.cardHolder}
                onChange={handleChange}
              />

              <HStack>
                <Input
                  id="expiry-date"
                  placeholder="Expiry date"
                  type="date"
                  name="expiryDate"
                  variant="primary"
                  value={form.expiryDate}
                  onChange={handleChange}
                />

                <Input
                  id="cvv"
                  placeholder="CVV"
                  name="cvv"
                  variant="primary"
                  value={form.cvv}
                  onChange={handleChange}
                />
              </HStack>

            </Stack>          
        )}

        {/* {step === 3 && (
          <>
          </>
        )}
        {step === 4 && (
          <>
          </>
        )} */}
        

        <Flex mt="2em" align="center" justify="flex-end">
          {step > 1 && (
            <Button
              variant="back"
              mr="1em"
              onClick={() =>
                handleBack()
              }
            >
              Back
            </Button>
          )}
          {step < 2 && (
            <Button
              variant="submit"
              onClick={() => handleNext()}
            >
              Next
            </Button>
          )}
          {step === 2 && (
            <Button
              variant="submit"
              size={{ base: "sm", md: "md" }}
              onClick={() => handleSubmit()}>
              Complete Payment
            </Button>
          )}
        </Flex>
      </Box>
      <CheckoutCartSummary />
    </Stack>

  );
};

