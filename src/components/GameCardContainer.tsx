import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Prop) => {
  return (
    <Box borderRadius={6} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
