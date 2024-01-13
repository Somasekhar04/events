import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Services from "../Services/Services";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";

function App(){
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Gallery/>
      <Contact/>
    </div>
  )
};

export default App;
