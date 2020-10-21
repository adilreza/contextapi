import React, { useContext } from 'react'
import {MovieContext}  from '../../contextfile/moviecontext'

const About = ()=> {
    const [moviess, setMoviess] = useContext(MovieContext)
        return (
            <div>
                {
                    moviess.map(movie=>(
                    <h4>{movie.name}</h4>
                    ))
                }
                <hr></hr>
                all above from about 
            </div>
        )
}

export default About
