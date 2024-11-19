
import React, { useState } from 'react';
import MovieList from './components/MovieList';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle the change in search input
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="App">
      <h1>Movie Finder</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for movies"
      />
      
      <MovieList searchQuery={searchQuery} />
    </div>
  );
};

export default App;