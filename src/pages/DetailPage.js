import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Page from './Page';
import Banner from '../components/banner/Banner';
import Tabs from '../components/tabs/Tabs';
import Overview from '../components/overview/Overview';

const DetailPage = () => {
  const [titleInfo, setTitleInfo] = useState({});
  const [key, setKey] = useState('overview');

  const { type, id } = useParams();

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=cdb0602d337edb45bd801723204229fd&language=en-US`
    );
    const titleData = await response.json();

    setTitleInfo(titleData);
  };

  return (
    <Page>
      <Banner item={titleInfo || {}} link={false}></Banner>
      <Tabs
        active={key}
        onSelect={(k) => setKey(k)}
        tabs={['OVERVIEW', 'videos', 'PHOTOS']}
      />
      {key === 'overview' && (
        <div>
          <Overview title={titleInfo}></Overview>
        </div>
      )}
      {key === 'videos' && <div>videos</div>}
      {key === 'photos' && <div>photos</div>}
    </Page>
  );
};

export default DetailPage;
