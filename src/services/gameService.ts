import create from "./HttpService";
import { Platform } from "./platformService";

export interface Game {
    id: number;
    slug: string,
    name: String;
    background_image : string;
    parent_platforms: { platform : Platform}[],
    metacritic : number,
    rating_top: number;
    description_raw: string;
  }

export default create<Game>('/games');