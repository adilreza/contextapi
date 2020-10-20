import React, {useState, useContext} from 'react'
import Movie from './movie'
import {MovieContext} from '../../contextfile/moviecontext'
const MovieList = () => {
    const value = useContext(MovieContext)
    return (
        <div>
            <h1>Hello</h1>
            <h3>{value}</h3>            
        </div>
    )
}


export default MovieList;