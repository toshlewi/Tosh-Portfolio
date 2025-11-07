import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCode, FaBrain, FaStethoscope, FaRobot } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        
        {/* Animated Background Elements */}
        <div className="floating-shapes">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-shape"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="greeting" variants={itemVariants}>
              <span className="greeting-text">Hello, I'm</span>
              <div className="greeting-underline"></div>
            </motion.div>

            <motion.h1 className="hero-name" variants={itemVariants}>
              <span className="name-line">Lewis Gitonga</span>
              <span className="name-line accent">Muriuki</span>
            </motion.h1>

            <motion.div className="hero-title" variants={itemVariants}>
              <div className="title-container">
                <span className="title-text">Medical Student &</span>
                <span className="title-text gradient-text">AI Developer</span>
              </div>
              <div className="title-underline"></div>
            </motion.div>

            <motion.p className="hero-description" variants={itemVariants}>
              Bridging <span className="highlight">medical science</span> with{' '}
              <span className="highlight">cutting-edge AI</span> to create innovative{' '}
              <span className="highlight">healthcare solutions</span>
            </motion.p>

            <motion.div className="expertise-tags" variants={itemVariants}>
              <motion.span 
                className="expertise-tag"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaBrain className="tag-icon" />
                Machine Learning
              </motion.span>
              <motion.span 
                className="expertise-tag"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaStethoscope className="tag-icon" />
                Medical Research
              </motion.span>
              <motion.span 
                className="expertise-tag"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaCode className="tag-icon" />
                Full-Stack Dev
              </motion.span>
              <motion.span 
                className="expertise-tag"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaRobot className="tag-icon" />
                AI Development
              </motion.span>
            </motion.div>

            <motion.div className="hero-buttons" variants={itemVariants}>
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 217, 255, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get In Touch</span>
                <div className="btn-sparkle"></div>
              </motion.a>
              <motion.a
                href="#projects"
                className="btn btn-secondary"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(0, 217, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>

            <motion.div className="hero-social" variants={itemVariants}>
              <motion.a
                href="https://github.com/toshlewi"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  backgroundColor: "var(--primary)",
                  color: "var(--bg-dark)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/lewis-gitonga-12783b34a/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  backgroundColor: "var(--primary)",
                  color: "var(--bg-dark)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:adelewigitz@gmail.com"
                className="social-link"
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  backgroundColor: "var(--primary)",
                  color: "var(--bg-dark)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope />
              </motion.a>
              <motion.a
                href="tel:0711527211"
                className="social-link"
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  backgroundColor: "var(--primary)",
                  color: "var(--bg-dark)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaPhone />
              </motion.a>
            </motion.div>
          </motion.div>

          <div className="hero-visual">
            <div className="medtech-animation">
              {/* Main Animation Container */}
              <div className="animation-scene">
                
                {/* Central DNA Helix */}
                <div className="dna-helix">
                  {[...Array(30)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="dna-node"
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                  <div className="dna-strand left-strand"></div>
                  <div className="dna-strand right-strand"></div>
                </div>

                {/* Rotating Tech Orbs */}
                <motion.div 
                  className="tech-orb ai-orb"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <div className="orb-content">
                    <FaBrain className="orb-icon" />
                    <span>AI/ML</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="tech-orb med-orb"
                  animate={{
                    rotate: -360,
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <div className="orb-content">
                    <FaStethoscope className="orb-icon" />
                    <span>Medicine</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="tech-orb dev-orb"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <div className="orb-content">
                    <FaCode className="orb-icon" />
                    <span>Dev</span>
                  </div>
                </motion.div>

                {/* Floating Data Points */}
                <div className="data-points">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="data-point"
                      animate={{
                        y: [0, -40, 0],
                        x: [0, Math.random() * 30 - 15, 0],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                {/* Connection Lines */}
                <svg className="connection-lines" viewBox="0 0 400 400">
                  <motion.path
                    className="connection-line"
                    d="M200,100 Q250,150 200,200 Q150,250 200,300"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    animate={{
                      strokeDashoffset: [0, 20],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00d9ff" />
                      <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Stats Display */}
              <div className="stats-overlay">
                <motion.div 
                  className="stat-item"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Medical Passion</div>
                </motion.div>
                <motion.div 
                  className="stat-item"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="stat-number">AI</div>
                  <div className="stat-label">Innovation</div>
                </motion.div>
                <motion.div 
                  className="stat-item"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  <div className="stat-number">Code</div>
                  <div className="stat-label">Expertise</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span>Explore My Journey</span>
          <div className="scroll-arrow"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;