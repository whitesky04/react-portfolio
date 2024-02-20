import {useState, useEffect} from 'react';
import logo from '../../main-logo.svg';
import './App.scss';
import desktopBg from './../bg/ih-main-desktop-bg.png';
import mobileBg from './../bg/ih-main-mobile-bg.png';
import HomePage from '../Pages/HomePage.js';
import Blog from '../Pages/Blog.js';
import ProjectPage from '../Pages/ProjectPage.js';
import NotFoundPage from '../Pages/NotFoundPage.js';


import { Route, Routes, Link } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 1000)
  }, [])
  const imageUrl = window.innerWidth >= 800 ? desktopBg : mobileBg;
  return (
    <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
      {
        loading ?
        <loader className="loader"/>
        :
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <Routes>
              <Route exact path="/" component={HomePage} />
              <Route path="/projects" component={ProjectPage} />
              <Route path="/blog" component={Blog} />
              <Route component={NotFoundPage} />
            </Routes>
          <Link to={'/projects'} className="nav-link mask font-face-ps">project</Link>  
          <Link to={'/blogs'} className="nav-link mask font-face-ps">blog</Link>    
        </header>
      }
    </div>
  );
}

export default App;
