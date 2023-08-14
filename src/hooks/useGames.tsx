import { useState, useEffect } from "react";
import gameService from "../services/gameService";
import { Game, GamesResponse } from "../services/gameService";
import { CanceledError } from "axios";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const { request, cancel } = gameService.getAll<GamesResponse>();
    request
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => cancel();
  }, []);

  return { games, setGames, error, setError };
};

export default useGames;
