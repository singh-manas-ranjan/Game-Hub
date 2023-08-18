import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack
      paddingInline={2}
      paddingBlock="10px"
      justifyContent="space-between"
    >
      <HStack>
        <Image src={logo} boxSize="50px" />
        <Text fontWeight="bold" fontSize="2xl">
          Game Hub
        </Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
