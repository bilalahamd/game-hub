import { SimpleGrid, Text } from "@chakra-ui/react";

import FetchGames from "./hooks/Gamehook";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import CardGridContainer from "./CardGridContainer";
import { Genre } from "./hooks/useGenre";
interface Props {
  selectedGenre: Genre | null;
}

const Games = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = FetchGames(selectedGenre);
  const skeletoncard = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={10}
      >
        {isLoading &&
          skeletoncard.map((skeleton) => (
            <CardGridContainer key={skeleton}>
              <GameCardSkeleton />
            </CardGridContainer>
          ))}
        {data.map((game) => (
          <CardGridContainer key={game.id}>
            <GameCard game={game} />
          </CardGridContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Games;
