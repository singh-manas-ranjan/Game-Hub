import gameService, { Game } from "../services/gameService";
import useData from "./useData";
import { HttpService } from "../services/HttpService";
import { Genre } from "../services/genreService";
import { Platform } from "../services/platformService";

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game, HttpService>(
    gameService,
    {
      params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
