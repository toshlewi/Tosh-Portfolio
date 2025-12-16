import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import './Container.css';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          data-aos="fade-up"
        >
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Ready to collaborate on innovative projects?
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            data-aos="fade-right"
          >
            <div className="contact-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <a href="mailto:adelewigitz@gmail.com">adelewigitz@gmail.com</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <a href="tel:0711527211">0711527211</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <span>Nairobi, Kenya</span>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaGithub />
              </div>
              <div className="contact-details">
                <h4>GitHub</h4>
                <a href="https://github.com/toshlewi" target="_blank" rel="noopener noreferrer">
                  github.com/toshlewi
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaLinkedin />
              </div>
              <div className="contact-details">
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/lewis-gitonga-12783b34a/" target="_blank" rel="noopener noreferrer">
                  Lewis Gitonga Muriuki
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="cv-download-section"
            data-aos="fade-left"
          >
            <div className="cv-card">
              <div className="cv-icon">
                <FaDownload />
              </div>
              <h3>Download My CV</h3>
              <p>
                Get a comprehensive PDF version of my CV with detailed experience, 
                qualifications, and achievements.
              </p>
              <a
                href="/Lewis-Gitonga-Muriuki-CV.html"
                download
                className="cv-download-btn"
              >
                <FaDownload />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="social-links-section"
          data-aos="fade-up"
        >
          <h3>Connect on Social Media</h3>
          <div className="social-links">
            <motion.a
              href="https://github.com/toshlewi"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/lewis-gitonga-12783b34a/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:adelewigitz@gmail.com"
              className="social-link"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

