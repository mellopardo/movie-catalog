import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './banner.css';
import PlayCircle from '../icons/PlayCircle';
import Play from '../icons/Play';
import Star from '../images/star.png';
import VideoPlayer from '../videoPlayer/VideoPlayer';

const Banner = ({ item = {}, link = true }) => {
  const [showVideoPlayer, setShowVideoTrailer] = useState(false);

  return (
    <div className="banner">
      {showVideoPlayer && (
        <VideoPlayer
          type={item.media_type}
          id={item.id}
          onClose={() => setShowVideoTrailer(false)}
        />
      )}
      <div className="container-background-movie">
        <button
          className="play-circle-trailer"
          onClick={() => setShowVideoTrailer(true)}
        >
          <PlayCircle></PlayCircle>
        </button>
        <img
          alt=""
          className="background-image-movie"
          src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path}
        />
      </div>

      <div className="text-container">
        <div className="info">
          <h1>
            {link && (
              <Link to={`/${item.media_type}/${item.id}`}>
                {item.title ? item.title : item.name}
              </Link>
            )}
            {!link && (item.title ? item.title : item.name)}
          </h1>
          <div>
            <p>{item.vote_average}</p>
            <img className="card-details-star" src={Star}></img>
            <p>{item.vote_count} Reviews</p>
            <p>{item.release_date ? item.release_date.substr(0, 4) : ''}</p>
          </div>
          <div>
            <p>{item.overview ? item.overview.substr(0, 195) + '...' : ''}</p>
            <button
              className="banner-play-trailer"
              onClick={() => setShowVideoTrailer(true)}
            >
              <Play />
              <p> Watch Trailer</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
