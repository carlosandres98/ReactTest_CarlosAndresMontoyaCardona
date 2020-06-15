import React, { Component } from 'react';
import MovieItem from '../movie-item/movie-item.component';


const ExistingMovieList = ({ movies }) => {    
    return (
    <div class="generalContainer">
        {movies.map((movie) => (
            <div class="card mb-3 card-body" id="selectCard">
            <div class="row no-gutters">
              <div class="col-md-4">
                <h5 class="card-title">{movie.title}</h5>
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col-md-4">
                <h5 class="card-title">{movie.release}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  };

  
export default ExistingMovieList