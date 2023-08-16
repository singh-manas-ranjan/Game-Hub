import { useState, useEffect } from "react";
import gameService from "../services/gameService";
import { Game, GamesResponse } from "../services/gameService";
import { CanceledError } from "axios";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const { request, cancel } = gameService.getAll<GamesResponse>();
    request
      .then((response) => {
        setGames(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { games, setGames, error, setError, isLoading };
};

export default useGames;
