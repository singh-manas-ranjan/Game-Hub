import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";

const GenreList = () => {
  const { isLoading, data, error } = useGenre();

  if (error) return null;

  return (
    <List paddingBlock={5}>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingBlock={2}>
          <HStack>
            <Image
              boxSize={9}
              borderRadius={6}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
