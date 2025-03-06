import { Box, Heading, Text, Image, VStack, Link, Button, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const About = () => {
  return (
    <Box bg="white" color="black" p={4} maxW="1200px" mx="auto">
      <VStack spacing={6} textAlign="center">
        <Heading as="h1" size="2xl" color="green.600">
          About Armetta's Italian Restaurant & Pub
        </Heading>
        <Image
          src="http://stock.calucid.com/fetch/calucid/armettas-italian-restaurant--pub/italian-restaurant"
          alt="Armetta's Italian Restaurant & Pub"
          width="100%"
          maxW="800px"
          height="auto"
          borderRadius="md"
        />
        <Text fontSize="lg" maxW="800px">
          Welcome to Armetta's Italian Restaurant & Pub, where tradition meets taste in the heart of 
          Emmaus, PA. Located at <strong>301 Main St, Emmaus, PA 18049</strong>, we take pride in serving 
          authentic Italian cuisine made with fresh ingredients and a passion for great food.
        </Text>
        <Text fontSize="lg" maxW="800px">
          Whether you're craving classic pasta dishes, hand-tossed pizzas, or a refreshing drink at our 
          pub, we offer a warm and inviting atmosphere perfect for family dinners, date nights, and 
          gatherings with friends.
        </Text>
        <Image
          src="http://stock.calucid.com/fetch/calucid/armettas-italian-restaurant--pub/authentic-italian-food"
          alt="Authentic Italian Food"
          width="100%"
          maxW="800px"
          height="auto"
          borderRadius="md"
        />
        <Text fontSize="lg" maxW="800px">
          Our chefs bring generations of Italian culinary expertise to every dish, ensuring a dining 
          experience that is both delicious and memorable. From homemade sauces to fresh-baked bread, 
          every bite is a taste of Italy.
        </Text>
        <Flex gap={4} wrap="wrap" justify="center">
          <Button as={RouterLink} to="/menu" colorScheme="red" size="lg">
            View Menu
          </Button>
          <Button as={RouterLink} to="/visit" colorScheme="green" size="lg">
            Visit Us
          </Button>
          <Button as={RouterLink} to="/contact" colorScheme="blue" size="lg">
            Contact Us
          </Button>
        </Flex>
        <Image
          src="http://stock.calucid.com/fetch/calucid/armettas-italian-restaurant--pub/restaurant-interior"
          alt="Restaurant Interior"
          width="100%"
          maxW="800px"
          height="auto"
          borderRadius="md"
        />
        <Text fontSize="lg" maxW="800px">
          Experience the best of Italian dining in a cozy and welcoming setting. We look forward to 
          serving you soon!
        </Text>
      </VStack>
    </Box>
  );
};

export default About;