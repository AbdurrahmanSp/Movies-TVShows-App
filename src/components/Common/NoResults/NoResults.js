import React from 'react';
// styles
import './NoResults.css';

const NoResults = ({ searchTerm, field }) =>
    <p className='no-results'
    >
        No results for "<i>{searchTerm}</i>" in {field} !
    </p>

export default NoResults;