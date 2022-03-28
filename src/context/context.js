import React, { useState, useEffect, createContext, useRef } from 'react';
import { TOP_RATED_MOVIES_URL, TOP_RATED_TV_SHOWS_URL } from '../config';
// custom func
import { getData } from '../api/api';

export const Context = createContext();

export const State = ({ children }) => {
    const [loadingShows, setIsLoadingShows] = useState(true);
    const [loadingMovies, setIsLoadingMovies] = useState(true);
    const [activeButton, setActiveButton] = useState('tv');
    const [movies, setMovies] = useState([]);
    const [tvSeries, setTvSeries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState('');
    const initial = useRef(true);

    // get tv shows
    const getTopRatedTvShows = async () => {
        setIsLoadingShows(true);

        const topTenRatedTvShows = await getData(TOP_RATED_TV_SHOWS_URL)

        if (searchTerm.trim() === '') {
            setTvSeries(topTenRatedTvShows);

            setIsLoadingShows(false);
        } else {
            const filteredTvShows =
                topTenRatedTvShows.filter((item) =>
                    item.name.substr(0, searchTerm.length).toLowerCase() === searchTerm.toLowerCase());

            setTvSeries(filteredTvShows);

            setIsLoadingShows(false);
        }
    }

    // get movies
    const getTopRatedMovies = async () => {
        setIsLoadingMovies(true)

        const topTenRatedMovies = await getData(TOP_RATED_MOVIES_URL);

        if (searchTerm.trim() === '') {
            setMovies(topTenRatedMovies);

            setIsLoadingMovies(false);
        } else {
            const filteredMovies = topTenRatedMovies.filter((item) =>
                item.title.substr(0, searchTerm.length).toLowerCase() === searchTerm.toLowerCase());

            setMovies(filteredMovies);

            setIsLoadingMovies(false);
        }
    }

    useEffect(() => {
        getTopRatedTvShows();
        getTopRatedMovies();
    }, [searchTerm, activeButton]);

    // search deley
    useEffect(() => {
        const deley = 1000;

        if (initial.current) {
            initial.current = false;
            return
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, deley)

        return () => clearTimeout(timer)
    }, [setSearchTerm, state]);

    return (
        <Context.Provider value={{
            activeButton,
            setActiveButton,
            movies,
            tvSeries,
            state,
            setState,
            searchTerm,
            setSearchTerm,
            initial,
            loadingShows,
            loadingMovies,
        }}
        >
            {children}
        </Context.Provider>
    );
}
