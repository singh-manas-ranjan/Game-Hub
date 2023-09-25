import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Game } from "../services/gameService";
import getCroppedImageUrl from "../services/imageUrl";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface gameProps {
  game: Game;
}
const GameCard = ({
  game: {
    background_image,
    name,
    parent_platforms,
    metacritic,
    rating_top,
    slug,
  },
}: gameProps) => {
  return (
    <Link to={`/games/${slug}`}>
      <Card height="100%" cursor="pointer">
        <Image src={getCroppedImageUrl(background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={parent_platforms.map(({ platform }) => platform)}
            />
            <CriticScore score={metacritic} />
          </HStack>
          <HStack>
            <Heading fontSize="2xl">{name}</Heading>
            <Emoji rating={rating_top} />
          </HStack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
