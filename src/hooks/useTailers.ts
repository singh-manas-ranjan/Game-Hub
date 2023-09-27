import { useQuery } from "@tanstack/react-query"
import create, { FetchResponse } from "../services/HttpService"
import { Trailer } from "../entities/Trailer"

const useTrailers = (gameId: number) =>{
    const trailerService = create<Trailer>(`/games/${gameId}/movies`);
    return useQuery<FetchResponse<Trailer>,Error>({
        queryKey:['trailer', gameId],
        queryFn: () => trailerService.getAll()
    })
}

export default useTrailers;