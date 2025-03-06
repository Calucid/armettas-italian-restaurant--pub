import { Box, Button, Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box bg="white" w="100%" minH="100vh">
      {/* Hero Section */}
      <Box
        bg="green.600"
        color="white"
        textAlign="center"
        py={{ base: 10, md: 20 }}
        px={4}
      >
        <Heading fontSize={{ base: "3xl", md: "5xl" }}>
          Welcome to Armetta's Italian Restaurant & Pub
        </Heading>
        <Text fontSize={{ base: "md", md: "xl" }} mt={4}>
          Authentic Italian Cuisine in the Heart of Emmaus, PA
        </Text>
        <Button
          as={Link}
          to="/menu"
          mt={6}
          colorScheme="red"
          size="lg"
        >
          View Menu
        </Button>
      </Box>

      {/* About Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        py={10}
        px={4}
        gap={8}
      >
        <Image
          src="http://stock.calucid.com/fetch/calucid/armettas-italian-restaurant--pub/restaurant-interior"
          alt="Restaurant Interior"
          width={{ base: "100%", md: "50%" }}
          height="300px"
          objectFit="cover"
          borderRadius="md"
        />
        <VStack align="start" spacing={4} maxW="500px">
          <Heading fontSize="2xl" color="green.700">
            Experience Authentic Italian Flavors
          </Heading>
          <Text fontSize="md" color="gray.700">
            At Armetta's Italian Restaurant & Pub, we bring the rich flavors of
            Italy to your table. From classic pasta dishes to delicious pizzas,
            our menu is crafted with love and tradition.
          </Text>
          <Button as={Link} to="/about" colorScheme="red">
            Learn More
          </Button>
        </VStack>
      </Flex>

      {/* Featured Dishes */}
      <Box bg="gray.100" py={10} px={4}>
        <Heading textAlign="center" mb={6} color="green.700">
          Our Signature Dishes
        </Heading>
        <Flex
          wrap="wrap"
          justify="center"
          gap={6}
        >
          <Box textAlign="center">
            <Image
              src="http://stock.calucid.com/fetch/calucid/armettas-italian-restaurant--pub/pizza"
              alt="Delicious Pizza"
              width="300px"
              height="200px"
              objectFit="cover"
              borderRadius="md"
            />
            <Text mt={2} fontSize="lg" fontWeight="bold">
              Classic Margherita Pizza
            </Text>
          </Box>
          <Box textAlign="center">
            <Image
              src="http://stock.calucid.com/fetch/calucid/armettas-italian-restaurant--pub/pasta"
              alt="Italian Pasta"
              width="300px"
              height="200px"
              objectFit="cover"
              borderRadius="md"
            />
            <Text mt={2} fontSize="lg" fontWeight="bold">
              Homemade Pasta
            </Text>
          </Box>
          <Box textAlign="center">
            <Image
              src="http://stock.calucid.com/fetch/calucid/armettas-italian-restaurant--pub/dessert"
              alt="Italian Dessert"
              width="300px"
              height="200px"
              objectFit="cover"
              borderRadius="md"
            />
            <Text mt={2} fontSize="lg" fontWeight="bold">
              Decadent Tiramisu
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* Visit Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        py={10}
        px={4}
        gap={8}
      >
        <VStack align="start" spacing={4} maxW="500px">
          <Heading fontSize="2xl" color="green.700">
            Visit Us
          </Heading>
          <Text fontSize="md" color="gray.700">
            301 Main St, Emmaus, PA 18049, USA
          </Text>
          <Text fontSize="md" color="gray.700">
            Call us: (610) 967-3050
          </Text>
          <Button as={Link} to="/visit" colorScheme="red">
            Get Directions
          </Button>
        </VStack>
        <Image
          src="http://stock.calucid.com/fetch/calucid/armettas-italian-restaurant--pub/restaurant-exterior"
          alt="Restaurant Exterior"
          width={{ base: "100%", md: "50%" }}
          height="300px"
          objectFit="cover"
          borderRadius="md"
        />
      </Flex>
    </Box>
  );
};

export default Home;