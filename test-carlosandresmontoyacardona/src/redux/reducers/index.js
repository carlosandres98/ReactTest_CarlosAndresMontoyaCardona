
const initialState = {
  movies: [],
  selectItem: []
};

function rootReducer(state = initialState, action) {
  console.log("Tipo", action.type);
  if (action.type === 'ADD_MOVIE') {
    return Object.assign({}, state, {
      movies: state.movies.concat(action.payload)
    });
  } 
  if (action.type === 'SELECT_ITEM') {
    state.selectItem = [];  
    return Object.assign({}, state, {
      ...state,
      selectItem: state.selectItem.concat(action.payload)
    });
  }
  if (action.type === 'REMOVE_ITEM') {
    const index = action.payload.title;
    return {
      ...state,
      movies: state.movies.filter((movies) => movies.title !== index)
    }
  }
  if (action.type === 'REMOVE_ITEM_SELECTED') {
    const index = action.payload.title;
    return {
      ...state,
      selectItem: state.selectItem.filter((selectItem) => selectItem.title !== index)
    }
  }
  return state;
}

export default rootReducer;