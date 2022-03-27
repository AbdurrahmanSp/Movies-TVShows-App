import React from 'react';
// components
import ButtonMenu from './ButtonMenu/ButtonMenu';
import Items from './Items/Items';
import SearchBar from './SearchBar/SearchBar';

const Home = () => {

    return (
        <>
           <ButtonMenu />
           <SearchBar />
           <Items />
        </>
    );
}

export default Home;
