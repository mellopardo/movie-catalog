import React, { useState, useEffect } from 'react';
import './page.css';
import Page from './Page';
import Banner from '../components/banner/Banner';
import Carousel from '../components/carousel/Carousel';

const HomePage = () => {
  const [trendingAll, setTrendingAll] = useState();
  const [trendingMovies, setTrendingMovies] = useState();
  const [trendingSeries, setTrendingSeries] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const trendingAll = await fetch(
      'https://api.themoviedb.org/3/trending/all/week?api_key=cdb0602d337edb45bd801723204229fd'
    );
    const all = await trendingAll.json();

    const trendingMovies = await fetch(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=cdb0602d337edb45bd801723204229fd'
    );
    const movies = await trendingMovies.json();

    const trendingSeries = await fetch(
      'https://api.themoviedb.org/3/trending/tv/week?api_key=cdb0602d337edb45bd801723204229fd'
    );
    const series = await trendingSeries.json();

    setTrendingAll(all.results);
    setTrendingMovies(movies.results);
    setTrendingSeries(series.results);
  };

  if (!trendingMovies || !trendingSeries || !trendingAll) {
    return 'cargando';
  }

  const getRandomBanner = () => {
    return Math.floor(Math.random() * trendingAll.length);
  };

  return (
    <Page>
      <Banner item={trendingAll[getRandomBanner()]}></Banner>
      <div>
        <Carousel
          link="/trending/movie/week"
          items={trendingMovies}
          title="Trending Movies"
          type="movie"
        ></Carousel>
        <Carousel
          link="/trending/tv/week"
          items={trendingSeries}
          title="Trending TV Shows"
          type="tv"
        ></Carousel>
      </div>
    </Page>
  );
};
export default HomePage;
