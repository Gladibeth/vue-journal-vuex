
/* export const myMutations = ( state ) => {

} */

export const setEntries = ( state,entries ) => {
  state.entries = [...entries, ...state.entries]
  state.isLoading = false
}
export const updateEntries = ( state, entry ) => {

  const itemUpdate = state.entries.findIndex(e => e.id === entry.id)
  state.entries[itemUpdate] = entry;

} 

export const addEntries = ( state, entry ) => {
  state.entries.unshift(entry)
}