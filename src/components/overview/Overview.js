import React, { useState, useEffect }  from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../carousel/Carousel';
import Storyline from '../storyline/Storyline';


const Overview = ({title}) => {
    const [recommendation, setRecommendation] = useState([]);
    const [cast, setCast] = useState([]);
    const { type, id } = useParams();

    useEffect(() => {
        getData()
    }, [id]);

    const getData = async () => {
        const castResponce = await fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=cdb0602d337edb45bd801723204229fd&language=en-US`)
        const castData = await castResponce.json();

        const recommendationResponse = await fetch(`https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=cdb0602d337edb45bd801723204229fd&language=en-US`)
        const recommendationData = await recommendationResponse.json();

        setCast(castData.cast);
        setRecommendation(recommendationData.results);
    }
    return (
        <div>
            <Storyline title= {title} ></Storyline>
            <Carousel items={cast} title='Cast'/>
            <Carousel items={recommendation} title='More Like This' type={type}/>
            
        </div>
    );
};

export default Overview;