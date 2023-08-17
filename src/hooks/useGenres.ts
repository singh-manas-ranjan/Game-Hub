import { useEffect, useState } from "react"
import genreService, { Genre, GenreResponse } from "../services/genreService";
import { CanceledError } from "axios";
const useGenre = () =>{
    const [genres, setGenre] = useState<Genre[]>([]);
    const [error, setError] = useState('');
   useEffect(() => {
    const {request, cancel} = genreService.getAll<GenreResponse>();
    request.then(({data}) =>{
        setGenre(data.results)
    })
    .catch((error) =>{
        if(error instanceof CanceledError) return
        setError(error.message);
    })

    return ()=> cancel()
   },[])

   return {genres, error, setGenre, setError}
}

export default useGenre