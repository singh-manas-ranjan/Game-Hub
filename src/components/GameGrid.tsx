import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { Game, GamesResponse } from "../services/gameService";

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<GamesResponse>("/games")
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => setError(error.message));
  }, []);
  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
