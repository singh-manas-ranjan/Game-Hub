import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <Box padding={5}>
      <Heading>{game.name}</Heading>
      <SimpleGrid columns={{ lg: 2 }} gap={5} paddingBlock={5}>
        <GameTrailer gameId={game.id} />
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </SimpleGrid>
    </Box>
  );
};

export default GameDetailsPage;
