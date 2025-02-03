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
export const getMovieSearch = (word) => {
  return async (dispatch) => {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=304088268ab729e3ad4c92b558a30558&query=${word}&language=ar`)
      dispatch({ type: AllMovies, data: res.data.results, pages: res.data.total_pages })

  }
}


export const getPage = (page) => {
  return async (dispatch) => {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=304088268ab729e3ad4c92b558a30558&language=ar&page=${page}`)

      dispatch({ type: AllMovies, data: res.data.results, pages: res.data.total_pages })

  }
}

