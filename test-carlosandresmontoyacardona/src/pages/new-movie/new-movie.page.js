import React, { Component } from 'react';
import './new-movie.page.scss';
export class AddNewMovie extends Component {

    render() {
        return (
            <div class="generalContainer">
                <div class="card">
                    <form>
                        <div class="card-header">
                            <div class="row">
                                <div class="col-6">
                                    <h5>Add Movie</h5>
                                </div>
                                <div class="col-6 buttonSave">
                                    <button type="button" class="btn btn-primary">Save movie</button>
                                </div>
                            </div>
                        </div>
                        <div class="card-body addMovieCardBody">
                            <div class="row">
                                <div class="col-sm-12 col-md-6 col-lg-4">
                                    <div class="form-group">
                                        <label for="movieTitle">Movie Title</label>
                                        <input type="email" class="form-control" id="movieTitle" required="required" />
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-6 col-lg-4">
                                    <div class="form-group">
                                        <label for="movieName">Release Date</label>
                                        <input type="date" class="form-control" id="movieName" required="required" />
                                    </div>
                                </div>

                                <div class="col-sm-12 col-md-6 col-lg-4">
                                    <div class="form-group">
                                        <label for="movieImage">Movie Image</label>
                                        <input type="file" class="form-control" id="movieImage" required="required" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Example textarea</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
        );
    }
}
