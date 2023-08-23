import create from "./HttpService";
import { Platform } from "./platformService";

export interface Game {
    id: number;
    name: String;
    background_image : string;
    parent_platforms: { platform : Platform}[],
    metacritic : number,
    rating_top: number;
  }

export default create('/games');