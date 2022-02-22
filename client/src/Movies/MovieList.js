import React from 'react';
import { Link } from 'react-router-dom'; // link is for navigation, it allows you the ability to go somewhere. 

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <Link to={`/movies/${props.movie.id}`}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </Link>
    </div>
  );
}
// link to sends us to a specific place whereas the path is just waiting for something. link to sends you to a specific space 