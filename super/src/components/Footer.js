import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer bg-gray-900 text-white py-8 mt-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm mb-2">
          &copy; 2025 Ivy Wanjiru Mugo. All Rights Reserved.
        </p>
        <p className="text-sm mb-4">
          Contact: <a href="mailto:mugoivy06@gmail.com" className="hover:text-yellow-400">mugoivy06@gmail.com</a> | +254 701620732
        </p>
        {/* Social Media Links */}
        <div className="social-links space-x-6 mb-4">
          <a href="https://www.linkedin.com/in/ivywanjirumugo" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaLinkedin className="text-2xl inline-block" />
          </a>
          <a href="https://github.com/ivywanjirumugo" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaGithub className="text-2xl inline-block" />
          </a>
          <a href="https://twitter.com/ivywanjirumugo" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaTwitter className="text-2xl inline-block" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
