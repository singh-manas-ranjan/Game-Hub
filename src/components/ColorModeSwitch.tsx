import { HStack, Show, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack justifyContent="space-between" whiteSpace="nowrap">
      <Show above="md">
        <Text>Dark Mode</Text>
      </Show>
      <Switch
        colorScheme="cyan"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </HStack>
  );
};

export default ColorModeSwitch;
