import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import NewMovie from './components/NewMovie/NewMovie';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>(moviesFromServer);

  const addMovie = (movie: Movie) => {
    setMovies(prev => [...prev, movie]);
  };

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList movies={movies} />
      </div>
      <div className="sidebar">
        <NewMovie
          onAdd={addMovie}
        />
      </div>
    </div>
  );
};