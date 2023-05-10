import { v4 as uuid } from "uuid";
import { Link } from 'react-router-dom';
import React from 'react';
import {useSelector} from 'react-redux';

const MoviesPage = () => {

    const movies = useSelector((state) => state);

    if(!movies)
        return <div> Loading data.. </div>
    
    return <div className='w-75 m-auto'>

        <div className='d-flex flex-wrap'>

        {movies.map( (movie) =>

            <div key={uuid()} className='my-4 col-5 border border-2 border-primary rounded-4 m-3 m-auto bg-secondary-subtle' style={{height:"350px"}}>

                <img className="w-100 rounded-4" src={"https://image.tmdb.org/t/p/original/"+ movie.backdrop_path} alt={movie.name}></img>

                <h4 className='mt-3' >{movie.title}</h4>

                <Link to={`/movies/${movie.id}`}>
                    <button className='btn btn-primary mt-2'> View Details</button>
                </Link>

            </div>
        )}
        
    </div>
    </div>
           
};

export default MoviesPage;