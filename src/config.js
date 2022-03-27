// API
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_API_KEY;

// Image size
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

// URLs
const IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/';
const TOP_RATED_MOVIES_URL = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
const TOP_RATED_TV_SHOWS_URL = `${API_URL}tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

export {
    TOP_RATED_MOVIES_URL,
    TOP_RATED_TV_SHOWS_URL,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE,
    API_KEY,
    API_URL
}