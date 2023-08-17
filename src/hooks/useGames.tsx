import gameService, { Game } from "../services/gameService";
import useData from "./useData";
import { HttpService } from "../services/HttpService";

const useGames = () => useData<Game, HttpService>(gameService);

export default useGames;
