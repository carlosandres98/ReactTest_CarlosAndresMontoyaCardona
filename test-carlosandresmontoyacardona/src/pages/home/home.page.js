import React, { Component } from 'react';
import './home.scss';
import ExistingMoviesList from '../../components/existing-movies-list/existing-movies-list.component';
import MovieDetail from '../../components/movie-detail/movie-detail.component';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { 
        movies: state.movies, 
        selectItem: state.selectItem
    };
};

class HomeComponent extends Component {
    render() {
        return (
            <div className="generalContainer">
                <div className="row">
                    <div className="col-4">
                        <ExistingMoviesList movies={this.props.movies} />
                    </div>
                    <div className="col-8">
                        <MovieDetail selectItem={this.props.selectItem} />
                    </div>
                </div>
            </div>
        );
    }
}

const Home = connect(mapStateToProps)(HomeComponent);

export default Home;