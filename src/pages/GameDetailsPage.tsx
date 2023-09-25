import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !data) throw error;
  return (
    <Box padding={5}>
      <Heading>{data.name}</Heading>
      <Text>{data.description_raw}</Text>
    </Box>
  );
};

export default GameDetailsPage;
