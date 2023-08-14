import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack
      paddingInline="20px"
      paddingBlock="10px"
      justifyContent="space-between"
    >
      <Image src={logo} boxSize="50px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
