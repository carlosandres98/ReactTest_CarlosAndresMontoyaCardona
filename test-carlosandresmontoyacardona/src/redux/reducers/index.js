
const initialState = {
    movies: []
};

function rootReducer(state = initialState, action) {
    console.log("Tipo", action.type);
    if (action.type === 'ADD_MOVIE') {
        return Object.assign({}, state, {
        movies: state.movies.concat(action.payload)
        });
    }
    if (action.type === 'REMOVE_ITEM') {
        alert('HI');
        console.log("Hi")
        const index = action.payload.title;
        alert(index)
        return {
            ...state,
            movies: state.movies.filter((movies) => movies.title !== index)
        }
    }
    return state;
}

export default rootReducer;