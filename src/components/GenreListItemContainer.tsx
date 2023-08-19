import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GenreListItemContainer = ({ children }: Props) => {
  return <Box paddingBottom={6}>{children}</Box>;
};

export default GenreListItemContainer;
