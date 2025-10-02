import React from "react";
import PassportPhoto from "../assets/Atif reyyani .png";
import { motion } from "motion/react";
const About = () => {
  return (
    <section id="about" className="bg-[#111111] text-white py-20 top-4">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 top-2"
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-32">
          {/* About Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-sm mx-auto"
          >
            <div className="bg-gray-700 rounded-full w-full h-80 flex items-center justify-center overflow-hidden">
              <img
                src={PassportPhoto}
                alt="Passport"
                className="object-fit object-top-right rounded-full w-full h-full"
              />
            </div>
          </motion.div>

          {/* About Text Content */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-4 underline"
            >
              A bit about me :
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-4 text-xl"
            >
              I am a passionate full-stack developer with experience in building
              modern, responsive, and scalable web applications. I love solving
              complex problems and turning ideas into reality.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-6 text-xl"
            >
              My expertise lies in the MERN stack (MongoDB, Express.js,
              React.js, Node.js) and deploying applications using Netlify and
              Vercel.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2 }}
              viewport={{ once: true }}
              href="#contact"
              className="bg-amber-400 text-black font-semibold px-6 py-3 rounded hover:bg-gray-200 transition-colors"
            >
              Get In Touch
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
