import axios from "axios"

const journaApi = axios.create({
  baseURL: 'https://vue-journal-7afbb-default-rtdb.firebaseio.com'
})

export default journaApi