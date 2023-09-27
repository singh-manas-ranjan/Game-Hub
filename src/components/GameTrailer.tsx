import { Box } from "@chakra-ui/react";
import useTrailers from "../hooks/useTailers";
interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);
  if (isLoading) return null;
  if (error) throw error;

  const firstTrailer = data.results[0];
  return firstTrailer ? (
    <Box>
      <video
        src={firstTrailer.data[480]}
        poster={firstTrailer.preview}
        controls
        style={{ borderRadius: 4 }}
      />
    </Box>
  ) : null;
};

export default GameTrailer;
