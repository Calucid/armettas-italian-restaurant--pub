import { Box, Heading, Text, Image, VStack, HStack, Link, Divider } from "@chakra-ui/react";

const Visit = () => {
  return (
    <Box maxW="1200px" mx="auto" p={4}>
      <VStack spacing={6} align="center">
        <Heading as="h1" size="2xl" textAlign="center" color="green.600">
          Visit Armetta's Italian Restaurant & Pub
        </Heading>

        <Image
          src="http://stock.calucid.com/fetch/calucid/armettas-italian-restaurant--pub/restaurant-exterior"
          alt="Armetta's Exterior"
          width="100%"
          maxW="800px"
          height="auto"
          borderRadius="md"
        />

        <Box textAlign="center">
          <Text fontSize="lg">
            Experience the best Italian cuisine in Emmaus, PA. Whether you're here for a family gathering, a casual dinner, or a fun night at our pub, we welcome you with open arms.
          </Text>
        </Box>

        <Divider borderColor="green.500" />

        <VStack spacing={4} align="center">
          <Heading as="h2" size="xl" color="red.600">
            Location & Contact
          </Heading>
          <Text fontSize="lg">301 Main St, Emmaus, PA 18049, USA</Text>
          <Text fontSize="lg">Phone: (610) 967-3050</Text>
          <Box width="100%" maxW="800px" height="400px">
            <iframe
              title="Google Maps Location"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0, borderRadius: "8px" }}
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCZfNxROLqjeHORHMSc28B1mvxbvKHlukU&q=301+Main+St,+Emmaus,+PA+18049`}
              allowFullScreen
            ></iframe>
          </Box>
        </VStack>

        <Divider borderColor="green.500" />

        <VStack spacing={4} align="center">
          <Heading as="h2" size="xl" color="red.600">
            Hours of Operation
          </Heading>
          <Text fontSize="lg">Monday - Thursday: 11:00 AM - 10:00 PM</Text>
          <Text fontSize="lg">Friday - Saturday: 11:00 AM - 11:00 PM</Text>
          <Text fontSize="lg">Sunday: 12:00 PM - 9:00 PM</Text>
        </VStack>

        <Divider borderColor="green.500" />

        <VStack spacing={4} align="center">
          <Heading as="h2" size="xl" color="red.600">
            Experience Our Atmosphere
          </Heading>
          <Image
            src="http://stock.calucid.com/fetch/calucid/armettas-italian-restaurant--pub/restaurant-interior"
            alt="Armetta's Interior"
            width="100%"
            maxW="800px"
            height="auto"
            borderRadius="md"
          />
        </VStack>

        <Divider borderColor="green.500" />

        <HStack spacing={6}>
          <Link href="/" fontSize="lg" color="blue.500">
            Home
          </Link>
          <Link href="/menu" fontSize="lg" color="blue.500">
            Menu
          </Link>
          <Link href="/about" fontSize="lg" color="blue.500">
            About Us
          </Link>
          <Link href="/contact" fontSize="lg" color="blue.500">
            Contact
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Visit;