import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortBy: string;
  searchText: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingInline={3} paddingBlock={5}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genreId) => setGameQuery({ ...gameQuery, genreId })}
          />
        </GridItem>
      </Show>

      <GridItem area="main" padding={5}>
        <GameHeading selectedGameQuery={gameQuery} />
        <HStack spacing={4}>
          <PlatformSelector
            selectedPlatformId={gameQuery.platformId}
            onSelectPlatform={(platformId) =>
              setGameQuery({ ...gameQuery, platformId })
            }
          />
          <SortSelector
            onSelectedSortBy={(sortBy) =>
              setGameQuery({ ...gameQuery, sortBy })
            }
            selectedSortBy={gameQuery.sortBy}
          />
        </HStack>
        <GameGrid selectedGameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
