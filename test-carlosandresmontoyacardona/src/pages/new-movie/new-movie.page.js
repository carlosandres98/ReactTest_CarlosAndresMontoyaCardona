import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../../redux/actions/index";
import MovieModel from '../../models/movie.model';

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: "",
        base64: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

//   convertImage (event) {
//     event.preventDefault();
//     let file = event.target.files[0];
//     let reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//       this.setState({
//         //file: file,
//         base64: reader.result
//       });
//       this.handleChange();
//     };
//   }

  handleSubmit(event) {
    event.preventDefault();

    const movie = new MovieModel();
    movie.title = this.state.title;
    movie.release = this.state.release;
    movie.description = this.state.description;
    movie.image = this.state.image;

    alert( JSON.stringify(movie));
    
    this.props.addArticle(movie);
    this.setState(movie);
  }
  render() {
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
                                <button class="btn btn-primary" type="submit">Save movie</button>
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
                                <div class="form-group">
                                    <label htmlFor="image">Movie Image</label>
                                    <input 
                                        type="file" 
                                        class="form-control" 
                                        id="image"
                                        value={image}
                                        onChange={this.handleChange} required="required"
                                        accept="image/png, image/jpeg"/>
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
)(ConnectedForm);

export default AddMovie;