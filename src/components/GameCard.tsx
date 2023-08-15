import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/gameService";
import PlatformIconList from "./PlatformIconList";

interface gameProps {
  game: Game;
}
const GameCard = ({
  game: { background_image, name, parent_platforms },
}: gameProps) => {
  return (
    <Card borderRadius={6} overflow="hidden">
      <Image src={background_image} />
      <CardBody>
        <Heading fontSize="2xl">{name}</Heading>
        <PlatformIconList
          platforms={parent_platforms.map(({ platform }) => platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
