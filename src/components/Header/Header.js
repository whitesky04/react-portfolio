import logo from '../../main-logo.svg';
import './Header.scss';
import star from '../../components/bg/star.png';

import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <img src={logo} className="logo" alt="logo"/>
            <div className="title-wrapper">
                <div className="title-links">
                    <Link to={`/projects`} className="nav-link mask font-face-ps"><img src={star} className="icon-star" alt="star"/>projects</Link>  
                    <Link to={`/blogs`} className="nav-link mask font-face-ps"><img src={star} className="icon-star" alt="star"/>blogs</Link>
                </div>
            </div>  
        </header>
    );
}

export default Header;