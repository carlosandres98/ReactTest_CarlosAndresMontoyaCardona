import React, { Component } from 'react';
import './home.scss';
import ExistingMoviesList from '../../components/existing-movies-list/existing-movies-list.component';
import MovieDetail from '../../components/movie-detail/movie-detail.component';

import { connect } from "react-redux";

const mapStateToProps = state => {
  return { movies: state.movies };
};

const ConnectedList = ({ movies }) => (
    <div class="generalContainer">
        <div class="row">
            <div class="col-4">
            <ExistingMoviesList movies={movies}/>
            </div>
            <div class="col-8">
            <MovieDetail />
            </div>
        </div>
    </div>
);

const Home = connect(mapStateToProps)(ConnectedList);

export default Home;



//   <ul>
//     {movies.map(el => (
//       <li key={el.id}>{el.title} -------- {el.release} -------- {el.description} -------- {el.image}</li>
//     ))}
//   </ul>