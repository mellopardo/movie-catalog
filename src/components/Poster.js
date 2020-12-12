import React from 'react';
import '../components/card/card.css';
import Imagen from '../components/images/image.svg';

const Poster = ({ item }) => {
  return (
    <div className="card">
      <div className="card-img">
        {item.poster_path ? (
          <img src={'https://image.tmdb.org/t/p/w200' + item.poster_path} />
        ) : (
          <div className="img">
            <img className="no-image" src={Imagen} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Poster;
