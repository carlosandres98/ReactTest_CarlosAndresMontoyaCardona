import React, { Component } from 'react';
import MovieItem from '../movie-item/movie-item.component';
  
const ExistingMovieList = ({ movies }) => {    
    return (
    <div class="generalContainer">
            <MovieItem movie={movies}/>
      </div>
    )
};
 
export default ExistingMovieList