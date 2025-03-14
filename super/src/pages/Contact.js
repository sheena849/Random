import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      className="contact py-12 px-6 bg-gray-800 text-white mt-24 mb-8 lg:mt-28 lg:mb-12" // Increased top margin to mt-24 or mt-28
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
        {/* Left side: Contact Info */}
        <div className="contact-details w-full lg:w-1/2 mr-8">
          <h2 className="contact-title text-3xl font-semibold text-center mb-6 text-sky-400">Get in Touch</h2>
          <p className="contact-description text-lg text-center mb-8 text-white">
            Looking for an experienced accountant? Let’s connect and discuss how I can add value to your business!
          </p>

          {/* Contact Items */}
          <motion.div
            className="contact-info space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              className="contact-item flex items-center space-x-4"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <FaEnvelope className="contact-icon text-2xl text-sky-400" />
              <a href="mailto:ivy@example.com" className="text-lg text-white hover:underline">mugoivy06@gmail.com</a>
            </motion.div>

            <motion.div
              className="contact-item flex items-center space-x-4"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <FaPhone className="contact-icon text-2xl text-sky-400" />
              <a href="tel:+1234567890" className="text-lg text-white hover:underline">+254701629732</a>
            </motion.div>

            <motion.div
              className="contact-item flex items-center space-x-4"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <FaMapMarkerAlt className="contact-icon text-2xl text-sky-400" />
              <p className="text-lg text-white">Nairobi, Kenya</p>
            </motion.div>

            <motion.div
              className="contact-item flex items-center space-x-4"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <FaLinkedin className="contact-icon text-2xl text-sky-400" />
              <a href="https://linkedin.com/in/ivywanjirumugo" target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:underline">
                Connect on LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Right side: Contact Form */}
        <div className="contact-form w-full lg:w-1/2">
          <motion.div
            className="contact-form mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-center mb-6 text-sky-400">Send a Message</h3>
            <form>
              <motion.input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
                whileFocus={{ scale: 1.05 }}
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
                whileFocus={{ scale: 1.05 }}
              />
              <motion.textarea
                placeholder="Your Message"
                rows="4"
                required
                className="w-full p-3 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
                whileFocus={{ scale: 1.05 }}
              ></motion.textarea>
              <motion.button
                type="submit"
                className="w-full bg-sky-400 text-white py-3 rounded-lg hover:bg-sky-500 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;


