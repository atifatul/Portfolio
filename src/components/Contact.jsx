import React from "react";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#111111] text-white py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            I'm currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </motion.p>
        </div>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          viewport={{ once: true }}
          href="mailto:atifatul752@gmail.com"
          className="bg-white text-black font-bold text-xl px-8 py-4 rounded-lg inline-block transform transition-transform duration-300 hover:scale-105"
        >
          Say Hello
        </motion.a>

        <div className="mt-12">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 mb-4"
          >
            You can also find me on:
          </motion.p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/atifatul" // Yahan apna GitHub link daalna
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-gray-300 underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/md-atif-reyyani/" // Yahan apna LinkedIn link daalna
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-gray-300 underline"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/AtifReyyani" // Yahan apna Twitter/X link daalna
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-gray-300 underline"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
