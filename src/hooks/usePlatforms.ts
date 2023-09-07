import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../Data/Platforms";
import { FetchResponse } from "../services/HttpService";
import platformService, { Platform } from "../services/platformService";

const usePlatforms = () => 
    useQuery<FetchResponse<Platform>, Error>({
        queryKey: ['platforms'],
        queryFn: () => platformService.getAll(),
        staleTime: ms('24h'),
        initialData: platforms,
        refetchOnWindowFocus: false,
    })


export default usePlatforms;