import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  selectedGameQuery: GameQuery;
}

const GameHeading = ({ selectedGameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find(
    (genre) => genre.id === selectedGameQuery.genreId
  );

  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (platform) => platform.id === selectedGameQuery.platformId
  );

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h2" marginY={4}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
