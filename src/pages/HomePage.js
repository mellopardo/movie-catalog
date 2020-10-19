import React, { useState, useEffect } from "react";
import '../pages/page.css';
import Page from './Page';
import Banner from '../components/banner/Banner';
import Carousel from "../components/carousel/Carousel";

const HomePage = () => {

    const [trendingAll, setTrendingAll] = useState()
    const [trendingMovies, setTrendingMovies] = useState();
    const [trendingSeries, setTrendingSeries] = useState();

    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        const trendingAll = await fetch('https://api.themoviedb.org/3/trending/all/week?api_key=cdb0602d337edb45bd801723204229fd');
        const all = await trendingAll.json();

        const trendingMovies = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=cdb0602d337edb45bd801723204229fd');
        const movies = await trendingMovies.json();

        const trendingSeries = await fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=cdb0602d337edb45bd801723204229fd');
        const series = await trendingSeries.json();

        console.log(movies)
        setTrendingAll(all.results)
        setTrendingMovies(movies.results)
        setTrendingSeries(series.results)
    }

    if (!trendingMovies || !trendingSeries || !trendingAll) {
        return "cargando";
    }

    return (
        <Page>
            <Banner item={trendingAll[9]}></Banner>
            <div>
                <Carousel items={trendingMovies} title='Trending Movies'></Carousel>
                <Carousel items={trendingSeries} title='Trending TV Shows'></Carousel>
            </div>
        </Page>
    );
}
export default HomePage;