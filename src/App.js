import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Discover from "./components/Discover";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero/>
      <Discover/>
    </div>
  );
}

export default App;
