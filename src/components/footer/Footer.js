import React from 'react';
import Twitter from '../icons/Twitter';
import Github from '../icons/Github';
import Linkedin from '../icons/Linkedin';
import Mail from '../icons/Mail';
import './footer.css';
const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-container-text'>
                    <p>© 2020. All rights reserved.</p>
                    <p>Designed by <a href="https://github.com/jasonujmaalvis">Jason Ujma-Alvis.</a></p>
                    <p>Implemented by <a href="https://github.com/mellopardo" target="_blank" aria-label="Link to GitHub account" rel="noopener">me. </a>Data provided by <a target="_blank" href="https://www.themoviedb.org/" rel="noopener">TMDb.</a></p>
                </div>

                <ul className='footer-media'>
                    <li>
                        <a href="https://twitter.com" target="_blank" aria-label="Link to Twitter account" rel="noopener"><Twitter /></a>
                    </li>
                    <li>
                        <a href="https://github.com/mellopardo" target="_blank" aria-label="Link to GitHub account" rel="noopener"><Github></Github></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/melania-lopardo/" target="_blank" aria-label="Link to LinkedIn account" rel="noopener"><Linkedin /></a>
                    </li>
                    <li>
                        <a href="mailto:mel.lopardo@hotmail.com" aria-label="Link to Email" rel="noopener"><Mail /></a>
                    </li>
                </ul>
            </div>

        </footer>
    );
}
export default Footer;