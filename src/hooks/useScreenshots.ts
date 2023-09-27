import { useQuery } from "@tanstack/react-query"
import create, { FetchResponse } from "../services/HttpService"
import { Screenshot } from "../entities/Screenshot"

const useScreenshots = (gameId: number) =>{
    const screenshotService = create<Screenshot>(`/games/${gameId}/screenshots`);
    return useQuery<FetchResponse<Screenshot>>({
        queryKey:['screenshots', gameId],
        queryFn: () => screenshotService.getAll()
    })
}

export default useScreenshots;