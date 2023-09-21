import { create } from "zustand";

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortBy?: string;
    searchText?: string;
  }

interface GameQueryStore{
    gameQuery: GameQuery,
    setGenreId: (genreId : number)=> void,
    setPlatformId: (platformId : number)=> void,
    setSortBy: (sortBy : string)=> void,
    setSearchText: (searchText : string)=> void,
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setGenreId: (genreId) => set(store => ({gameQuery: {...store.gameQuery, genreId}})),
    setPlatformId: (platformId) => set(store => ({gameQuery: {...store.gameQuery, platformId}})),
    setSortBy: (sortBy) => set(store => ({gameQuery: {...store.gameQuery, sortBy}})),
    setSearchText: (searchText) => set(() => ({gameQuery: {searchText}}))
}))

export default useGameQueryStore;