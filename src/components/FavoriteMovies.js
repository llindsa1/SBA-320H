import React, { useState, useEffect } from 'react';

const FavoriteMovies = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (movieId) => {
    const updatedFavorites = favorites.filter((movie) => movie.imdbID !== movieId);
    setFavorites(updatedFavorites);


    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorite-movies">
      <h2>Favorite Movies</h2>
      {favorites.length === 0 ? (
        <p>No favorite movies added yet.</p>
      ) : (
        <ul>
          {favorites.map((movie) => (
            <li key={movie.imdbID} className="favorite-movie">
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
              <button onClick={() => removeFromFavorites(movie.imdbID)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteMovies;