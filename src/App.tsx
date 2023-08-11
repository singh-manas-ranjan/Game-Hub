import { Grid, GridItem, Show } from "@chakra-ui/react";
const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="lightgrey">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="lightblue">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="lightseagreen">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
