import { fetch_movies } from "../api/movies_api"
import { GET_ALL_MOVIES } from "./actionTypes"

export const get_all_movies = () => (dispatch) => {
    fetch_movies().then((res) => {
        dispatch({
            type: GET_ALL_MOVIES,
            payload: res.data.results
        })
    })
}