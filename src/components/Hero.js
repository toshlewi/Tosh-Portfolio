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
              {/* Holographic Grid Background */}
              <div className="holo-grid">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="grid-line"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0.1, 0.3, 0.1],
                      scaleY: [1, 1.02, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>

              {/* Central Rotating Ring System */}
              <div className="ring-system">
                <motion.div 
                  className="tech-ring ring-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="ring-glow"></div>
                </motion.div>
                <motion.div 
                  className="tech-ring ring-2"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <div className="ring-glow"></div>
                </motion.div>
                <motion.div 
                  className="tech-ring ring-3"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                  <div className="ring-glow"></div>
                </motion.div>
              </div>

              {/* Central Core */}
              <motion.div 
                className="central-core"
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 40px rgba(0, 217, 255, 0.5)",
                    "0 0 80px rgba(124, 58, 237, 0.8)",
                    "0 0 40px rgba(0, 217, 255, 0.5)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div 
                  className="core-inner"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <FaBrain className="core-icon" />
                </motion.div>
              </motion.div>

              {/* Orbiting Tech Icons */}
              <motion.div
                className="orbit-container"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <motion.div 
                  className="orbit-item orbit-1"
                  whileHover={{ scale: 1.3 }}
                >
                  <div className="orbit-icon-wrapper">
                    <FaStethoscope className="orbit-icon" />
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="orbit-container"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <motion.div 
                  className="orbit-item orbit-2"
                  whileHover={{ scale: 1.3 }}
                >
                  <div className="orbit-icon-wrapper">
                    <FaCode className="orbit-icon" />
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="orbit-container"
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              >
                <motion.div 
                  className="orbit-item orbit-3"
                  whileHover={{ scale: 1.3 }}
                >
                  <div className="orbit-icon-wrapper">
                    <FaRobot className="orbit-icon" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Particle System */}
              <div className="particle-field">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="tech-particle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      delay: Math.random() * 3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>

              {/* Hexagon Pattern */}
              <div className="hex-pattern">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="hexagon"
                    animate={{
                      opacity: [0.1, 0.4, 0.1],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>

              {/* Data Stream */}
              <svg className="data-stream" viewBox="0 0 400 400">
                <motion.circle
                  cx="200"
                  cy="200"
                  r="120"
                  stroke="url(#streamGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="10,5"
                  animate={{ strokeDashoffset: [0, -30] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="160"
                  stroke="url(#streamGradient2)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="8,4"
                  animate={{ strokeDashoffset: [0, 24] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <defs>
                  <linearGradient id="streamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="streamGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#00d9ff" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>
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