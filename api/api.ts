import axios from 'axios'
import { gql } from '@apollo/client'
import { WikiApiResult } from '../types/WikiResult'

const WIKI_BASE_URL = 'https://en.wikipedia.org'
const WIKI_API_URL = `${WIKI_BASE_URL}/w/api.php`

export const getWikiPageForPageId = (pageId: string) => {
  if (!pageId || pageId === '-1') return ''
  return `${WIKI_BASE_URL}/?curid=${pageId}`
}

const wikiSearchMovie = (queryStringParam: string) => {
  const queryString = encodeURI(queryStringParam)
  return `${WIKI_API_URL}?format=json&action=query&origin=*&prop=extracts&exintro&explaintext&redirects=1&titles=${queryString}`
}

const getWikiMovieObject = (url: string) => {
  return axios.get(url, { withCredentials: false }).then((result) => {
    if (!result.data.query.pages) return null
    const firstResultPages = result.data.query.pages
    return firstResultPages // is is an object of wiki articles
  }).catch((e: Error) => {
    console.error(e)
  })
}

export const getMovieInfoFromWiki = async (movieTitle: string):Promise<WikiApiResult> => {
  const extraQueryStrings = ['+film', '+movie', '']
  let result = {}
  for (let i = 0; i < extraQueryStrings.length; i++) {
    const queryString = movieTitle + extraQueryStrings[i]
    const urlWithQueries = wikiSearchMovie(queryString)
    const fetchResult = await getWikiMovieObject(urlWithQueries)
    result = { ...result, ...fetchResult }
  }
  return result
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
export const getMovie = (id:string) => gql`
query getMovie {
  movie(id: ${parseInt(id)}) {
    id
    name
    overview
    releaseDate
    score
    recommended {
      id
      name
      overview
      releaseDate
      score
    }
    genres {
      name
    }
  }
}`
