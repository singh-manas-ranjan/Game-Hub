import { HStack, Image, Show, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const reload = () => document.location.reload();
const NavBar = () => {
  return (
    <HStack
      paddingInline={2}
      paddingBlock="10px"
      whiteSpace={"nowrap"}
      cursor={"pointer"}
    >
      <Image src={logo} boxSize="50px" onClick={reload} />
      <Show above="sm">
        <Text fontWeight="bold" fontSize="2xl" onClick={reload}>
          Game Hub
        </Text>
      </Show>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
