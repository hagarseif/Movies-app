import { AllMovies,movieApi } from "../type/movieType"
import axios from "axios"

export const getAllMovies=()=>{

    return async (dispatch)=>{

        try {
            const movies=await axios.get(movieApi)
        
            dispatch({type:AllMovies,data:movies.data.results,pages:movies.data.total_pages})            

          } catch (error) {
            console.error("Error fetching movies:", error);
          }
    }
}


