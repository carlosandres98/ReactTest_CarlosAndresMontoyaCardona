import React, { Component } from "react";
import { connect } from "react-redux";
import { addMovie } from "../../redux/actions/index";
import MovieModel from '../../models/movie.model';
import { Redirect } from "react-router-dom";
import './new-movie.page.scss';

function mapDispatchToProps(dispatch) {
  return {
    addMovie: movie => dispatch(addMovie(movie))
  };
}

class AddNewMovie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            base64: "",
            redirect: null
        };

        console.log('PROPS NEW: ' + JSON.stringify(props));

        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.convertImageToBase64 = this.convertImageToBase64.bind(this);
    }

    convertImageToBase64(event) {
        let files = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);

        reader.onload = (e) => {
            this.setState({
                selectedFile: e.target.result,
              })
        }
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const movie = new MovieModel(this.state.title, this.state.release, this.state.description, this.state.selectedFile);
        this.props.addMovie(movie);
        this.setState(movie);
        this.setState({
            redirect: '/home'
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        const { title } = this.state;
        const { release } = this.state;
        const { description } = this.state;
        const { image } = this.state;
        return (
            <div class="generalContainer">
                <div class="card">
                    <form onSubmit={this.handleSubmit}>
                        <div class="card-header">
                            <div class="row">
                                <div class="col-6">
                                    <h5>Add Movie</h5>
                                </div>
                                <div class="col-6 buttonSave">
                                        <button type="submit" class="btn btn-primary" to="/home">Save movie</button>
                                </div>
                            </div>
                        </div>
                        <div class="card-body addMovieCardBody">
                            <div class="row">
                                <div class="col-sm-12 col-md-6 col-lg-4">
                                    <div class="form-group">
                                        <label htmlFor="title">Movie Title</label>
                                        <input 
                                            type="text" 
                                            class="form-control" 
                                            id="title"
                                            value={title}
                                            onChange={this.handleChange} required="required"/>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-6 col-lg-4">
                                    <div class="form-group">
                                        <label htmlFor="release">Release Date</label>
                                        <input 
                                            type="date" 
                                            class="form-control" 
                                            id="release"
                                            value={release}
                                            onChange={this.handleChange} required="required"/>
                                    </div>
                                </div>

                                <div class="col-sm-12 col-md-6 col-lg-4">
                                    <div class="form-group" id="movieImage">
                                        <label htmlFor="image">Movie Image</label>
                                        <input 
                                            type="file" 
                                            class="form-control" 
                                            id="image"
                                            value={image}
                                            onChange={this.convertImageToBase64} required="required"
                                            accept="image/png, image/jpg"/>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label htmlFor="description">Example textarea</label>
                                        <textarea 
                                            class="form-control" 
                                            rows="3"
                                            id="description"
                                            value={description}
                                            onChange={this.handleChange}>
                                        </textarea>
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

const AddMovie = connect(
  null,
  mapDispatchToProps
)(AddNewMovie);

export default AddMovie;