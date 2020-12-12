import React, { useState, useEffect } from 'react';
import Banner from '../components/banner/Banner';
import Carousel from '../components/carousel/Carousel';
import Page from './Page';

const TvPage = () => {
  const [trendingTvShow, setTrendingTvShow] = useState();
  const [popularTvShow, setPopularTvShow] = useState();
  const [topRatedTv, setTopRatedTv] = useState();
  const [currentlyTvShow, setCurrentlyTvShow] = useState();
  const [todayShow, setTodayShow] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const trendingTvShow = await fetch(
      'https://api.themoviedb.org/3/trending/tv/week?api_key=cdb0602d337edb45bd801723204229fd&language=en-US'
    );
    const trendingTv = await trendingTvShow.json();

    const popularTvShow = await fetch(
      'https://api.themoviedb.org/3/tv/popular?api_key=cdb0602d337edb45bd801723204229fd&language=en-US&page=1'
    );
    const popular = await popularTvShow.json();

    const topRatedTv = await fetch(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=cdb0602d337edb45bd801723204229fd&language=en-US&page=1'
    );
    const topRated = await topRatedTv.json();

    const currentlyTvShow = await fetch(
      'https://api.themoviedb.org/3/tv/on_the_air?api_key=cdb0602d337edb45bd801723204229fd&language=en-US&page=1'
    );
    const currentlyTv = await currentlyTvShow.json();

    const todayShow = await fetch(
      'https://api.themoviedb.org/3/tv/airing_today?api_key=cdb0602d337edb45bd801723204229fd&language=en-US&page=1'
    );
    const todayTv = await todayShow.json();

    setTrendingTvShow(trendingTv.results);
    setPopularTvShow(popular.results);
    setTopRatedTv(topRated.results);
    setCurrentlyTvShow(currentlyTv.results);
    setTodayShow(todayTv.results);
  };

  if (
    !trendingTvShow ||
    !popularTvShow ||
    !topRatedTv ||
    !currentlyTvShow ||
    !todayShow
  ) {
    return 'Cargando';
  }

  return (
    <Page>
      <Banner item={trendingTvShow[0]}></Banner>
      <div>
        <Carousel
          link="/tv/category/popular"
          items={popularTvShow}
          title="Popular TV Shows"
          type="tv"
        ></Carousel>
        <Carousel
          link="/tv/category/top_rated"
          items={topRatedTv}
          title="Top Rated TV Shows"
          type="tv"
        ></Carousel>
        <Carousel
          link="/tv/category/on_the_air"
          items={currentlyTvShow}
          title="Currently Airing TV Shows"
          type="tv"
        ></Carousel>
        <Carousel
          link="/tv/category/airing_today"
          items={todayShow}
          title="TV Shows Airing Today"
          type="tv"
        ></Carousel>
      </div>
    </Page>
  );
};
export default TvPage;
