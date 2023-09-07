import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import getSkeletonArray from "../services/skeletonArray";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  selectedGameQuery: GameQuery;
}

const GameGrid = ({ selectedGameQuery }: Props) => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } =
    useGames(selectedGameQuery);
  const skeletons = getSkeletonArray();

  const fetchedDataLength =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  if (error) return <Text textAlign="center">{error.message}</Text>;

  return (
    <InfiniteScroll
      dataLength={fetchedDataLength}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={
        <Box display="grid" justifyContent="center" marginTop={5}>
          <Spinner size="xl" />
        </Box>
      }
      endMessage={
        <Text textAlign="center" marginY={5} fontWeight="bold">
          Yah!! You have seen it all
        </Text>
      }
      style={{ overflowY: "hidden" }}
    >
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
    </InfiniteScroll>
  );
};

export default GameGrid;
