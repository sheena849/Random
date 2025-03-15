import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/cat.jpeg";

function About() {
  const [activeSection, setActiveSection] = useState("skills");

  // Create refs for each section
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const careerRef = useRef(null);

  // Track which section is being clicked
  const [clickedSection, setClickedSection] = useState(null);

  useEffect(() => {
    // Scroll into view only when a section is clicked
    if (clickedSection) {
      clickedSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [clickedSection]);

  const handleSectionClick = (section, ref) => {
    setActiveSection(activeSection === section ? "" : section);
    setClickedSection(ref.current);  // Set the clicked section to trigger scroll
  };

  return (
    <motion.section
      className="about bg-gray-800 text-white min-h-screen py-6 px-6 mt-8 pt-40"  
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Profile Image */}
        <div className="profile-container flex-shrink-0 w-full md:w-72 h-72 mb-8 md:mb-0 mx-auto md:mx-0">
          <img
            src={profileImage}
            alt="Ivy Wanjiru Mugo"
            className="w-full h-full object-cover rounded-lg shadow-md border-4 border-sky-400"
          />
        </div>

        {/* About Me Content */}
        <div className="about-content flex-1">
          <h2 className="text-4xl font-extrabold text-center mb-6 text-sky-400">About Me</h2>
          <motion.p
            className="about-text text-lg leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm <strong className="text-sky-500">Ivy Wanjiru Mugo</strong>, an experienced assistant
            accountant with a strong background in financial management and
            reporting. I have a keen eye for detail and a passion for helping
            businesses maintain accurate financial records.
          </motion.p>

          {/* Sections Links */}
          <div className="sections-links mb-8 text-center">
            <button
              onClick={() => handleSectionClick("education", educationRef)}
              className={`text-lg font-semibold mb-4 ${activeSection === "education" ? "text-sky-500" : "text-white"} hover:text-sky-500 transition duration-300`}
            >
              Education
            </button>
            <button
              onClick={() => handleSectionClick("skills", skillsRef)}
              className={`text-lg font-semibold mb-4 mx-6 ${activeSection === "skills" ? "text-sky-500" : "text-white"} hover:text-sky-500 transition duration-300`}
            >
              Skills & Expertise
            </button>
            <button
              onClick={() => handleSectionClick("career", careerRef)}
              className={`text-lg font-semibold mb-4 ${activeSection === "career" ? "text-sky-500" : "text-white"} hover:text-sky-500 transition duration-300`}
            >
              Career Goals
            </button>
          </div>

          {/* Education Content */}
          {activeSection === "education" && (
            <motion.div
              className="about-item space-y-6 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              ref={educationRef}  
            >
              <h3 className="text-2xl font-semibold text-white">Education</h3>
              <p className="text-lg text-white">
                Bachelor's Degree in Insuarance – <strong>Technical University Of Kenya </strong>
              </p>
              <p className="text-lg text-white">
                Certified Public Accountant– <strong>Royal Business School </strong>
              </p>
            </motion.div>
          )}

          {/* Skills & Expertise Content */}
          {activeSection === "skills" && (
            <motion.div
              className="about-item space-y-6 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              ref={skillsRef}  
            >
              <h3 className="text-2xl font-semibold text-white">Skills & Expertise</h3>
              <ul className="list-disc pl-6 space-y-2 text-white">
                <li>Financial Reporting & Analysis</li>
                
                <li>Tax Preparation & Compliance</li>
                <li>Accounts Payable & Receivable</li>
                <li>Accounting Software </li>
              </ul>
            </motion.div>
          )}

          {/* Career Goals Content */}
          {activeSection === "career" && (
            <motion.div
              className="career-goal w-full mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              ref={careerRef}  
            >
              <h2 className="text-3xl font-semibold text-center mb-6 text-sky-400">Career Goal</h2>
              <motion.p
                className="career-goal text-lg font-semibold text-center text-white mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                I am currently seeking new opportunities where I can leverage my
                accounting expertise to contribute to a growing company’s success. Let’s
                connect!
              </motion.p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}

export default About;
