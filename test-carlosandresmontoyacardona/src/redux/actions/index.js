export function addMovie(payload) {
  return { type: 'ADD_MOVIE', payload };
}

export function removeMovie(payload) {
  return { type: 'REMOVE_ITEM', payload };
}

export function selectMovie(payload) {
  return { type: 'SELECT_ITEM', payload };
}

export function removeItemSelected(payload) {
    return { type: 'REMOVE_ITEM_SELECTED', payload };
  }



// export function addMovie(payload) {
//   return { type: 'ADD_MOVIE', payload };
// }