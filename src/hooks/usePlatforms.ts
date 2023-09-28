import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../Data/Platforms";
import Platform from "../entities/Platform";
import create, { FetchResponse } from "../services/HttpService";

const usePlatforms = () => 
{    
    const platformService = create<Platform>('/platforms/lists/parents');
    return useQuery<FetchResponse<Platform>, Error>({
        queryKey: ['platforms'],
        queryFn: () => platformService.getAll(),
        staleTime: ms('24h'),
        initialData: platforms,
        refetchOnWindowFocus: false,
    })}


export default usePlatforms;