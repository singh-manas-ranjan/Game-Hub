import { Box, HStack, Image, Show, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import useGameQueryStore from "../store/GameQueryStore";

const NavBar = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <HStack paddingInline={2} paddingBlock="10px" whiteSpace={"nowrap"}>
      <Link
        to="/"
        style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        onClick={() => setSearchText("")}
      >
        <Box boxSize="50px">
          <Image src={logo} />
        </Box>
        <Show above="sm">
          <Text fontWeight="bold" fontSize="2xl">
            Game Hub
          </Text>
        </Show>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
