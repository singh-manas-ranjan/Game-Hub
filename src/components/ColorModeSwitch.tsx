import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Text>{colorMode === "dark" ? "Light Mode" : ""}</Text>
      <Switch
        colorScheme="cyan"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>{colorMode === "light" ? "Dark Mode" : ""}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
