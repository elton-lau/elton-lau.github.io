import {
  useColorMode,
  useMediaQuery,
  Stack,
  Circle,
  Flex,
  Box,
  Text,
  Button,
  Image,
  Spacer,
  HStack,
  Icon,
} from "@chakra-ui/react";
import React, { Component } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

function Header() {
  const { colorMode } = useColorMode();
  // TODO: create utils
  const isDark = colorMode === "dark";
  const [isLargeViewport] = useMediaQuery("(min-width:1024px)");
  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w={300}
        h={300}
        alignSelf="flex-end"
      />
      <Flex
        direction={isLargeViewport ? "row" : "column"}
        spacing={200}
        p={isLargeViewport ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isLargeViewport ? "0" : "16"} align="flex-start">
          <HStack color="#C95BB5">
            <Icon as={FaMapMarkerAlt} boxSize="5"></Icon>
            <Text>British Columbia, Canada</Text>
          </HStack>
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient={"linear(to-r, #9E29BD, #C95BB5, #C5AAA2)"}
            bgClip="text"
          >
            Elton Lau
          </Text>
          <Text color={isDark ? "gary.200" : "gary.500"} maxWidth="500">
            PMI-ACP/SAFe certified Scrum Master with developing experience,
            specialized in Scrum, SAFe and Product Ownership Analysis.
          </Text>
          <HStack mt={8}>
            <Button
              onClick={() =>
                window.open("https://www.linkedin.com/in/elton-lau/")
              }
              color="#FFF"
              bgGradient={"linear(to-r, #9E29BD, #C95BB5, #C5AAA2)"}
            >
              LET'S CHAT
            </Button>
          </HStack>
        </Box>
        <Image
          alignSelf="center"
          mt={isLargeViewport ? "0" : "12"}
          mb={isLargeViewport ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="https://avatars.githubusercontent.com/u/8497535?v=4"
        />
      </Flex>
    </Stack>
  );
}

export default Header;
