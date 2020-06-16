import React, { Component } from 'react';
import './movie.detail.component.scss';
import { Link } from 'react-router-dom';

export default class MovieDetail extends Component {
    render() {
        if (this.props.selectItem === undefined || this.props.selectItem.length === 0) {            
            return (
                
                <div>
                    <h1>You don´t have movies</h1>
                    <Link to="/add-movie">
                        <button type="button" className="btn btn-primary" to="/add-movie">Add new movie</button>
                    </Link>
                </div>
            );
        }
        return (
            <>
                {this.props.selectItem.map((mv) => (
                    <div className="detailContainer">

                        <div className="row">
                            <div className="col-12">
                                <div className="addButtonContainer">
                                    <Link to="/add-movie">
                                        <button type="button" className="btn btn-primary" to="/add-movie">Add new movie</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header movieCardContainer">
                                        {mv.title} - Release Date: {mv.release}
                                    </div>
                                    <div className="card-body">
                                        <div className="row no-gutters">
                                            <div className="col-md-4">
                                                <img src={mv.image} className="card-img" alt="No found" />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <p className="card-text">{mv.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        );
    }
}
