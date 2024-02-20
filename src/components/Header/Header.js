import { Link } from 'react-router-dom';
import Logo from '../../main-logo.svg';

const Header = () => {

    return (
      <header>
        <Logo classname="logo" />
        {/* <Logo src={require('../../main-logo.svg').default} className="logo" /> */}
        <div className="header menuWrapper" style={{height: `100%`}}>
          <Link to={'/projects'} className="nav-link mask font-face-ps">project</Link>  
          <Link to={'/blogs'} className="nav-link mask font-face-ps">blog</Link>     
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </header>
    );
}

export default Header;