import React from 'react';
// context
import { useContext } from 'react';
import { Context } from '../../../context/context';
// components
import Card from '../../UI/Card/Card';
import Loader from '../../Common/Loader/Loader';
import Grid from '../../UI/Grid/Grid';
import NoResults from '../../Common/NoResults/NoResults';

const Movies = () => {
    const { movies, loadingMovies, searchTerm } = useContext(Context);

    if (loadingMovies) return <Loader />

    if (movies.length === 0) return <NoResults searchTerm={searchTerm} />

    return (
        <Grid>
            {movies.map((item) =>
                <Card
                    key={item.id}
                    {...item}
                    clickable={true}
                    movieId={item.id}
                />
            )}
        </Grid>
    );
}

export default Movies;
