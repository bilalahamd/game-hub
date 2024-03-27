import React, { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Games from "./components/Games";
import GenreList from "./components/GenreList";
import { Genre } from "./components/hooks/useGenre";
import Platform from "./components/Platform";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={2}>
          <GenreList selectedGenre={(g) => setSelectedGenre(g)} />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Platform />
        <Games selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
