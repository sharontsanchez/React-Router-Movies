import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovieList(response.data); // always console log your response. Inspect and choose your data that you want to display on the frontend.
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <Route exact path='/'>
        <MovieList movies={movieList}></MovieList>
      </Route>
      <Route path='/movies/:id'> 
        <Movie/>
      </Route>
    </div>
  );
}
//  '/movies/:id' defining a variable called id which we can use inside of our component
// We set up routes to navigate into each component we need. root route which takes us to the movieList component and the movie route takes us to movie component
// Route path to is the route attribute, route path is listening for a url