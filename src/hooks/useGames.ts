import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { Game } from "../entities/Game";
import create, { FetchResponse } from "../services/HttpService";
import useGameQueryStore from "../store/GameQueryStore";

const useGames = () =>
  {
    const gameService = create<Game>('/games');
    const gameQuery = useGameQueryStore(s => s.gameQuery);

    return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortBy,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    refetchOnWindowFocus: false,
    refetchOnMount:false,
    staleTime: ms('24h'),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
}

export default useGames;
