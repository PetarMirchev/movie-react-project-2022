import React from 'react';
import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import { useState } from 'react';
import MovieCard from './MovieCard';




//Get you API KEY from ---->  http://omdbapi.com/apikey.aspx
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=cd9a8fb4';

//test Object
// const movieObjectTest = {
//     "Title": "Iron Man 2",
//     "Year": "2010",
//     "imdbID": "tt1228705",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg"
// };



const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);


    //tuka ima problem pri rendvaneto trqbva se zadade parametar
    useEffect(() => {
        searchMovies('iron');
    }, [])


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    };






    return (
        <>
            <div className="app">
                <h1>Movie Search in BG</h1>

                <div className="search">
                    <input placeholder="Search for Movie...." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

                    <img src={SearchIcon} alt="Search Icon" onClick={() => searchMovies(searchTerm)} />
                </div>

                {
                    movies?.length > 0 ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies found!</h2>
                        </div>
                    )
                }



            </div>
        </>
    );
};

export default App;