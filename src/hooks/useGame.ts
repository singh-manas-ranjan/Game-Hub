import { useQuery } from "@tanstack/react-query";
import { Game } from "../entities/Game";
import create from "../services/HttpService";

const useGame = (slug: string) => {
    const gameService = create<Game>('/games');

    return useQuery({
        queryKey: ['game', slug],
        queryFn: () => gameService.get(slug)
    })
}

export default useGame;