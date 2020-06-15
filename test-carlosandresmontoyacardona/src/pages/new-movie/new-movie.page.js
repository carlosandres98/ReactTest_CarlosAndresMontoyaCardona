import React, { Component } from 'react';
import './new-movie.page.scss';

import { connect } from "react-redux";
import { addMovie } from "../../redux/actions/index";

function mapDispatchToProps(dispatch) {
    return {
        addMovie: movie => dispatch(addMovie(movie))
    };
  }

export class AddNewMovie extends Component {

    constructor (props) {
        super(props);
        this.state = {
            title: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        this.props.addMovie({ title });
        this.setState({ title: "" });
    }

    
    render() {
        const { title } = this.state;
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
            <button type="submit">SAVE</button>
        </form>
        );

        // return (
            // <div class="generalContainer">
            //     <div class="card">
            //         <form>
            //             <div class="card-header">
            //                 <div class="row">
            //                     <div class="col-6">
            //                         <h5>Add Movie</h5>
            //                     </div>
            //                     <div class="col-6 buttonSave">
            //                         <button type="button" class="btn btn-primary" onClick={this.saveMovie}>Save movie</button>
            //                     </div>
            //                 </div>
            //             </div>
            //             <div class="card-body addMovieCardBody">
            //                 <div class="row">
            //                     <div class="col-sm-12 col-md-6 col-lg-4">
            //                         <div class="form-group">
            //                             <label for="movieTitle">Movie Title</label>
            //                             <input type="email" class="form-control" id="movieTitle" required="required" />
            //                         </div>
            //                     </div>
            //                     <div class="col-sm-12 col-md-6 col-lg-4">
            //                         <div class="form-group">
            //                             <label for="movieName">Release Date</label>
            //                             <input type="date" class="form-control" id="movieName" required="required" />
            //                         </div>
            //                     </div>

            //                     <div class="col-sm-12 col-md-6 col-lg-4">
            //                         <div class="form-group">
            //                             <label for="movieImage">Movie Image</label>
            //                             <input type="file" class="form-control" id="movieImage" required="required" />
            //                         </div>
            //                     </div>
            //                     <div class="col-12">
            //                         <div class="form-group">
            //                             <label for="exampleFormControlTextarea1">Example textarea</label>
            //                             <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </form>
            //     </div>
            // </div>

        // );
    }
}

const mapStateToProps = state => {
    return { articles: state.articles };
  };
  
  const ConnectedList = ({ articles }) => (
    <ul>
      {articles.map(el => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  );

  const List = connect(mapStateToProps)(ConnectedList);


const Form = connect(
    null,
    mapDispatchToProps
)(AddNewMovie);

export default Form;
