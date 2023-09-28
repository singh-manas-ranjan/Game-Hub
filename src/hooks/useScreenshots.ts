import { useQuery } from "@tanstack/react-query";
import Screenshot from "../entities/Screenshot";
import create, { FetchResponse } from "../services/HttpService";

const useScreenshots = (gameId: number) =>{
    const screenshotService = create<Screenshot>(`/games/${gameId}/screenshots`);
    return useQuery<FetchResponse<Screenshot>>({
        queryKey:['screenshots', gameId],
        queryFn: () => screenshotService.getAll()
    })
}

export default useScreenshots;