import create from "./HttpService";

export interface Platform{
  id : number,
  name: string,
  slug: string
}

export interface Game {
    id: number;
    name: String;
    background_image : string;
    parent_platforms: { platform : Platform}[],
    metacritic : number
  }

export default create('/games');