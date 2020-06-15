import React, { Component } from 'react';
import './home.scss';
import ExistingMoviesList from '../../components/existing-movies-list/existing-movies-list.component';
import MovieDetail from '../../components/movie-detail/movie-detail.component';

import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <ul>
    {articles.map(el => (
      <li key={el.id}>{el.title} -------- {el.release} -------- {el.description} -------- {el.image}</li>
    ))}
  </ul>
);

const Home = connect(mapStateToProps)(ConnectedList);

export default Home;


// export class Home extends Component {
//     render() {
//         return (
//             // <div class="generalContainer">
//             //     <div class="row">
//             //         <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
//             //         <ExistingMoviesList />
//             //         </div>
//             //         <div class="col-sm-12 col-md-6 col-lg-8 col-xl-9">
//             //         <MovieDetail />
//             //         </div>
//             //     </div>
//             // </div>
//             1
//         );
//     }
// }