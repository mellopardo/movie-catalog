import React, { useState, useEffect } from 'react';
import Close from '../icons/Close';
import './videoPlayer.css';

const VideoPlayer = ({ type, id, onClose }) => {
  const [videoTrailer, setVideoTrailer] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const trailerResults = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=cdb0602d337edb45bd801723204229fd&language=en-US`
    );
    const result = await trailerResults.json();
    setVideoTrailer(result.results[0].key);
  };
  return (
    <div className="video-player">
      <div className="video-player-content">
        <div className="video-player-close">
          <button onClick={onClose}>
            <Close />
          </button>
        </div>
        <iframe
          src={`https://www.youtube.com/embed/${videoTrailer}`}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen="allowFullScreen"
          title="video"
        />
      </div>
    </div>
  );
};
export default VideoPlayer;
