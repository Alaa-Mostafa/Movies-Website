import React, { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import MovieDetails from '../pages/MovieDetails';
import MoviesPage from '../pages/MoviesPage';
import NotFound from '../pages/NotFound';
import { get_all_movies } from '../redux/actionCreators';

const MoviesModule = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_all_movies());
    },[dispatch]);

    return (

        <Routes>
            <Route index element={<MoviesPage></MoviesPage>}></Route>
            <Route path=":id" element={<MovieDetails></MovieDetails>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
            
    );
};

export default MoviesModule;