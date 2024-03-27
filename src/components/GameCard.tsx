import { Games } from "./hooks/Gamehook";
import getCroppedUrl from "../services/getCroppedUrl";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
import {
  Badge,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="1xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
