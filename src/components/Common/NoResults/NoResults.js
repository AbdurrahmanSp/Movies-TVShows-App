import React from 'react';
// styles
import './NoResults.css';

const NoResults = ({ searchTerm }) =>
    <p className='no-results'>
        No results for "<i>{searchTerm}</i>" !
    </p>

export default NoResults;