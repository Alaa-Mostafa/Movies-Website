import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import movie_reducer from "./moviesReducer";

const store = createStore(movie_reducer, applyMiddleware(thunk));
export default store;