import { useQuery } from "@tanstack/react-query"
import { FetchResponse } from "../services/HttpService"
import genreService, { Genre } from "../services/genreService"
import Genres from "../Data/Genres"

const useGenres = () => useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: () => genreService.getAll(),
    initialData: {count: Genres.length, results: Genres},
    staleTime: 24 * 60 * 60 * 1000,
    refetchOnWindowFocus: false
})

export default useGenres