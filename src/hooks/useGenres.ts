import { useQuery } from "@tanstack/react-query"
import ms from "ms"
import genres from "../Data/Genres"
import { FetchResponse } from "../services/HttpService"
import genreService, { Genre } from "../services/genreService"

const useGenres = () => useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: () => genreService.getAll(),
    initialData: genres,
    staleTime: ms('24h'),
    refetchOnWindowFocus: false
})

export default useGenres