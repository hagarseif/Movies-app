import { AllMovies } from "../type/movieType";

const initialValue={movie:[],pageCount:0}
export const movieReducer = (state=initialValue,action) => {
    switch (action.type) {
        case AllMovies:
                return {movie:action.data,pageCount:action.pages}  
        default:
            return state;
    }
}