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
            <p className="text-lg text-white mt-6">Mount St Mary's Molo(2007-2012)</p>
          </div>

          {/* High School */}
          <div className="education-item space-y-4 mt-8">
            <h3 className="text-xl font-bold uppercase underline text-white">High School</h3>
            <p className="text-lg text-white">
              St. Clare Elburgon - Kenya Certificate of Secondary Education (2013-2016)
            </p>
          </div>

          {/* University */}
          <div className="education-item space-y-4 mt-8">
            <h3 className="text-xl font-bold uppercase underline text-white">University</h3>
            <p className="text-lg text-white">
              Technical University of Kenya - Bachelor of Commerce, Insurance (2017-2022)
            </p>
          </div>

          {/* Professional Certification */}
          <div className="education-item space-y-4 mt-8">
            <h3 className="text-xl font-bold uppercase underline text-white">Professional Certification</h3>
            <p className="text-lg text-white">
              Royal Business School - Certified Public Accountant Part I and II (2023 to date)
            </p>
            <p className="text-lg text-white mt-6">Google Data Analytics Professional Certificate (March 2025 to date)</p>
          </div>
        </div>

        {/* Right side: Professional Experience */}
        <div className="experience w-full lg:w-1/2 pl-0 lg:pl-8"> 
          <h2 className="text-3xl font-semibold text-center mb-6 text-sky-400">Professional Experience</h2>
          <div className="experience-container space-y-6"> 
            
            {/* Emirates Logistics - Assistant Accountant */}
            <motion.div 
              className="experience-item bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="experience-header flex items-center mb-4">
                <FaBriefcase className="experience-icon text-2xl text-sky-400 mr-4" />
                <h3 className="text-xl font-semibold text-white">Assistant Accountant</h3>
              </div>
              <p className="text-white"><FaBuilding className="icon inline mr-2 text-sky-400" /> Emirates Logistics E.A Ltd</p>
              <p className="text-white"><FaCalendarAlt className="icon inline mr-2 text-sky-400" /> June 2023 - Present</p>
              <ul className="list-disc pl-6 mt-4 text-white">
                <li>Calculating and filing statutory payments (VAT, PAYE, NHIF, NSSF, Withholding VAT).</li>
                <li>Preparing and reconciling statements for suppliers.</li>
                <li>Ensuring compliance with finance policies before payments.</li>
                <li>Assisting in monthly, quarterly, and annual financial reports.</li>
                <li>Handling bank reconciliations for both USD and KES accounts.</li>
                <li>Managing office supplies and company insurance renewals.</li>
              </ul>
            </motion.div>

            {/* Vision Afrika Sacco - Accounting Intern */}
            <motion.div 
              className="experience-item bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="experience-header flex items-center mb-4">
                <FaBriefcase className="experience-icon text-2xl text-sky-400 mr-4" />
                <h3 className="text-xl font-semibold text-white">Accounting Intern</h3>
              </div>
              <p className="text-white"><FaBuilding className="icon inline mr-2 text-sky-400" /> Vision Afrika Sacco</p>
              <p className="text-white"><FaCalendarAlt className="icon inline mr-2 text-sky-400" /> Jan 2022 - Apr 2022</p>
              <ul className="list-disc pl-6 mt-4 text-white">
                <li>Processed loan applications and determined eligibility.</li>
                <li>Audited daily transactions to ensure system accuracy.</li>
                <li>Assisted in organizing the Annual General Meeting.</li>
                <li>Provided support to the marketing department.</li>
              </ul>
            </motion.div>

            {/* Other Work Experience */}
            <motion.div 
              className="experience-item bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="experience-header flex items-center mb-4">
                <FaBriefcase className="experience-icon text-2xl text-sky-400 mr-4" />
                <h3 className="text-xl font-semibold text-white">Other Work Experience</h3>
              </div>
              <ul className="list-disc pl-6 mt-4 text-white">
                <li><strong>IEBC (August 2022) – Clerk, General Elections:</strong> Developed problem-solving skills and attention to detail.</li>
                <li><strong>KNBS Census (2019) – Enumerator:</strong> Gained experience in data collection and handling skeptical respondents.</li>
                <li><strong>Cakes.co.ke (Feb 2019 - May 2019) – Casual Worker:</strong> Learned record keeping, customer service, and time management.</li>
              </ul>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;
