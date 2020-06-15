import React, { Component } from 'react';
import './movie.detail.component.scss';

export default class MovieDetail extends Component {

    render () {
        return (
            <div class="detailContainer">
                <div class="row">
                    <div class="col-12">
                        <div class="addButtonContainer">
                        <button type="button" class="btn btn-primary">Add new movie</button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                Movie name
                            </div>
                            <div class="card-body">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                <img src="..." class="card-img" alt="No found" />
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}