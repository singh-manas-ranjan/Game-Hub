import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";
import getSkeletonArray from "../services/skeletonArray";
import useGameQueryStore from "../store/GameQueryStore";
import GenreListImageContainer from "./GenreListImageContainer";
import GenreListItemContainer from "./GenreListItemContainer";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const setSelectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  const { isLoading, data, error } = useGenres();
  const skeletons = getSkeletonArray();

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={5}>
        Genre
      </Heading>
      {isLoading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
      <List>
        {data?.results.map((genre) => (
          <GenreListItemContainer key={genre.id}>
            <ListItem>
              <HStack>
                <GenreListImageContainer>
                  <Image
                    src={getCroppedImageUrl(genre.image_background)}
                    height="100%"
                    objectFit="cover"
                  />
                </GenreListImageContainer>
                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  variant="link"
                  fontSize="lg"
                  fontWeight={
                    genre.id === setSelectedGenreId ? "bold" : "normal"
                  }
                  color={genre.id === setSelectedGenreId ? "white" : "gray.500"}
                  onClick={() => setGenreId(genre.id)}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          </GenreListItemContainer>
        ))}
      </List>
    </>
  );
};

export default GenreList;
