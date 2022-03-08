import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
    return (
        <div className="movie" key={imdbID}>
            <div>
                <p>{Year}</p>
            </div>

            <div>
                {/* //uslovie pri lipsa na 'Poster' shte se zaredi snimkata ot linka */}
                <img src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'} alt="Movie Poster" />
            </div>

            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;
