import React from "react";
import { motion } from "motion/react";
const Footer = () => {
  return (
    <footer className="bg-[#191919] text-gray-400 py-6 text-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        <p>
          &copy; {new Date().getFullYear()} Md Atif Reyyani. All Rights
          Reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
