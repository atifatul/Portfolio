import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#191919] text-gray-400 py-6 text-center">
      <div className="container mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} Md Atif Reyyani. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;