import create from "./HttpService";

export interface Game {
    id: number;
    name: String;
    background_image : string;
  }

export interface GamesResponse {
    count: number;
    results: Game[];
  }

export default create('/games');