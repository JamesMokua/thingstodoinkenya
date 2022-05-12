import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Discover from "./components/Discover";
import Activities from "./components/Activities";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero/>
      <Discover/>
      <Activities/>
      <Footer/>
    </div>
  );
}

export default App;
