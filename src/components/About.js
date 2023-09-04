import { Container, Heading, Text, Box } from "@chakra-ui/react";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "About Us | JackBlack Clothing";
  }, []);

  return (
    <Container maxW={"7xl"} px={{ base: "4", md: "10em" }} mx="2em" m="auto">
      <Heading my="1.5em" align="center">
        About Us
      </Heading>

      <Box my="4.5em" textColor={"gray.500"}>
        <Text
          mt="-2em"
          mb="2em"
          align="center"
          fontWeight={"bold"}
          fontSize={"xl"}
        >
          Welcome to BlackJack Clothing, where urban fashion meets inclusivity.
        </Text>

        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Our Story
        </Text>
        <Text>
          Born out of a passion for unique and trendy clothing, BlackJack
          Clothing began its journey on Instagram. With a significant following
          and an ever-growing community of fashion enthusiasts, we realized the
          need for a dedicated platform. A platform that not only showcases our
          collection but also resonates with our brand's essence.
        </Text>

        <br></br>

        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Our Essence
        </Text>
        <Text>
          At BlackJack Clothing, we believe in celebrating individuality. Our
          collections are inspired by the vibrant streets of the city, capturing
          the spirit of urban life. Every piece is a reflection of contemporary
          style, designed for those who aren't afraid to make a statement.
        </Text>

        <br></br>

        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Inclusivity at its Core
        </Text>
        <Text>
          Fashion is for everyone. And we stand by this. Our range caters to
          diverse sizes, ensuring that everyone finds their perfect fit. We're
          more than just a clothing brand; we're a community that embraces and
          celebrates every individual's unique style.
        </Text>

        <br></br>

        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Why Choose BlackJack Clothing?
        </Text>
        <Text>
          Trendy Collections: Our team is always on the lookout for the latest
          trends, ensuring you're always in vogue. Quality First: Every item is
          crafted with precision, ensuring durability and comfort. Exclusive
          Experience: With our new web platform, we aim to provide an exclusive
          and seamless shopping experience, bringing our brand closer to you.
        </Text>

        <br></br>

        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Join Our Journey
        </Text>
        <Text>
          We're more than just a brand; we're a movement. A movement that
          celebrates style, individuality, and inclusivity. Join us in our
          journey as we redefine urban fashion.
        </Text>

        <br></br>

        <Text>For any inquiries or feedback, feel free to contact us.</Text>
      </Box>
    </Container>
  );
}

export default About;
