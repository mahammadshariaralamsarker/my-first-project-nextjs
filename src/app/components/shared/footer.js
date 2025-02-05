import React from 'react';
import { Facebook, Twitter, Instagram, Github } from "lucide-react";
const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section - Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">BrandName</h2>
          <p className="text-gray-400 text-sm">© 2025 All rights reserved.</p>
        </div>

         

        {/* Right Section - Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400"><Facebook size={24} /></a>
          <a href="#" className="hover:text-gray-400"><Twitter size={24} /></a>
          <a href="#" className="hover:text-gray-400"><Instagram size={24} /></a>
          <a href="#" className="hover:text-gray-400"><Github size={24} /></a>
        </div>

      </div>
    </footer>

    </div>
  );
};

export default Footer;