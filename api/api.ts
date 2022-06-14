import axios from 'axios'
import { gql } from '@apollo/client'

const WIKI_URL = 'https://en.wikipedia.org/w/api.php'

const wikiSearchMovie = (movieTitle: string) => {
  const queryString = encodeURI(movieTitle)
  return `${WIKI_URL}?action=opensearch&search=${queryString}&origin=*&limit=10&namespace=0&format=json`
}

export const getMovieInfoFromWiki = (movieTitle: string): Promise<string[]> => {
  const url = wikiSearchMovie(movieTitle)
  return axios.get(url, { withCredentials: false }).then((result) => {
    if (!result.data) return []

    const resultLastIndex = result.data.length - 1
    return result.data[resultLastIndex] // is is an array of wiki articles
  })
}

export const createQuery = (term: string) => gql`
query SearchMovies {
  searchMovies(query: "${term}") {
    id
    name
    overview
    releaseDate
    score
    genres {
      name
    }
  }
}
`
