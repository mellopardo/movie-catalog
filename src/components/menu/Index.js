import React from 'react';
import '../menu/index.css';
import { withRouter } from 'react-router-dom';

const Menu = ({ history, onSearchClick }) => {
  return (
    <nav className="navigation">
      <ul className="no-list">
        <li onClick={() => history.push('/')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeMiterlimit="10"
            >
              <path
                d="M8.5 23.2H1.3V9L12 .8 22.7 9v14.2h-7.2v-5c0-1.9-1.6-3.4-3.5-3.4s-3.5 1.5-3.5 3.4v5z"
                data-v-7b357a42=""
              ></path>
            </g>
          </svg>
        </li>
        <li onClick={() => history.push('/movie')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#fff"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            >
              <path
                d="M3.2 12.8h19.6v9.5c0 .5-.4.9-1 .9H4.1c-.5 0-1-.4-1-.9v-9.5"
                data-v-7b357a42=""
              ></path>
              <path
                d="M3.3 13.1l-2-4.4c-.2-.5 0-1 .5-1.2L18 .8c.5-.2 1.1 0 1.3.5l1.8 4-17.5 7.3"
                data-v-7b357a42=""
              ></path>
              <path d="M15 2.1l-.9 6M8 4.7l-1.2 6.6" data-v-7b357a42=""></path>
            </g>
          </svg>
        </li>
        <li onClick={() => history.push('/tv')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path
                d="M21.4 23H2.6c-.9 0-1.6-.7-1.6-1.6V8.9c0-.9.7-1.6 1.6-1.6h18.9c.8 0 1.5.7 1.5 1.6v12.6c0 .8-.7 1.5-1.6 1.5zM6.4 1L12 7M17.6 1L12 7"
                data-v-7b357a42=""
              ></path>
            </g>
          </svg>
        </li>
        <li onClick={onSearchClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M16.4 16.7l6.3 6.5" data-v-7b357a42=""></path>
              <ellipse
                cx="10.5"
                cy="9.8"
                rx="9.2"
                ry="9.1"
                data-v-7b357a42=""
              ></ellipse>
            </g>
          </svg>
        </li>
      </ul>
    </nav>
  );
};
export default withRouter(Menu);
