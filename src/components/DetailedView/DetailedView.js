import React from 'react';
// styles
import './DetailedView.css';
import Wrapper from '../UI/Wrapper/Wrapper';
// hooks
import { useMovieFetch } from '../../hooks/useMovieFetch';
import { useParams, useNavigate } from 'react-router-dom';
// components
import Loader from '../Common/Loader/Loader';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';
import arrow from '../../images/arrow-left.svg';
import NoImage from '../../images/no-image.jpg';

const DetailedView = () => {

    const { movieId } = useParams();
    const navigate = useNavigate();

    const { movie, loading, error } = useMovieFetch(movieId);

    if (loading) return <Loader />;

    if (error) return <div className='error'>Ops, something went wrong...! </div>;

    return (
        <Wrapper>
            <div className='detailed-view'>
                <a className='go-back' onClick={() => navigate('/')}>
                    <img src={arrow} />
                    <span>Back</span>
                </a>
                <div className='detailed-view-container'>
                    <img src={
                        movie.backdrop_path
                            ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`
                            : NoImage
                    }
                    />
                    <div className='detailed-view-text'>
                        <h1 className='header'>{movie.title || movie.name}</h1>
                        {movie.tagline ? <p className='tagline'>“ {movie.tagline} ”</p> : null}
                        <p className='overview'>{movie.overview}</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default DetailedView;
