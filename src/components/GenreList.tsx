import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";
import GenreListSkeleton from "./GenreListSkeleton";
import getSkeletonArray from "../services/skeletonArray";
import GenreListImageContainer from "./GenreListImageContainer";
import GenreListItemContainer from "./GenreListItemContainer";

const GenreList = () => {
  const { isLoading, data, error } = useGenre();
  const skeletons = getSkeletonArray();

  if (error) return null;

  return (
    <>
      {isLoading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}

      <List>
        {data.map((genre) => (
          <GenreListItemContainer key={genre.id}>
            <ListItem>
              <HStack>
                <GenreListImageContainer>
                  <Image
                    src={getCroppedImageUrl(genre.image_background)}
                    height="100%"
                  />
                </GenreListImageContainer>
                <Text fontSize="lg">{genre.name}</Text>
              </HStack>
            </ListItem>
          </GenreListItemContainer>
        ))}
      </List>
    </>
  );
};

export default GenreList;
