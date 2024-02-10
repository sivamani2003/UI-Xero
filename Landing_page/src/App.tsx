import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Organizations from "./components/Organizations";
import Blog from "./components/Blog";
import Slider from "./components/Slider";
import Slider_2 from "./components/Slider2";
import Crew from "./components/Crew";
import Above_footer from "./components/Abovefooter";
import Footer from "./components/Footer";
import "./App.css";


const App: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Organizations/>
      <Blog/>
      <Slider/>
      <Slider_2/>
      <Crew/>
      <Above_footer/>
      <Footer/>
    </div>
  );
}

export default App;
