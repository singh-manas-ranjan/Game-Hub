import { GameQuery } from "../App";
import { useInfiniteQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/HttpService";
import gameService, { Game } from "../services/gameService";

const useGames = (selectedGameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", selectedGameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll({
        params: {
          genres: selectedGameQuery.genreId,
          parent_platforms: selectedGameQuery.platformId,
          ordering: selectedGameQuery.sortBy,
          search: selectedGameQuery.searchText,
          page: pageParam,
        },
      }),
    refetchOnWindowFocus: false,
    staleTime: 30 * 60 * 1000,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
