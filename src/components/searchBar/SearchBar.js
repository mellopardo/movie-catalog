import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './search.css';
import Close from '../icons/Close';

const SearchBar = ({ onClose, history }) => {
  const [query, setQuery] = useState();

  const getData = async () => {
    const searchResults = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=cdb0602d337edb45bd801723204229fd&language=en-US&page=1&include_adult=false&query=${query}`
    );
    const dataSearch = await searchResults.json();
    history.push('/search', { results: dataSearch.results || [], query }); // ir a search //history.push
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      getData();
    }
  };

  return (
    <div className="searchbar-container">
      <input
        className="input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Search for a movie, tv show or person..."
      ></input>
      <button onClick={onClose}>
        <Close></Close>
      </button>
    </div>
  );
};

export default withRouter(SearchBar);
