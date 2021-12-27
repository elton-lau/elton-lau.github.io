import { HStack, Icon, path } from "@chakra-ui/react";
import React, { Component } from "react";
import {
  FaSun,
  FaMoon,
  FaMediumM,
  FaLinkedin,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Social() {
  return (
    <HStack spacing={16}>
      <Icon
        as={FaLinkedinIn}
        boxSize="50"
        onClick={() => window.open("https://www.linkedin.com/in/elton-lau/")}
        _hover={{ cursor: "pointer" }}
      />
      <Icon
        as={FaMediumM}
        boxSize="50"
        _hover={{ cursor: "pointer" }}
        onClick={() => window.open("https://medium.com/@twilightlau94")}
      />
      <Icon
        as={FaGithub}
        boxSize="50"
        _hover={{ cursor: "pointer" }}
        onClick={() => window.open("https://github.com/elton-lau")}
      />
    </HStack>
  );
}

export default Social;
