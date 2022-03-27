import { API_KEY, API_URL } from "../config";

export const getData = async (url) => {
    const topRatedDataResponse = await fetch(url);

    if (!topRatedDataResponse.ok) {
        throw new Error('Sory, something went wrong!')
    }

    const topRatedData = await topRatedDataResponse.json();

    const topTenRatedData = topRatedData.results.slice(0, 10);

    return topTenRatedData;
}

export const getSingleData = async (movieId, keyWord) => {

    const endpoint = `${API_URL}${keyWord}/${movieId}?api_key=${API_KEY}`;

    const singleMovieResponse = await fetch(endpoint);

    const singleMovie = await singleMovieResponse.json();

    return singleMovie;
}


