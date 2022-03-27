import React from 'react';
// context
import { useContext } from 'react';
import { Context } from '../../../context/context';
// style
import './Button.css';

const Button = ({ text }) => {
    const { activeButton, setActiveButton } = useContext(Context);

    const buttonTxt = text.toUpperCase();

    return <button
        className={activeButton === text ? 'button active' : 'button'}
        onClick={() => { setActiveButton(text) }}
    >
        {buttonTxt}
    </button>
}

export default Button;