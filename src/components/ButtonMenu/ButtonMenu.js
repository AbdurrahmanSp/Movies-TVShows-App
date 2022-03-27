import React from 'react';
// components
import Button from '../UI/Button/Button';
import Wrapper from '../UI/Wrapper/Wrapper';
// styles
import './ButtonMenu.css';

const ButtonMenu = () => {

    return (
        <Wrapper>
            <div className='buttons-container'>
                <Button text='movie' />
                <Button text='tv'/>
            </div>
        </Wrapper>
    );
};

export default ButtonMenu;