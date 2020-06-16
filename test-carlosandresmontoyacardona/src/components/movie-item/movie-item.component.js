import React, { Component } from 'react';
import './movie-item.component.scss';
import $ from 'jquery';
import { removeMovie } from "../../redux/actions/index";
import { connect } from "react-redux";


function mapDispatchToProps(dispatch) {
    return {
        removeMovie: movie => dispatch(removeMovie(movie))
    };
}

const MoviesItem = ({ movie }) => {
    return (
        <div>
            {movie.map((mv) => (
                <div class="card card-body itemCard" type="button" variant="outlined" id={mv.title} onClick={selectCard.bind(this)}>
                    <div class="row">
                        <div class="col-12">
                            <h5 class="card-title">{mv.title}</h5>
                        </div>
                    </div>
                    <div class="row no-gutters">
                        <div class="col-12">
                            <p class="card-title">Release Date: {mv.release}</p>
                        </div>
                    </div>
                    <div class="removeIcon noShow">
                        <button class="btn" onClick={() => {
                            alert(JSON.stringify(mv));
                            removeMovie(mv);
                        }}>
                            <svg
                                class="bi bi-trash-fill coloicon"
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
    )
};

function selectCard() {
    $('div').on('click', '.itemCard', function () {
        $(this).addClass('activeCard').siblings().removeClass('activeCard')
        $('.removeIcon').addClass('noShow')
        $(this).find('.removeIcon').removeClass('noShow').siblings().addClass('noShow');
    });
}

const MovieItem = connect(
    null,
    mapDispatchToProps
)(MoviesItem);

export default MovieItem;

// export default MovieItem;