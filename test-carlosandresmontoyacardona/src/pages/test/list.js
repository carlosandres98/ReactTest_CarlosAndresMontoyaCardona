import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { movies: state.movies };
};

const ConnectedList = ({ movies }) => (
  <ul>
    {movies.map(el => (
      <li key={el.id}>{el.title} -------- {el.release} -------- {el.description} -------- {el.image}</li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;