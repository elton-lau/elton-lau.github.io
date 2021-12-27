import "./App.css";
import {
  Text,
  VStack,
  HStack,
  Flex,
  Heading,
  useColorMode,
  Spacer,
} from "@chakra-ui/react";
import Header from "./components/Header";
import { IconButton } from "@chakra-ui/button";
import { FaSun, FaMoon, FaMedium, FaLinkedin, FaGithub } from "react-icons/fa";
import Social from "./components/Social";
import Profile from "./components/Profile";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold">
          E.LAU
        </Heading>
        <Spacer />
        <HStack justifyContent={"space-between"} spacing={4}>
          <IconButton
            icon={<FaLinkedin />}
            isRound="true"
            onClick={toggleColorMode}
          ></IconButton>
          <IconButton
            icon={<FaGithub />}
            isRound="true"
            onClick={toggleColorMode}
          ></IconButton>
          <IconButton
            icon={<FaMedium />}
            isRound="true"
            onClick={toggleColorMode}
          ></IconButton>
          <Spacer ml={4} />
          <IconButton
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound="true"
            onClick={toggleColorMode}
          ></IconButton>
        </HStack>
      </Flex>
      <Header></Header>
      <Social></Social>
    </VStack>
  );
}

export default App;
