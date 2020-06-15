import React, { Component } from 'react';
import './home.scss';
import ExistingMoviesList from '../../components/existing-movies-list/existing-movies-list.component';
import MovieDetail from '../../components/movie-detail/movie-detail.component';



export class Home extends Component {
    render() {
        return (
            <div class="generalContainer">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                    <ExistingMoviesList />
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-8 col-xl-9">
                    <MovieDetail />
                    </div>
                </div>
            </div>
        );
    }
}