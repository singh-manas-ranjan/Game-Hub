import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";
import GenreListSkeleton from "./GenreListSkeleton";
import getSkeletonArray from "../services/skeletonArray";

const GenreList = () => {
  const { isLoading, data, error } = useGenre();
  const skeletons = getSkeletonArray();

  if (error) return null;

  return (
    <>
      {isLoading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}

      <List paddingBlock={5}>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingBottom={6}>
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
    </>
  );
};

export default GenreList;
