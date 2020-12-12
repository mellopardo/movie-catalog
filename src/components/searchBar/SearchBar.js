import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './search.css';

const SearchBar = ({ onClose, history }) => {
    const [query, setQuery] = useState();

    const getData = async () => {
        const searchResults = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=cdb0602d337edb45bd801723204229fd&language=en-US&page=1&include_adult=false&query=${query}`)
        const dataSearch = await searchResults.json();
        history.push('/search', { results: dataSearch.results || [], query }); // ir a search //history.push
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            getData();
        }
    }

    return (
        <div className='searchbar-container'>
            <input className='input' value={query} onChange={e => setQuery(e.target.value)}
                onKeyDown={handleKeyDown} type='text' placeholder='Search for a movie, tv show or person...'></input>
            <button onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                    <g fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5">
                        <path d="M.75.75l13.5 13.5M14.25.75L.75 14.25"></path>
                    </g>
                </svg>
            </button>
        </div>
    );

};

export default withRouter(SearchBar); 