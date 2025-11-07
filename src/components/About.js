import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import './Container.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <motion.div
          className="section-header"
          data-aos="fade-up"
        >
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Medical Student & Tech Innovator</h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-image"
            data-aos="fade-right"
          >
            <div className="image-wrapper">
              <img src="/Tosh.jpg" alt="Lewis Gitonga Muriuki" />
              <div className="image-glow"></div>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            data-aos="fade-left"
          >
            <p className="about-intro">
              A dedicated medical student at the <strong>University of Nairobi</strong> with a strong passion for technology, specializing in <strong>Artificial Intelligence</strong>, <strong>Machine Learning</strong>, and <strong>Full-Stack Web Development</strong>.
            </p>

            <p>
              Recently completed intensive training at <strong>Power Learn Project Africa</strong>, becoming a <strong>certified AI/ML developer</strong>. Combines medical expertise with technical skills to develop innovative healthcare solutions, demonstrated through <strong>award-winning hackathon projects</strong>.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎓</div>
                <div>
                  <h4>Medical Education</h4>
                  <p>MBChB at University of Nairobi (Expected 2028)</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">💻</div>
                <div>
                  <h4>Tech Expertise</h4>
                  <p>Certified AI/ML Developer from PLP Africa</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🏆</div>
                <div>
                  <h4>Achievements</h4>
                  <p>ITCILO Hackathon Certificate </p>
                </div>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Major Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2</div>
                <div className="stat-label">Certifications</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Passion</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

