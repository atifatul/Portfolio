import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#111111] text-white py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold">Get In Touch</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm currently looking for new opportunities, my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>
        
        <a 
          href="mailto:your-email@example.com" 
          className="bg-white text-black font-bold text-xl px-8 py-4 rounded-lg inline-block transform transition-transform duration-300 hover:scale-105"
        >
          Say Hello
        </a>

        <div className="mt-12">
          <p className="text-gray-400 mb-4">You can also find me on:</p>
          <div className="flex justify-center space-x-6">
            <a 
              href="#" // Yahan apna GitHub link daalna
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-lg hover:text-gray-300 underline"
            >
              GitHub
            </a>
            <a 
              href="#" // Yahan apna LinkedIn link daalna
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-lg hover:text-gray-300 underline"
            >
              LinkedIn
            </a>
            <a 
              href="#" // Yahan apna Twitter/X link daalna
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
}

export default Contact;