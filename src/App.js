
 import './App.css';
 import Navbar from './components/Navbar/Navbar';
import AboutUs from './container/AboutUs/Aboutus';
import Footer from './container/Footer/Footer';
 import Gallery from './container/Gallery/Gallery';
 import Header from './container/Header/Header';
  import Intro from './container/Intro/Intro';

import Chef from './container/Chef/Chef';
import Findus from './container/Findus/Findus';

import React from 'react'
import SpecialMenu from './container/SpecialMenu/SpecialMenu';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <AboutUs/>
      <SpecialMenu/>
      <Chef/>
      <Intro/>
     
<Gallery />
    <Findus />
    <Footer/>
    </div>
  )
}

export default App
