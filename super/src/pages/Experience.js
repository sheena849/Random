import React from "react";
import { FaBriefcase, FaBuilding, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Experience() {
  return (
    <motion.section 
      className="experience py-12 px-6 bg-gray-800 text-white pt-32"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
        
        {/* Left side: Education */}
        <div className="education w-full lg:w-1/2 pr-0 lg:pr-8">
          <h2 className="text-3xl font-semibold text-center mb-6 text-sky-400">Education</h2>
          
          {/* Primary Education */}
          <div className="education-item space-y-4">
            <h3 className="text-xl font-bold uppercase underline text-white">Primary Education</h3>
            <p className="text-lg text-white">Lizar Academy (2000-2006)</p>
            <p className="text-lg text-white mt-6">St. Mary's (2007-2012)</p> {/* Added mt-6 for spacing */}
          </div>

          {/* High School */}
          <div className="education-item space-y-4 mt-8"> {/* Increased spacing */}
            <h3 className="text-xl font-bold uppercase underline text-white">High School</h3>
            <p className="text-lg text-white">
              St. Clare Elburgon - Kenya Certificate of Secondary Education (2013-2016)
            </p>
          </div>

          {/* University */}
          <div className="education-item space-y-4 mt-8"> {/* Increased spacing */}
            <h3 className="text-xl font-bold uppercase underline text-white">University</h3>
            <p className="text-lg text-white">
              Technical University of Kenya - Bachelor of Commerce, Insurance (2017-2022)
            </p>
          </div>

          {/* Professional Certification */}
          <div className="education-item space-y-4 mt-8"> {/* Increased spacing */}
            <h3 className="text-xl font-bold uppercase underline text-white">Professional Certification</h3>
            <p className="text-lg text-white">
              Royal Business School - Certified Public Accountant Part I and II (2023 to date)
            </p>
            <p className="text-lg text-white mt-6">Google Data Analytics Professional Certificate (March 2025 to date)</p> {/* Added mt-6 for spacing */}
          </div>
        </div>

        {/* Right side: Professional Experience */}
        <div className="experience w-full lg:w-1/2 pl-0 lg:pl-8"> 
          <h2 className="text-3xl font-semibold text-center mb-6 text-sky-400">Professional Experience</h2>
          <div className="experience-container space-y-6"> 
            
            {/* Experience item 1 */}
            <motion.div 
              className="experience-item bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="experience-header flex items-center mb-4">
                <FaBriefcase className="experience-icon text-2xl text-sky-400 mr-4" />
                <h3 className="text-xl font-semibold text-white">Assistant Accountant</h3>
              </div>
              <p className="text-white"><FaBuilding className="icon inline mr-2 text-sky-400" /> <strong>Company Name</strong></p>
              <p className="text-white"><FaCalendarAlt className="icon inline mr-2 text-sky-400" /> Jan 2020 - Present</p>
              <ul className="list-disc pl-6 mt-4 text-white">
                <li>Managed financial records and reconciled accounts.</li>
                <li>Prepared detailed financial statements and reports.</li>
                <li>Ensured compliance with industry accounting regulations.</li>
                <li>Assisted in budgeting and forecasting strategies.</li>
              </ul>
            </motion.div>

            {/* Experience item 2 */}
            <motion.div 
              className="experience-item bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="experience-header flex items-center mb-4">
                <FaBriefcase className="experience-icon text-2xl text-sky-400 mr-4" />
                <h3 className="text-xl font-semibold text-white">Accounting Intern</h3>
              </div>
              <p className="text-white"><FaBuilding className="icon inline mr-2 text-sky-400" /> <strong>Company Name</strong></p>
              <p className="text-white"><FaCalendarAlt className="icon inline mr-2 text-sky-400" /> Jun 2018 - Dec 2019</p>
              <ul className="list-disc pl-6 mt-4 text-white">
                <li>Supported finance team with daily accounting tasks.</li>
                <li>Assisted in bank reconciliations and expense tracking.</li>
                <li>Helped prepare reports for audits and compliance checks.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;
