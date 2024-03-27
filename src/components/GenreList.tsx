import React, { useState } from "react";
import useGenre, { Genre } from "./hooks/useGenre";
import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";
interface Props {
  selectedGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenre();
  const genreSkeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return null;

  return (
    <List>
      {isLoading && genreSkeleton.map((g) => <GenreSkeleton />)}
      {data.map((g) => (
        <ListItem key={g.id} marginY={4}>
          <HStack>
            <Image boxSize="32px" src={g.image_background} />
            <Button variant="link" onClick={() => selectedGenre(g)}>
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
