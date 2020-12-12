import React, { useState } from 'react';
import '../pages/page.css';
import Footer from '../components/footer/Footer';
import Menu from '../components/menu/Index';
import SearchBar from '../components/searchBar/SearchBar';

const Page = ({ children, showSearch = false, onSearchClose }) => {
  const [showSeacherBar, setShowSearchBar] = useState(showSearch);

  const toggleSearch = () => {
    if (onSearchClose) {
      return onSearchClose();
    }
    setShowSearchBar(!showSeacherBar);
  };

  return (
    <div className="page">
      {showSeacherBar && <SearchBar onClose={toggleSearch} />}
      <Menu onSearchClick={toggleSearch} />
      <div className="content-page">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Page;
