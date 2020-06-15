
const initialState = {
    movies: [],
    articles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === 'ADD_MOVIE') {
    return Object.assign({}, state, {
      movies: state.movies.concat(action.payload)
    });
  }
  if (action.type === 'ADD_ARTICLE') {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;