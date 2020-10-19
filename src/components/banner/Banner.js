import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import './banner.css';

const Banner = ({  item={} }) => {

    return (
        <div className="banner">
            <div className="container-background-movie">
                <button className="play-trailer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55"><circle cx="27.5" cy="27.5" r="26.75" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></circle><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.97 40.81L40.64 27.5 20.97 14.19v26.62z"></path></svg>
                </button>

                <img alt="" className="background-image-movie" src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} />
            </div>

            <div className="text-container">
                <div className="info">
                    <h1>{item.title ? item.title : item.name}</h1>
                    <div>
                        <div>{item.vote_average} Estrellas</div>
                        <div>{item.vote_count} Reviews</div>

                    </div>
                    <div>
                        <span>Sesion</span>
                        <span>{item.release_date}year</span>
                        <span>certificado</span>
                        <p>{item.overview}</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Banner;