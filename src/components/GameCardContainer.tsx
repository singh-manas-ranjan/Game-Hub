import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Prop) => {
  return (
    <Box
      borderRadius={6}
      overflow="hidden"
      transition="transform 200ms ease-in"
      _hover={{ transform: "scale(1.04)" }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
