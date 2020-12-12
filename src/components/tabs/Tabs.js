import React from 'react';
import './tabs.css';

const Tabs = ({ tabs = [], onSelect }) => {
  return (
    <div className="tab">
      {tabs.map((tab) => (
        <h2 onClick={() => onSelect(tab)}>{tab}</h2>
      ))}
    </div>
  );
};

export default Tabs;
