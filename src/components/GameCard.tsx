import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/gameService";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface gameProps {
  game: Game;
}
const GameCard = ({
  game: { background_image, name, parent_platforms, metacritic },
}: gameProps) => {
  return (
    <Card borderRadius={6} overflow="hidden">
      <Image src={background_image} />
      <CardBody>
        <Heading fontSize="2xl">{name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
