import {useState, useEffect} from 'react';
import './App.scss';
import desktopBg from './../bg/ih-main-desktop-bg.png';
import mobileBg from './../bg/ih-main-mobile-bg.png';
import Homepage from '../Pages/HomePage.js';

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
        <div className="loader"></div>
        :
        <Homepage /> 
      }
    </div>
  );
}

export default App;
