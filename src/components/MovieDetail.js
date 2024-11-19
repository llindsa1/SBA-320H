import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieDetails = ({ imdbID, onClose }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (imdbID) {
      setLoading(true); 
      axios
        .get(`http://www.omdbapi.com/?i=${imdbID}&apikey=c${process.env.REACT_APP_OMDB_API_KEY}`)
        .then((response) => {
          setMovieDetails(response.data);
          setLoading(false); 
        })
        .catch((error) => {
          console.error('Error fetching movie details', error);
          setLoading(false); 
        });
    }
  }, [imdbID]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!movieDetails) {
    return <div>No movie details available.</div>; 
  }

  return (
    <div className="movie-details">
      <button className="close-btn" onClick={onClose}>Close</button>
      <h2>{movieDetails.Title} ({movieDetails.Year})</h2>
      <img src={movieDetails.Poster} alt={movieDetails.Title} />
      <div>
        <strong>Director:</strong> {movieDetails.Director}
      </div>
      <div>
        <strong>Cast:</strong> {movieDetails.Actors}
      </div>
      <div>
        <strong>Plot:</strong> {movieDetails.Plot}
      </div>
      <div>
        <strong>Genre:</strong> {movieDetails.Genre}
      </div>
      <div>
        <strong>Release Date:</strong> {movieDetails.Released}
      </div>
      <div>
        <strong>IMDB Rating:</strong> {movieDetails.imdbRating}
      </div>
    </div>
  );
};

export default MovieDetails;
