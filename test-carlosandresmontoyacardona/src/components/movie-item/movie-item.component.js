import React, { Component } from 'react';
import './movie-item.component.scss';
import $ from 'jquery';
import { removeMovie, selectMovie, removeItemSelected } from "../../redux/actions/index";
import { connect } from "react-redux";


function mapDispatchToProps(dispatch) {
    return {
        removeItemSelected: movie => dispatch(removeItemSelected(movie)),
        removeMovie: movie => dispatch(removeMovie(movie)),
        selectMovie: movie => dispatch(selectMovie(movie))
        
    };
}

class MovieItemComponent extends Component {
    constructor (props) {
        super(props);
        this.deleteMovie = this.deleteMovie.bind(this);
        this.selectCard = this.selectCard.bind(this);
    }

    selectCard(mv) {
        $('div').on('click', '.itemCard', function () {
            $(this).addClass('activeCard').siblings().removeClass('activeCard')
            $('.removeIcon').addClass('noShow')
            $(this).find('.removeIcon').removeClass('noShow').siblings().addClass('noShow');
        });
        this.props.selectMovie(mv);
    }

    deleteMovie (mv) {
        this.props.removeItemSelected(mv);
        this.props.removeMovie(mv);
    }    

    render() {
        return (
            <div>
            {this.props.movie.map((mv) => (
                <div className="card card-body itemCard" type="button" variant="outlined" id={mv.title} onClick={this.selectCard.bind(this, mv)}>
                    <div className="row">
                        <div className="col-12">
                            <h5 className="card-title">{mv.title}</h5>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-12">
                            <p className="card-title">Release Date: {mv.release}</p>
                        </div>
                    </div>
                    <div className="removeIcon noShow">
                        <button className="btn" onClick={this.deleteMovie.bind(this, mv)}>
                            <svg
                                className="bi bi-trash-fill coloicon"
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                fill="#FF0000"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                            </svg>
                        </button>
                    </div>
                </div>
            ))}
        </div>
        );
    }
}

const MovieItem = connect(
    null,
    mapDispatchToProps
)(MovieItemComponent);

export default MovieItem;

// export default MovieItem;