import gameService, { Game } from "../services/gameService";
import useData from "./useData";
import { HttpService } from "../services/HttpService";
import { Genre } from "../services/genreService";

const useGames = (selectedGenre: Genre | null) =>
  useData<Game, HttpService>(
    gameService,
    {
      params: { genres: selectedGenre?.id },
    },
    [selectedGenre?.id]
  );

export default useGames;
