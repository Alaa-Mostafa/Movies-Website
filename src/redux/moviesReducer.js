import { GET_ALL_MOVIES } from "./actionTypes";

const initial_state = null;

const movie_reducer = (state = initial_state, {type, payload}) => {

    switch (type) {
        case GET_ALL_MOVIES:
            return payload;
            
        default:
            return state;
    }
}

export default movie_reducer;