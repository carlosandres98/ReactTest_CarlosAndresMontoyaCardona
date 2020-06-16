import React from 'react'
import './top-list.scss';

const TopList = ({ movies }) => {
  return (
    <div className="generalContainer">
      <h1>Top 5 Movies</h1>
      {movies.map((movie) => (
        <div className="card mb-3 topCard">
          <div className="row no-gutters">
            <div className="col-md-4 imageContainer">
              <img src={movie.image} className="card-img" alt={movie.image} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{movie.release}</h6>
                <p className="card-text">{movie.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default TopList