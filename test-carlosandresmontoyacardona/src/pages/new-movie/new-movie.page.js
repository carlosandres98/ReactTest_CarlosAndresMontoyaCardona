import React, { Component } from "react";
import { connect } from "react-redux";
import { addMovie, removeMovie } from "../../redux/actions/index";
import MovieModel from '../../models/movie.model';
import { Redirect } from "react-router-dom";
import './new-movie.page.scss';

function mapDispatchToProps(dispatch) {
  return {
    addMovie: movie => dispatch(addMovie(movie)),
    //removeMovie: movie => dispatch(removeMovie(movie))
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
        // this.props.removeMovie(movie);
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
            <div className="generalContainer">
                <div className="card">
                    <form onSubmit={this.handleSubmit}>
                        <div className="card-header">
                            <div className="row">
                                <div className="col-6">
                                    <h5>Add Movie</h5>
                                </div>
                                <div className="col-6 buttonSave">
                                        <button type="submit" className="btn btn-primary" to="/home">Save movie</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body addMovieCardBody">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="title">Movie Title</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="title"
                                            value={title}
                                            onChange={this.handleChange} required="required"/>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="release">Release Date</label>
                                        <input 
                                            type="date" 
                                            className="form-control" 
                                            id="release"
                                            value={release}
                                            onChange={this.handleChange} required="required"/>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <div className="form-group" id="movieImage">
                                        <label htmlFor="image">Movie Image</label>
                                        <input 
                                            type="file" 
                                            className="form-control" 
                                            id="image"
                                            value={image}
                                            onChange={this.convertImageToBase64} required="required"
                                            accept="image/png, image/jpg"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="description">Example textarea</label>
                                        <textarea 
                                            className="form-control" 
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