import React, {useState, useContext} from 'react'
import Movie from './movie'
import {MovieContext} from '../../contextfile/moviecontext'
const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div>
           {
               movies.map(movie=>(
                   <div>
                       <h3>{movie.name}</h3>
                        <h5>{movie.price}</h5>
                   </div>
               
               ))
           }           
        </div>
    )
}


export default MovieList;