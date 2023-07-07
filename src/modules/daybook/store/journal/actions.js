import journaApi from '@/api/journalApi'

/* export const myActions = async ( { commit } ) => {

} */

export const loadingEntries = async ( { commit } ) => {
  const { data } = await journaApi.get('/entries.json')
  const entries = []
  for(let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    })
  }

  //console.log(entries)
  commit('setEntries', entries)
} 

export const updateEntry = async ( { commit }, entry ) => {
  const { date, picture,text } = entry
  const dataSave = { date, picture,text}

  await journaApi.put(`/entries/${entry.id}.json`, dataSave)

  commit('updateEntries', {...entry})
} 

export const createEntry = async ( /*{ commit }*/ ) => {

} 