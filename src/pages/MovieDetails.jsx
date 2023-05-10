import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {

    const [movie, set_movie_data] = useState([]);

    const movies = useSelector((state) => state);
    const {id} = useParams();

    useEffect(() => {
        let m = movies.filter(m => +m.id === +id);
        set_movie_data(m[0]);
    },[movies, id]);

    return (
        <div className='my-4 w-50 m-3 m-auto bg-secondary-subtle'>

            <img className="w-100 rounded-4" src={"https://image.tmdb.org/t/p/original/"+ movie.backdrop_path} alt={movie.name}></img>

            <h4 className='mt-3' >{movie.title}</h4>

            <p> <span>Release Date:</span> {movie.release_date} </p>
            <p> <span>Overview:</span> {movie.overview} </p>
      
        </div>
    );
};

export default MovieDetails;