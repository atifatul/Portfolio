import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/lightswind/particles-background";

const App = () => {
  return (
    <div className="bg-[#111111]">
      <ParticlesBackground/>
      <Navbar />
      <Hero />   
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      {/* Baaki sections yahan aayenge */}
    </div>
  );
};

export default App;
