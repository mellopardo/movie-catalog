import React from "react";
import Twitter from "../icons/Twitter";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Imdb from "../icons/Imdb";
import Link from "../icons/Link";
import Poster from "../Poster";
import "./storyline.css";


const Storyline = ({ title }) => {
    return (
        <div className='content-details'>
            <div>
                <Poster item={title}></Poster>
            </div>
            <div>
                <div className='header-details'>
                    <h1>Storyline</h1>
                    <span><p>{title.overview}</p></span>
                </div>
                <div>
                    <ul className='details-noList'>
                        {title.release_date && <li><p>Released {title.release_date}</p></li> }
                        <li><p>Runtime {title.runtime ? title.runtime : (title.episode_run_time ||[]).map(rt => `${rt}m`).join(', ')}</p></li>
                        <li><p>Creator {(title.created_by || []).map(created => created.name).join(', ')}</p></li>
                        <li><p>Production {(title.production_companies || []).map(prodCompanies => prodCompanies.name).join(', ')}</p></li>
                        <li><p>Genre {(title.genres || []).map(gen => gen.name).join(', ')}</p></li>
                        <li><p>Status {title.status}</p></li>
                        <li><p>Language {(title.spoken_languages|| []).map(languages => languages.name).join(', ')}</p></li>
                        {title.first_air_date && <li><p>First Aired {title.first_air_date}</p></li>}
                        {title.number_of_seasons && <li><p>Seasons {title.number_of_seasons}</p></li>}
                        {title.number_of_episodes && <li><p>Episodes {title.number_of_episodes}</p></li>}
                        {title.last_air_date && <li><p>Last Aired {title.last_air_date}</p></li>}
                        
                    </ul>
                    
                    <ul className='icons'>
                        {title.twitter_id && <li>
                            <a href={title.twitter_id}>
                                <Twitter />
                            </a>
                        </li>}
                        {title.facebook_id && <li>
                            <a href={title.facebook_id}>
                                <Facebook/>
                            </a>
                        </li>}
                        
                        {title.instagram_id &&<li>
                            <a href={title.instagram_id}>
                                <Instagram />
                            </a>
                        </li>}
                        
                        {title.imdb_id &&<li>
                            <a href={title.imdb_id}>
                                <Imdb />
                            </a>
                        </li>}
                        
                        {title.homepage && <li>
                            <a href={title.homepage}>
                                <Link />
                            </a>
                        </li>}
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Storyline;