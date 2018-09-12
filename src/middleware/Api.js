import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://gateway.marvel.com/`,
    params: {
      apikey: '94609bbac0706e82a6fa9c9490abe617'
    }
  })
}