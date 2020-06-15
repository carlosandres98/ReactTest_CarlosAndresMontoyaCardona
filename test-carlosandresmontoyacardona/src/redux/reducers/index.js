
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
  if (action.type === 'DESTROY_SESSION') {
    state = undefined;
  }
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return state;
}

export default rootReducer;