import React from 'react'
import './top-list.scss';

const TopList = ({ movies }) => {
  return (
    <div class="generalContainer">
      <h1>Top 5 Movies</h1>
      {movies.map((movie) => (
        <div class="card mb-3 topCard">
          <div class="row no-gutters">
            <div class="col-md-4 imageContainer">
              <img src={movie.image} class="card-img" alt={movie.image} />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{movie.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{movie.release}</h6>
                <p class="card-text">{movie.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default TopList