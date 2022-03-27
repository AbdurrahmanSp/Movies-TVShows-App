import React, { useState, useEffect } from 'react';
// context
import { useContext } from 'react';
import { Context } from '../context/context';
// custom func
import { getSingleData, getSingleMovie } from '../api/api';

export const useMovieFetch = (movieId) => {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { activeButton } = useContext(Context)
  const keyWord = activeButton;

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await getSingleData(movieId, keyWord);
        setMovie(movie);

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }

    fetchMovie();
  }, [movieId]);

  return { movie, loading, error };
}