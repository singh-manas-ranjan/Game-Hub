import { Grid, Show, GridItem, HStack } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const Homepage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: ` "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingInline={3} paddingBlock={5}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main" padding={5}>
        <GameHeading />
        <HStack spacing={4}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default Homepage;
