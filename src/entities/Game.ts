import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";


export interface Game {
  id: number;
  slug: string;
  name: String;
  background_image: string;
  genres: Genre[],
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
  description_raw: string;
  publishers: Publisher[];
}
