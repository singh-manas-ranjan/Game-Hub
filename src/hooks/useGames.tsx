import gameService, { Game } from "../services/gameService";
import useData from "./useData";
import { HttpService } from "../services/HttpService";
import { GameQuery } from "../App";

const useGames = (selectedGameQuery: GameQuery) =>
  useData<Game, HttpService>(
    gameService,
    {
      params: {
        genres: selectedGameQuery.genre?.id,
        platforms: selectedGameQuery.platform?.id,
      },
    },
    [selectedGameQuery]
  );

export default useGames;
