import React, { Component } from 'react';
import MovieItem from '../movie-item/movie-item.component';
  
const ExistingMovieItem = ({ movies }) => {    
    return (
    <div class="generalContainer">
            <MovieItem movie={movies}/>
      </div>
    )
};

class ExistingMovieList extends Component {
    render () {
        return (
            <ExistingMovieItem movies={this.props.movies} />
        );
    }
}
 
export default ExistingMovieList