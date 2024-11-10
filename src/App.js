import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
// import HeroSlider from './components/Heroslider';
import Signup from './pages/Signup';
//import Slider from './components/Slider';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => (
  <div className="App">
    <Navbar />
  {/* / <Slider /> */}
  {/* <Signup/> */}
  {/* <HeroSlider/> */}
  <Homepage/>
    <Footer />
  </div>
);

export default App;
