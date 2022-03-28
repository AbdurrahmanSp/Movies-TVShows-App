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
import TvShows from './TvShows/TvShows';

const Items = () => {
    const { activeButton } = useContext(Context);

    let content;

    if (activeButton === 'tv') {
        content = <TvShows />
    } else {
        content = <Movies />
    }

    const section = activeButton.toUpperCase();

    return (
        <Wrapper>
            <section className='items-container'>
                <h3 className='items-header'>TOP RATED {section}{activeButton === 'tv' ? ' SHOWS' : 'S'}</h3>
                {content}
            </section>
        </Wrapper>
    );
}

export default Items;