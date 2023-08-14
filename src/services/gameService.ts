import create from "./HttpService";

export interface Game {
    id: number;
    name: String;
  }

export interface GamesResponse {
    count: number;
    results: Game[];
  }

export default create('/games');