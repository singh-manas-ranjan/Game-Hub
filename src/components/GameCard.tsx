import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/gameService";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/imageUrl";
import Emoji from "./Emoji";

interface gameProps {
  game: Game;
}
const GameCard = ({
  game: { background_image, name, parent_platforms, metacritic, rating_top },
}: gameProps) => {
  return (
    <Card height="100%">
      <Image src={getCroppedImageUrl(background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={parent_platforms.map(({ platform }) => platform)}
          />
          <HStack>
            <Emoji rating={rating_top} />
            <CriticScore score={metacritic} />
          </HStack>
        </HStack>
        <Heading fontSize="2xl">{name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
