export function addMovie(payload) {
  return { type: 'ADD_MOVIE', payload };
}

export function removeMovie(payload) {
  return { type: 'REMOVE_ITEM', payload };
}

// export function addMovie(payload) {
//   return { type: 'ADD_MOVIE', payload };
// }