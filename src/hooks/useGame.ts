import { useQuery } from "@tanstack/react-query"
import gameService from "../services/gameService"


const useGame = (slug: string) => {
    return useQuery({
        queryKey: ['game', slug],
        queryFn: () => gameService.get(slug)
    })
}

export default useGame;