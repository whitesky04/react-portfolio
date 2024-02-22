import React from 'react';
import './App.scss';
import desktopBg from './../bg/ih-main-desktop-bg.png';
import mobileBg from './../bg/ih-main-mobile-bg.png';
import Home from '../../pages/Home.js';
import Blogs from '../../pages/Blogs.js';
import Projects from '../../pages/Projects.js'
import NotFound from '../../pages/NotFound.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    /*loading spinner before page is loaded*/
// const [loading, setLoading] = useState(false);

// useEffect(() =>{
//   setLoading(true)
//   setTimeout(()=>{
//     setLoading(false)
//   }, 1000)
// }, [])
const imageUrl = window.innerWidth >= 800 ? desktopBg : mobileBg;
return (
    <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
    {/* {
        loading ?
        <div className="loader"></div>
        :
        <Home /> 
    } */}
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />}/>
            <Route path="home" element={<Home />}/>
            <Route path="projects" element={<Projects />}/>
            <Route path="blogs" element={<Blogs />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
    </div>
);
}

export default App;
