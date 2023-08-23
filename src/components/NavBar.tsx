import { HStack, Image, Show, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack paddingInline={2} paddingBlock="10px" whiteSpace={"nowrap"}>
      <Image src={logo} boxSize="50px" />
      <Show above="lg">
        <Text fontWeight="bold" fontSize="2xl">
          Game Hub
        </Text>
      </Show>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
