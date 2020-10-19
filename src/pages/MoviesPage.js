import React, { useState, useEffect } from 'react';
import '../styles/homePage.css';
import Banner from '../components/banner/Banner';
import Footer from "../components/footer/Footer";
import Menu from '../components/menu/Index';
import Carousel from "../components/carousel/Carousel";

const MoviesPage = () => {
    const [trendingMovies, setTrendingMovies] = useState();
    const [popularMovies, setPopularMovies] = useState();
    const [topRatedMovies, setTopRatedMovies] = useState();
    const [upComingMovies, setUpComingMovies] = useState();
    const [nowPlayingMovies, setNowPlayingMovies] = useState();

    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        const trendingMovies = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=cdb0602d337edb45bd801723204229fd');
        const trending = await trendingMovies.json();

        const popularMovies = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=cdb0602d337edb45bd801723204229fd&language=en-US&page=1');
        const popular = await popularMovies.json();

        const topRatedMovies = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=cdb0602d337edb45bd801723204229fd&language=en-US&page=1');
        const topRated = await topRatedMovies.json();

        const upComingMovies = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=cdb0602d337edb45bd801723204229fd&language=en-US&page=1');
        const upComing = await upComingMovies.json();

        const nowPlayingMovies = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=cdb0602d337edb45bd801723204229fd&language=en-US&page=1');
        const nowPlaying = await nowPlayingMovies.json();

        setTrendingMovies(trending.results);
        setPopularMovies(popular.results);
        setTopRatedMovies(topRated.results);
        setUpComingMovies(upComing.results);
        setNowPlayingMovies(nowPlaying.results);

    }

    if (!trendingMovies || !popularMovies || !topRatedMovies || !upComingMovies || !nowPlayingMovies) {
        return "cargando";
    }

    return (
        <div className='page'>
            <Menu></Menu>
            <div className='content-page'>
                <Banner item={trendingMovies[0]}></Banner>
                <div>
                    <Carousel items={popularMovies} title='Popular Movies'></Carousel>
                    <Carousel items={topRatedMovies} title='Top Rated Movies'></Carousel>
                    <Carousel items={upComingMovies} title='Up Coming Movies'></Carousel>
                    <Carousel items={nowPlayingMovies} title='Now Playing Movies'></Carousel>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );

};

export default MoviesPage;