import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  selectedGameQuery: GameQuery;
}

const GameHeading = ({ selectedGameQuery }: Props) => {
  const heading = `${selectedGameQuery.platform?.name || ""} ${
    selectedGameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h2" marginY={4}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
