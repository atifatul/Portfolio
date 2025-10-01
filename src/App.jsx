import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="bg-[#111111]">
      <Navbar/>
      <Hero />
      {/* Baaki sections yahan aayenge */}
    </div>
  );
};

export default App;
