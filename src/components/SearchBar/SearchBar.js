import React from 'react';
// image
import searchIcon from '../../images/search-icon.svg'
// context
import { useContext } from 'react';
import { Context } from '../../context/context';
// styles
import './SearchBar.css';
import Wrapper from '../UI/Wrapper/Wrapper';

const SearchBar = () => {
    const { state, setState } = useContext(Context);

    return (
        <Wrapper>
            <div className='search-bar'>
                <img src={searchIcon} alt="search-icon" />
                <input
                    type="text"
                    placeholder="Search for..."
                    onChange={event => setState(event.currentTarget.value) }
                    value={state}
                />
            </div>
        </Wrapper>
    );
}

export default SearchBar;