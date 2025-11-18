import React from "react";
import { motion } from "motion/react";
// import ParticlesBackground from "./lightswind/particles-background";
const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#111111] text-white h-screen flex flex-col justify-center items-center text-center pt-20"
    >
      {/* <ParticlesBackground /> */}
      

      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hey, I'm Atif 👋
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300"
        >
          I'm a full-stack developer, I create seamless web experiences for
          end-users.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-4"
        >
          <a
            href="#contact"
            className="bg-white text-black font-semibold px-6 py-3 rounded"
          >
            Get In Touch
          </a>
          <a
            href="#project"
            className="border border-white text-white font-semibold px-6 py-3 rounded"
          >
            Browse Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
