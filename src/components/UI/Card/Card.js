import React from 'react';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../../config';
// styles
import './Card.css';
// images
import NoImage from '../../../images/no-image.jpg';
// link
import { Link } from 'react-router-dom';

const Card = ({ backdrop_path, name, title, clickable, movieId }) => {

    return (
        <div className="card-container">
            {clickable &&
                <Link to={`/${movieId}`}>
                    <img src={backdrop_path
                        ? IMAGE_BASE_URL + BACKDROP_SIZE + backdrop_path
                        : NoImage
                    }
                        alt={title}
                    />
                    <div className="container">
                        <h1>{name || title}</h1>
                    </div>
                </Link>
            }
        </div>
    );
}

export default Card;
