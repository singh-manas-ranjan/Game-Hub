import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GenreListImageContainer = ({ children }: Props) => {
  return (
    <Box boxSize={9} borderRadius={6} overflow="hidden">
      {children}
    </Box>
  );
};

export default GenreListImageContainer;
