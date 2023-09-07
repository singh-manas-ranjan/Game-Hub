import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  selectedGameQuery: GameQuery;
}

const GameHeading = ({ selectedGameQuery }: Props) => {
  const genre = useGenre(selectedGameQuery.genreId);

  const platform = usePlatform(selectedGameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h2" marginY={4}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
