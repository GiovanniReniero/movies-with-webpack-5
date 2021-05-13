import {printMovies} from "./printMovies"
import {urlMaker} from "./urlMaker"
import axios from 'axios';




export const suggestions = (keyword) => {
  let url = urlMaker(keyword)
  axios.get(url)
  .then((results) => {
    printMovies(results.data)
  })
  .catch ((error) => {
    console.log("ERROR!", error)
  })
}