import { HStack, Image, Switch } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
const NavBar = () => {
  return (
    <HStack paddingInline="20px" justifyContent="space-between">
      <Image src={logo} boxSize="60px" />
      <Switch />
    </HStack>
  );
};

export default NavBar;
