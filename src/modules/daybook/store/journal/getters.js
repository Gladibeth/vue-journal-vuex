
/* export const myGetters = ( state ) => {
  return state.algo
} */

export const getEntryByTerm = ( state ) => ( term= '') => {
  if( term.length === 0 ) return state.entries;

  return state.entries.filter( ( entry ) => entry.text.toLowerCase().includes( term.toLowerCase() ) )
} 
export const getEntryById = ( state ) => ( id = '' ) =>{
   const entry = state.entries.find( ( entry ) => entry.id === id )
   return {...entry}
} 