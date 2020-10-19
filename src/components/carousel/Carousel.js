import React from 'react';
import './carousel.css';

const Carousel = ({ title, items=[] }) => {
    return (
        <div className='carousel'>
            <div className='list-head'>
                <h2>{title}</h2>
                <p>Explore All</p>
            </div>
            <div className='carousel-items'>
                {items.map(item => (<div className='card'>
                    <div className='card-img'>
                        <img src={'https://image.tmdb.org/t/p/w200' + item.poster_path} />
                    </div>
                    {item.title ? item.title : item.name}
                </div>))}
            </div>
        </div>
    );
}

export default Carousel;