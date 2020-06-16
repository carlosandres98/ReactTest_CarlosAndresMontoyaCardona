
const initialState = {
    movies: []
};

function rootReducer(state = initialState, action) {
  if (action.type === 'ADD_MOVIE') {
    return Object.assign({}, state, {
      movies: state.movies.concat(action.payload)
    });
  }
  // if (action.type === 'ADD_MOVIE') {
  //   return Object.assign({}, state, {
  //     movies: state.movies.concat(action.payload)
  //   });
  // }
  if(action.type === 'REMOVE_ITEM') {
    state.movies.splice(action.payload, 1)
    return { ...state, movies: [ ...state.movies ] }
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