import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/gameService";

interface gameProps {
  game: Game;
}
const GameCard = ({ game }: gameProps) => {
  return (
    <Card borderRadius="6px" overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
