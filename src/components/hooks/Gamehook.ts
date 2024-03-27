import useData from "./useData";
import { Genre } from "./useGenre";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const FetchGame = (selectedGenre: Genre | null) =>
  useData<Games>("/games", { params: { genre: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);
export default FetchGame;
