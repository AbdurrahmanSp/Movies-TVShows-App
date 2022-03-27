import { useContext } from 'react';
// context
import { Context } from '../../../context/context';
// components
import Card from '../../UI/Card/Card';
import Loader from '../../Common/Loader/Loader';
import Grid from '../../UI/Grid/Grid';
import NoResults from '../../Common/NoResults/NoResults';

const TvSeries = () => {
    const { tvSeries, loadingShows, searchTerm, activeButton } = useContext(Context);

    if (loadingShows) return <Loader />

    if (tvSeries.length === 0) return <NoResults searchTerm={searchTerm} field={activeButton} />

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

export default TvSeries;
