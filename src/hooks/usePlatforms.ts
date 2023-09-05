import { useQuery } from "@tanstack/react-query";
import platformService, { Platform } from "../services/platformService";
import { FetchResponse } from "../services/HttpService"
import Platforms from "../Data/Platforms";

const usePlatforms = () => 
    useQuery<FetchResponse<Platform>, Error>({
        queryKey: ['platforms'],
        queryFn: () => platformService.getAll(),
        staleTime: 24 * 60 * 60 * 1000,
        initialData: {count: Platforms.length, results: Platforms},
        refetchOnWindowFocus: false,
    })


export default usePlatforms;