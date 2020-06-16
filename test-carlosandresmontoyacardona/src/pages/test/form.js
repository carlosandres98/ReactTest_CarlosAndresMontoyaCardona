// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { addMovie } from "../../redux/actions/index";
import MovieModel from '../../models/movie.model';
function mapDispatchToProps(dispatch) {
  return {
    addMovie: article => dispatch(addMovie(article))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const movie = new MovieModel();
    movie.title = this.state.title;
    movie.release = this.state.release;
    movie.description = this.state.description;
    movie.image = this.state.image;

    alert( JSON.stringify(movie));
    
    this.props.addMovie(movie);
    this.setState(movie);
  }
  render() {
    const { title } = this.state;
    const { release } = this.state;
    const { description } = this.state;
    const { image } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="release">Release</label>
          <input
            type="date"
            id="release"
            value={release}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;