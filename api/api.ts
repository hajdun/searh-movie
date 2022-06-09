import axios from "axios";

const wikiSearchMovie = (movieTitle: string) => {
  const WIKI_URL = "https://en.wikipedia.org/w/api.php";
  const queryString = encodeURI(movieTitle);
  return `${WIKI_URL}?action=opensearch&search=${queryString}&origin=*&limit=10&namespace=0&format=json`;
};

export const getMovieInfoFromWiki = (movieTitle: string): Promise<string[]> => {
  const url = wikiSearchMovie(movieTitle);
  return axios.get(url, { withCredentials: false }).then((result) => {
    console.log(result.data[result.data.length - 1]);
    if (!result.data) return [];

    const resultLastIndex = result.data.length - 1;
    return result.data[resultLastIndex]; // is is an array of wiki articles
  });
};
