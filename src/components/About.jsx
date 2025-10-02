import React from "react";
import PassportPhoto from "../assets/Passport_Photo Atif.jpeg";
const About = () => {
  return (
    <section id="about" className="bg-[#111111] text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* About Image Placeholder */}
          <div className="w-full max-w-sm mx-auto">
            {/* Hum yahan baad mein image daal sakte hain. Abhi ke liye ek placeholder hai. */}
            <div className="bg-gray-700 rounded-[50%] w-full h-80 flex items-center justify-center">
              {/* <span className="text-gray-400">
                <img src="" alt="Passport Photo" />
              </span> */}
              <img
                src={PassportPhoto}
                alt="Passport"
                className="object-cover rounded-[50%] w-full h-full"
              />
            </div>
          </div>

          {/* About Text Content */}
          <div>
            <h3 className="text-3xl font-semibold mb-4 underline">A bit about me :</h3>
            <p className="text-gray-300 mb-4 text-2xl">
              I am a passionate full-stack developer with experience in building
              modern, responsive, and scalable web applications. I love solving
              complex problems and turning ideas into reality.
            </p>
            <p className="text-gray-300 mb-6 text-2xl">
              My expertise lies in the MERN stack (MongoDB, Express.js,
              React.js, Node.js) and deploying applications using Netlify and
              Vercel.
            </p>
            <a
              href="#contact"
              className="bg-amber-400 text-black font-semibold px-6 py-3 rounded hover:bg-gray-200 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
