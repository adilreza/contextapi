import React, {useState, createContext}  from 'react'

export const MovieContext = createContext();

export const MovieProvider = props =>{
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23440
        },
        {
            name: 'Gladiator',
            price: '$15',
            id: 998440
        },
        {
            name: 'Avenger End Game',
            price: '$30',
            id: 24540
        }
    ]);
    return (
        <MovieContext.Provider value="this is from moviecontext" >
            {props.children}
        </MovieContext.Provider>

    );
}