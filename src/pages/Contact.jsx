import { Box, Container, Heading, Text, Link, VStack, HStack, IconButton, Input, Textarea, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Contact = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading textAlign="center" color="green.600">Contact Armetta's Italian Restaurant & Pub</Heading>

        <Box>
          <Text fontSize="lg" fontWeight="bold">Location:</Text>
          <Text>301 Main St, Emmaus, PA 18049, USA</Text>
          <Text>Phone: <Link href="tel:+16109673050" color="red.500">(610) 967-3050</Link></Text>
          <Text>Email: <Link href="mailto:info@armettas.com" color="red.500">info@armettas.com</Link></Text>
        </Box>

        <Box>
          <Text fontSize="lg" fontWeight="bold">Follow Us:</Text>
          <HStack spacing={4}>
            <IconButton as="a" href="https://facebook.com" icon={<FaFacebook />} aria-label="Facebook" colorScheme="blue" />
            <IconButton as="a" href="https://instagram.com" icon={<FaInstagram />} aria-label="Instagram" colorScheme="pink" />
            <IconButton as="a" href="https://twitter.com" icon={<FaTwitter />} aria-label="Twitter" colorScheme="blue" />
          </HStack>
        </Box>

        <Box>
          <Text fontSize="lg" fontWeight="bold">Our Location:</Text>
          <img src="http://stock.calucid.com/fetch/calucid/armettas-italian-restaurant--pub/location" alt="Restaurant Location" width="100%" height="300px" style={{ borderRadius: "8px" }} />
        </Box>

        <Box>
          <Heading size="md" color="green.600">Contact Us</Heading>
          <form>
            <VStack spacing={4} mt={4}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Your Name" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Your Email" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Your Message" />
              </FormControl>
              <Button colorScheme="red" type="submit">Send Message</Button>
            </VStack>
          </form>
        </Box>

        <Box textAlign="center">
          <Text fontSize="lg" fontWeight="bold">Explore More:</Text>
          <HStack justify="center" spacing={4}>
            <Link as={RouterLink} to="/" color="green.600">Home</Link>
            <Link as={RouterLink} to="/about" color="green.600">About</Link>
            <Link as={RouterLink} to="/menu" color="green.600">Menu</Link>
            <Link as={RouterLink} to="/visit" color="green.600">Visit</Link>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Contact;