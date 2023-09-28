import { useQuery } from "@tanstack/react-query";
import Trailer from "../entities/Trailer";
import create, { FetchResponse } from "../services/HttpService";

const useTrailers = (gameId: number) =>{
    const trailerService = create<Trailer>(`/games/${gameId}/movies`);
    return useQuery<FetchResponse<Trailer>,Error>({
        queryKey:['trailer', gameId],
        queryFn: () => trailerService.getAll()
    })
}

export default useTrailers;