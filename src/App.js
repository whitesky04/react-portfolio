import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import desktopBg from "./bg/ih-main-desktop-bg.png"
import mobileBg from "./bg/ih-main-mobile-bg.png"

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 3000)
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
          <p className="font-face-ps">
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      }
    </div>
  );
}

export default App;
