import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/cat.jpeg";

function Home() {
  return (
    <motion.section
      className="home bg-gray-800 min-h-screen flex items-center justify-center py-8 mt-16" // Keep the mt-16 for space from navbar
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="home-container flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-12 flex-wrap">
        {/* Profile Image */}
        <motion.img
          src={profileImage}
          alt="Ivy Wanjiru Mugo"
          className="profile-image w-52 h-52 md:w-72 md:h-72 rounded-full shadow-lg object-cover border-4 border-sky-400 glow-effect mb-8 md:mb-0 mt-20 sm:mt-32" // Adjusted margin-top for better spacing
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Text Section */}
        <motion.div
          className="home-text text-center md:text-left text-white"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-medium mb-2">Hello, I'm</h2>
          <h1 className="text-5xl font-semibold mb-4">Ivy Wanjiru Mugo</h1>
          <h1 className="text-3xl font-semibold mb-6">
            I am an{" "}
            <motion.span
              className="text-sky-400 inline-block align-middle"
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: 0,
                repeatType: "loop",
                delay: 0.5,
              }}
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              <motion.span
                className="typing-effect"
                animate={{
                  text: [
                    "",
                    "A",
                    "Ac",
                    "Acc",
                    "Acco",
                    "Accou",
                    "Accoun",
                    "AccounT",
                    "Account",
                    "Accounta",
                    "Accountan",
                    "Accountant",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                Accountant
              </motion.span>
            </motion.span>
          </h1>
          <motion.p className="home-description text-lg mb-6 max-w-lg mx-auto md:mx-0">
            A detail-oriented and passionate Accountant dedicated to financial excellence. With experience in{" "}
            <em>financial reporting, budgeting, and compliance</em>, I help businesses maintain accuracy and efficiency in their accounting practices.
          </motion.p>
          <motion.a
            href="#"
            className="download-btn inline-block px-6 py-3 text-white bg-sky-400 hover:bg-sky-500 rounded-lg shadow-md transition duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Home;
