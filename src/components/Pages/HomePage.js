import React from 'react';
import Header from '../Header/Header.js';
import './HomePage.scss';

const HomePage = () => {
    return(
        <div className="container" style={{height: `100%`}}>
            <Header />
            {/* <h1 className="titlePage">Home</h1>
            <div>
               this is home
            </div> */}
        </div>
    );
}

export default HomePage;