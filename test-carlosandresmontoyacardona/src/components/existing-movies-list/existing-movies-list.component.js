import React, { Component } from 'react';
import MovieItem from '../movie-item/movie-item.component';

class ExistingMoviesList extends Component {
  render() {
    return (
      <div className="generalContainer">
        <MovieItem movie={this.props.movies} />
      </div>
    );
  }
}

export default ExistingMoviesList