import React, { useState , useEffect} from 'react';
import '../styles/homePage.css';
import Banner from '../components/banner/Banner';
import Footer from "../components/footer/Footer";
import Menu from '../components/menu/Index';
import Carousel from "../components/carousel/Carousel";


const TvPage = () =>{
    const [trendingTvShow, setTrendingTvShow] = useState ();
    const [popularTvShow, setPopularTvShow] = useState ();
    const [topRatedTv, setTopRatedTv] = useState ();
    const [currentlyTvShow, setCurrentlyTvShow] = useState ();
    const [todayShow, setTodayShow] = useState ();

    useEffect(() => {
        getData()
    }, []);

    const getData = async ()=>{
        const trendingTvShow = await fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=cdb0602d337edb45bd801723204229fd&language=en-US');
        const trendingTv = await trendingTvShow.json();

        const popularTvShow = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=cdb0602d337edb45bd801723204229fd&language=en-US&page=1');
        const popular = await popularTvShow.json();

        const topRatedTv = await fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=cdb0602d337edb45bd801723204229fd&language=en-US&page=1');
        const topRated = await topRatedTv.json();

        const currentlyTvShow = await fetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=cdb0602d337edb45bd801723204229fd&language=en-US&page=1');
        const currentlyTv = await currentlyTvShow.json();

        const  todayShow = await fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=cdb0602d337edb45bd801723204229fd&language=en-US&page=1');
        const todayTv = await todayShow.json();

        setTrendingTvShow(trendingTv.results);
        setPopularTvShow(popular.results);
        setTopRatedTv(topRated.results);
        setCurrentlyTvShow(currentlyTv.results);
        setTodayShow(todayTv.results);

    };

    if( !trendingTvShow || !popularTvShow || !topRatedTv || !currentlyTvShow || !todayShow){
        return 'Cargando';
    };

    return(
        <div className='page'>
        <Menu></Menu>
         <div className='content-page'>
             <Banner item={trendingTvShow[0]}></Banner>
             <div>
                 <Carousel items={popularTvShow} title='Popular TV Shows'></Carousel>
                 <Carousel items={topRatedTv} title='Top Rated TV Shows'></Carousel>
                 <Carousel items={currentlyTvShow} title='Currently Airing TV Shows'></Carousel>
                 <Carousel items={todayShow} title='TV Shows Airing Today'></Carousel>
             </div>
             <Footer></Footer>
         </div>
     </div>
    );
}
export default TvPage;