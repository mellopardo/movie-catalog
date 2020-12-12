import React, { useState, useEffect } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import Page from './Page';
import Card from '../components/card/Card';

const ExploreMore = ({ location }) => {
  const {
    state: { title },
  } = location;

  const { type, category, filter } = useParams();
  const [categoryType, setCategoryType] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let url = category
      ? `https://api.themoviedb.org/3/${type}/${category}/${filter}`
      : `https://api.themoviedb.org/3/${type}/${filter}`;
    const response = await fetch(
      `${url}?api_key=cdb0602d337edb45bd801723204229fd&language=en-US`
    );
    const categoryInformation = await response.json();

    setCategoryType(categoryInformation);
  };

  return (
    <Page>
      <div className="grid-page">
        <h1>{title}</h1>
        <div className="grid-results">
          {categoryType &&
            categoryType.results.map((item) => (
              <Card type={filter} item={item} />
            ))}
        </div>
      </div>
    </Page>
  );
};

export default withRouter(ExploreMore);
