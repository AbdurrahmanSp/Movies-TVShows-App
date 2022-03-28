import { useContext } from 'react';
// context
import { Context } from '../../../context/context';
// components
import Card from '../../UI/Card/Card';
import Loader from '../../Common/Loader/Loader';
import Grid from '../../UI/Grid/Grid';
import NoResults from '../../Common/NoResults/NoResults';

const TvShows = () => {
    const { tvSeries, loadingShows, searchTerm } = useContext(Context);

    if (loadingShows) return <Loader />

    if (tvSeries.length === 0) return <NoResults searchTerm={searchTerm} />

    return (
        <Grid>
            {tvSeries.map((item) =>
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

export default TvShows;
