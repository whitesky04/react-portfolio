
import { Routes, Route, Link } from 'react-router-dom';
import logo from '../../main-logo.svg';
import './Header.scss';
// import HomePage from '../Pages/HomePage.js';
// import ProjectPage from '../Pages/ProjectPage.js';
// import NotFoundPage from '../Pages/NotFoundPage.js';
import star from '../../components/bg/star.png';

const Header = () => {

    return (
      <header>
        <img src={logo} className="logo" alt="logo"/>
          {/* <Routes>
            <Route exact path="*" element={<HomePage/>} />
            <Route path="/projects" element={<ProjectPage/>} />
            <Route element={<NotFoundPage/>} />
          </Routes> */}
        <div className="title-wrapper">
            <div className="title-links">
              <Link to={`/projects`} className="nav-link mask font-face-ps"><img src={star} className="icon-star" alt="star"/>project</Link>  
              <Link to={`/blogs`} className="nav-link mask font-face-ps"><img src={star} className="icon-star" alt="star"/>blog</Link>
            </div>
          </div>  
      </header>
    );
}

export default Header;