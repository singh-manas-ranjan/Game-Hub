import { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/HttpService";
import gameService, { Game } from "../services/gameService";

const useGames = (selectedGameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", selectedGameQuery],
    queryFn: () =>
      gameService.getAll({
        params: {
          genres: selectedGameQuery.genre?.id,
          parent_platforms: selectedGameQuery.platform?.id,
          ordering: selectedGameQuery.sortBy,
          search: selectedGameQuery.searchText,
        },
      }),
    refetchOnWindowFocus: false,
    staleTime: 30 * 60 * 1000,
  });

export default useGames;
