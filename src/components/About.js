import { Container, Heading, Text, Box } from "@chakra-ui/react"
import { useEffect } from "react"

function About() {

    useEffect (() => {
        document.title = "About Us | Divine Therapy";
    }, []);
    
    return (
        <Container maxW={"7xl"} 
                px={{ base: "4", md: "10em" }}
                mx="2em"
                m="auto"
                >
            <Heading my="1.5em">About Us</Heading>

            <Box my="4.5em"
            textColor={"gray.500"}
            >

            <Text>
                Welcome to our online store, where we specialize in providing high-quality massage devices that offer exceptional therapeutic benefits. We are passionate about bringing the latest innovations in the massage industry to our customers, ensuring that they have access to products that enhance their overall health and well-being.
            </Text>

            <br></br>

            <Text>
                At our online store, we understand that finding the right massage device can be overwhelming. That's why we have curated a collection of top-rated products that have been thoroughly researched and tested by our team of experts. We only offer products that we stand behind and believe in, ensuring that our customers receive the best possible value for their investment.
            </Text>

            <br></br>


            <Text>
                We are committed to providing our customers with exceptional service and support. We believe that shopping for massage devices should be a stress-free experience, which is why we offer a 100% satisfaction guarantee on all of our products. If you are not completely satisfied with your purchase, we will work with you to find a solution that meets your needs.
            </Text>

            <br></br>


            <Text>
                We pride ourselves on providing a safe and secure shopping environment for our customers. Our website is protected with the latest encryption technology to ensure that your personal and financial information remains confidential. We also offer a variety of payment options to make your shopping experience as convenient as possible.
            </Text>

            <br></br>


            <Text>
                Thank you for choosing our online store for your massage device needs. We look forward to helping you enhance your health and well-being through the power of massage.
            </Text>

            </Box>

        </Container>
    )
}

export default About