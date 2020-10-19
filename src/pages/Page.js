import React from "react";
import '../pages/page.css';
import Footer from "../components/footer/Footer";
import Menu from '../components/menu/Index';


const Page = ({ children }) => {
    return (
        <div className='page'>
            <Menu />
            <div className='content-page'>
                {children}
                <Footer />
            </div>
        </div>
    );
}

export default Page;