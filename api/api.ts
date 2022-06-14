import axios from 'axios'
import { gql } from '@apollo/client'
import { Exception } from 'sass'
import { WikiApiResult } from '../types/WikiResult'

export const getWikiPageForPageId = (pageId: string) => {
  return pageId && pageId !== '-1' ? `https://en.wikipedia.org/?curid=${pageId}` : ''
}
const WIKI_URL = 'https://en.wikipedia.org/w/api.php'

const wikiSearchMovie = (movieTitle: string, extraQuery = '') => {
  const queryString = encodeURI(movieTitle + extraQuery)
  return `${WIKI_URL}?format=json&action=query&origin=*&prop=extracts&exintro&explaintext&redirects=1&titles=${queryString}`
}

const getMovieObject = (url: string) => {
  return axios.get(url, { withCredentials: false }).then((result) => {
    if (!result.data.query.pages) return null
    const firstResultPages = result.data.query.pages

    return firstResultPages // is is an object of wiki articles
  }).catch((e: Exception) => {
    console.error(e)
  })
}

export const getMovieInfoFromWiki = async (movieTitle: string):Promise<WikiApiResult> => {
  const url1 = wikiSearchMovie(movieTitle, '+film')
  const url2 = wikiSearchMovie(movieTitle, '+movie')
  const url3 = wikiSearchMovie(movieTitle)

  const result1 = await getMovieObject(url1)
  const result2 = await getMovieObject(url2)
  const result3 = await getMovieObject(url3)

  return {
    ...result1, ...result2, ...result3
  }
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
