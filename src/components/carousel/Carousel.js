import React from 'react';
import {
    Link
  } from "react-router-dom";
import './carousel.css';
import Card from '../card/Card';

const Carousel = ({ title, type, link,items=[] }) => {
    return (
        <div className='carousel'>
            <div className='list-head'>
                <h2>{title}</h2><Link to={{ pathname: link, state: { title }}}> Explore all</Link>
            </div>
            <div className='carousel-items'>
                {items.map(item => (
                    <Card type={type} item={item} />
               ))}
            </div>
        </div>
    );
}

export default Carousel;