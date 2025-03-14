import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  // Handle scroll event to change navbar background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 left-0 ${scrolling ? "bg-gray-800" : "bg-gray-900"} text-white shadow-md z-50`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Split name into parts with different colors */}
        <Link to="/" className="text-2xl font-bold">
          <span className="text-white">Ivy</span>{" "}
          <span className="text-sky-400">Wanjiru</span>{" "}
          <span className="text-white">Mugo</span>
        </Link>

        {/* Nav Links */}
        <ul className="flex gap-6 items-center bg-gray-900 md:bg-transparent shadow-md p-4 md:p-0 overflow-x-auto whitespace-nowrap md:overflow-x-visible">
          <li>
            <Link to="/" className="block px-4 py-2 hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="block px-4 py-2 hover:text-yellow-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/experience" className="block px-4 py-2 hover:text-yellow-400">
              Experience
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block px-4 py-2 hover:text-yellow-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


