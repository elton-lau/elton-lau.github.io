import {
  Flex,
  Heading,
  Box,
  Text,
  useMediaQuery,
  Stack,
  Icon,
} from "@chakra-ui/react";
import React, { Component } from "react";
import { FaProjectDiagram, FaCode } from "react-icons/fa";

function Profile() {
  const [isLargeViewport] = useMediaQuery("(min-width:1024px)");

  return (
    <Flex
      direction={isLargeViewport ? "row" : "column"}
      maxWidth={{ base: "100vh", md: "100vh", lg: "130vh", xl: "130vh" }}
      px={16}
      py={16}
    >
      <Box alignSelf="center" my={16}>
        <Heading fontWeight="extrabold" color="#C95BB5" xl="7xl">
          5+
        </Heading>
        <Text fontSize="2xl" fontWeight="bold">
          Years of Experience
        </Text>
      </Box>
      <Box alignSelf="center" my={16}>
        <Text fontWeight="bold" fontSize="xl">
          Certified Scrum Master and Product Owner, specialized in digital product delivery.
        </Text>

      </Box>
    </Flex>
  );
}

export default Profile;
