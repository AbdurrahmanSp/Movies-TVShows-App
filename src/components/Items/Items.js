import React from 'react';
// styles
import './Items.css';
// context
import { useContext } from 'react';
import { Context } from '../../context/context';
// components
import Movies from './Movies/Movies';
import TvSeries from './TvShows/TvShows';
import Wrapper from '../UI/Wrapper/Wrapper';

const Items = () => {
    const { activeButton } = useContext(Context);

    let content;

    if (activeButton === 'tv') {
        content = <TvSeries />
    } else {
        content = <Movies />
    }

    return (
        <Wrapper>
            <section className='items-container'>
                {content}
            </section>
        </Wrapper>
    );
}

export default Items;