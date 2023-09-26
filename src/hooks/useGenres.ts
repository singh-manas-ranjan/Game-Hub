import { useQuery } from "@tanstack/react-query"
import ms from "ms"
import genres from "../Data/Genres"
import { Genre } from "../entities/Genre"
import create, { FetchResponse } from "../services/HttpService"

const useGenres = () => {
   const genreService = create<Genre>('/genres');
    return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: () => genreService.getAll(),
    initialData: genres,
    staleTime: ms('24h'),
    refetchOnWindowFocus: false
})}

export default useGenres