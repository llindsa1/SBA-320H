// src/components/MovieList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = ({ searchQuery }) => {
    const [movies, setMovies] = useState([]);


  useEffect(() => {
    if (searchQuery) {
      axios
        .get(`http://www.omdbapi.com/?s=${searchQuery}&apikey=YOUR_API_KEY`)
        .then((response) => {

            setMovies(response.data.Search || []);
        })
        .catch((error) => {
          console.error('Error fetching movie data', error);
        });
    }
  }, [searchQuery]); 

  return (
    <div className="movie-list">
      {movies.length === 0 && <p>No movies found.</p>}
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-item">
          <img src={movie.Poster} alt={movie.Title} />
          <h3>{movie.Title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
