import { HttpService } from "../services/HttpService"
import genreService, { Genre } from "../services/genreService"
import useData from "./useData"

const useGenre = () => useData<Genre, HttpService>(genreService)

export default useGenre