import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
import getCroppedImageUrl from "../services/imageUrl";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing={5}>
      {data?.results.map((screenshot) => (
        <Box overflow="hidden">
          <Image
            borderRadius={4}
            key={screenshot.id}
            src={getCroppedImageUrl(screenshot.image)}
            transition="transform 200ms ease-in"
            _hover={{ transform: "scale(1.2)" }}
          />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
