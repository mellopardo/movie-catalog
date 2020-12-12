import React, { useState, useEffect } from 'react';
import Page from './Page';
import Banner from '../components/banner/Banner';
import Carousel from '../components/carousel/Carousel';

const MoviesPage = () => {
  const [trendingMovies, setTrendingMovies] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [topRatedMovies, setTopRatedMovies] = useState();
  const [upComingMovies, setUpComingMovies] = useState();
  const [nowPlayingMovies, setNowPlayingMovies] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const trendingMovies = await fetch(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=cdb0602d337edb45bd801723204229fd'
    );
    const trending = await trendingMovies.json();

    const popularMovies = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=cdb0602d337edb45bd801723204229fd&language=en-US&page=1'
    );
    const popular = await popularMovies.json();

    const topRatedMovies = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=cdb0602d337edb45bd801723204229fd&language=en-US&page=1'
    );
    const topRated = await topRatedMovies.json();

    const upComingMovies = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=cdb0602d337edb45bd801723204229fd&language=en-US&page=1'
    );
    const upComing = await upComingMovies.json();

    const nowPlayingMovies = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=cdb0602d337edb45bd801723204229fd&language=en-US&page=1'
    );
    const nowPlaying = await nowPlayingMovies.json();

    setTrendingMovies(trending.results);
    setPopularMovies(popular.results);
    setTopRatedMovies(topRated.results);
    setUpComingMovies(upComing.results);
    setNowPlayingMovies(nowPlaying.results);
  };

  if (
    !trendingMovies ||
    !popularMovies ||
    !topRatedMovies ||
    !upComingMovies ||
    !nowPlayingMovies
  ) {
    return 'cargando';
  }

  return (
    <Page>
      <Banner item={trendingMovies[0]}></Banner>
      <div>
        <Carousel
          link="/movie/category/popular"
          items={popularMovies}
          title="Popular Movies"
          type="movie"
        ></Carousel>
        <Carousel
          link="/movie/category/top_rated"
          items={topRatedMovies}
          title="Top Rated Movies"
          type="movie"
        ></Carousel>
        <Carousel
          link="/movie/category/upcoming"
          items={upComingMovies}
          title="Up Coming Movies"
          type="movie"
        ></Carousel>
        <Carousel
          link="/movie/category/now_playing"
          items={nowPlayingMovies}
          title="Now Playing Movies"
          type="movie"
        ></Carousel>
      </div>
    </Page>
  );
};

export default MoviesPage;
