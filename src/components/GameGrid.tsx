import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import getSkeletonArray from "../services/skeletonArray";
import { GameQuery } from "../App";
import React from "react";

interface Props {
  selectedGameQuery: GameQuery;
}

const GameGrid = ({ selectedGameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGames(selectedGameQuery);
  const skeletons = getSkeletonArray();

  if (error) return <Text textAlign="center">{error.message}</Text>;

  return (
    <>
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={6}
        marginTop={5}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Box display="grid" marginTop={5}>
          <Button onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </Button>
        </Box>
      )}
    </>
  );
};

export default GameGrid;
