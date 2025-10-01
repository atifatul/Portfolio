import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#111111] text-white h-screen flex flex-col justify-center items-center text-center pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hey, I'm Atif 👋
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
          I'm a full-stack developer, I create seamless web experiences for end-users.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#contact" className="bg-white text-black font-semibold px-6 py-3 rounded">
            Get In Touch
          </a>
          <a href="#" className="border border-white text-white font-semibold px-6 py-3 rounded">
            Browse Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;