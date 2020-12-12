import React from 'react';
import './card.css';
import { withRouter } from 'react-router-dom';
import Imagen from '../images/image.svg';
import Star from '../images/star.png';

const Card = ({ history, item, type }) => {
  const date = item.first_air_date ? item.first_air_date : item.release_date;
  const img = item.poster_path ? item.poster_path : item.profile_path;

  return (
    <div
      className="card"
      onClick={() => type && history.push(`/${type}/${item.id}`)}
    >
      <div className="card-img">
        {img ? (
          <img src={'https://image.tmdb.org/t/p/w200' + img} />
        ) : (
          <div className="img">
            <img className="no-image" src={Imagen} />
          </div>
        )}
      </div>
      <div>
        <h5 className="card-details-name">
          {item.title ? item.title : item.name}
        </h5>
        <div className="card-details">
          <div>
            <p> {date ? date.substr(0, 4) : ''} </p>
          </div>
          {item.vote_average && (
            <div className="card-details-rating">
              <span>
                <p>{item.vote_average}</p>
              </span>
              <img className="card-details-star" src={Star}></img>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Card);
