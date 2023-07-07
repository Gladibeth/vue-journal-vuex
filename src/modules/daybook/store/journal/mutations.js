
/* export const myMutations = ( state ) => {

} */

export const setEntries = ( state,entries ) => {
  state.entries = [...entries, ...state.entries]
  state.isLoading = false
}
export const updateEntries = ( /*state*/ ) => {

}

export const addEntries = ( /*state*/ ) => {

}