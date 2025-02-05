import React from "react";

const Navbar = () => {
  return (
    <div className="  flex space-x-6 bg-blue-500">
      <a href="/" className="hover:text-gray-200">
        Home
      </a>
      <a href="/about" className="hover:text-gray-200">
        About
      </a>
      <a href="/dashboard" className="hover:text-gray-200">
        dashboard
      </a>
      <a href="/contact" className="hover:text-gray-200">
        Contact
      </a>
      <a href="/login" className="hover:text-gray-200">
        Login
      </a>
      <a href="/register" className="hover:text-gray-200">
      Register
      </a>
    </div>
  );
};

export default Navbar;
