import React from 'react';
import { Link } from 'react-router-dom';

import './book-movie-title.styles.scss';

const BookMovieTitle = ({ match }) => {
    return(
        <div className='date-list-container'>
            <h1>Select the Date from the below mentioned:</h1>
            <div className='date-list'>
                <Link to={`${match.url}/01-05-2022`}><span>01-05-2022</span></Link>
                <Link to={`${match.url}/03-05-2022`}><span>03-05-2022</span></Link>
                <Link to={`${match.url}/07-05-2022`}><span>07-05-2022</span></Link>
                <Link to={`${match.url}/10-05-2022`}><span>10-05-2022</span></Link>
                <Link to={`${match.url}/16-05-2022`}><span>16-05-2022</span></Link>
                <Link to={`${match.url}/21-05-2022`}><span>21-05-2022</span></Link>
            </div>
        </div>
    );
}

export default BookMovieTitle;