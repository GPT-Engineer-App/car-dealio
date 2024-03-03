import React from "react";
import { Box, Container, Heading, SimpleGrid, Text, Image, Button, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaCar, FaTag, FaCreditCard, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl" fontWeight="bold">
          Luxury Auto Collection
        </Heading>
        <Text fontSize="xl">Discover your dream car with us. Explore our collection of luxury and high-performance vehicles.</Text>
      </VStack>

      <SimpleGrid columns={[1, null, 3]} spacing={10} py={10}>
        {/* Card for Car 1 */}
        <Box boxShadow="md" borderRadius="md" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1601929862217-f1bf94503333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXJ8ZW58MHx8fHwxNzA5NDU5NzQyfDA&ixlib=rb-4.0.3&q=80&w=1080" />
          <Box p={5}>
            <Heading as="h3" size="lg" mb={2}>
              Aston Martin Vantage
            </Heading>
            <Text fontSize="md" color="gray.600">
              Experience the ultimate in luxury and performance.
            </Text>
            <HStack justifyContent="space-between" mt={4}>
              <Button leftIcon={<Icon as={FaTag} />} colorScheme="blue">
                Special Offer
              </Button>
              <Button leftIcon={<Icon as={FaInfoCircle} />} colorScheme="teal" variant="outline">
                More Info
              </Button>
            </HStack>
          </Box>
        </Box>

        {/* Card for Car 2 */}
        <Box boxShadow="md" borderRadius="md" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1541348263662-e068662d82af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXJ8ZW58MHx8fHwxNzA5NDU5NzQyfDA&ixlib=rb-4.0.3&q=80&w=1080" />
          <Box p={5}>
            <Heading as="h3" size="lg" mb={2}>
              Ferrari F8 Tributo
            </Heading>
            <Text fontSize="md" color="gray.600">
              Unleash the power of Italian engineering.
            </Text>
            <HStack justifyContent="space-between" mt={4}>
              <Button leftIcon={<Icon as={FaTag} />} colorScheme="blue">
                Special Offer
              </Button>
              <Button leftIcon={<Icon as={FaInfoCircle} />} colorScheme="teal" variant="outline">
                More Info
              </Button>
            </HStack>
          </Box>
        </Box>

        {/* Card for Car 3 */}
        <Box boxShadow="md" borderRadius="md" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1706117759117-11c1ac198190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY2FyfGVufDB8fHx8MTcwOTQ4NDg1NHww&ixlib=rb-4.0.3&q=80&w=1080" />
          <Box p={5}>
            <Heading as="h3" size="lg" mb={2}>
              Lamborghini Huracan
            </Heading>
            <Text fontSize="md" color="gray.600">
              A symphony of speed and style awaits you.
            </Text>
            <HStack justifyContent="space-between" mt={4}>
              <Button leftIcon={<Icon as={FaTag} />} colorScheme="blue">
                Special Offer
              </Button>
              <Button leftIcon={<Icon as={FaInfoCircle} />} colorScheme="teal" variant="outline">
                More Info
              </Button>
            </HStack>
          </Box>
        </Box>
      </SimpleGrid>

      <VStack spacing={8} py={10} textAlign="center">
        <Heading as="h2" size="xl">
          Financing Made Easy
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Get behind the wheel of your dream car with our flexible financing options.
        </Text>
        <Button rightIcon={<FaCreditCard />} colorScheme="green" size="lg">
          Apply for Financing
        </Button>
      </VStack>

      <VStack spacing={8} py={10} textAlign="center">
        <Heading as="h2" size="xl">
          Want to Sell Your Car?
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Get the best deal for your vehicle. Contact us for a quick and hassle-free sale.
        </Text>
        <Button rightIcon={<FaCar />} colorScheme="orange" size="lg">
          Sell Your Car
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
