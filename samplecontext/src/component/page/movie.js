import React  from 'react'

const Movie = ({name, price}) => {
    return (
        <div>
            <h4>{name}</h4>
            <h4>{price}</h4>
        </div>
    )
}


export default Movie;