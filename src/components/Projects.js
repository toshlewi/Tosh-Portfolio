import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Container.css';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Fundi-Client Connection Platform',
      description: 'A full-stack platform connecting service providers (fundis) with clients, similar to Bolt\'s business model but for professional services.',
      tech: ['React.js', 'Node.js', 'Supabase', 'Mapbox API'],
      features: [
        'Real-time location tracking',
        'Service matching algorithms',
        'Secure payment processing',
        'Rating system',
      ],
      gradient: 'gradient-1',
    },
    {
      title: 'AI-Integrated Hospital Management System',
      description: 'Comprehensive hospital management system with AI-powered features for patient care optimization and administrative efficiency.',
      tech: ['Python', 'TensorFlow', 'React.js', 'MongoDB'],
      features: [
        'Patient flow prediction models',
        'Diagnostic suggestion system',
        'Resource allocation optimization',
        'Patient history analysis',
      ],
      gradient: 'gradient-2',
    },
    {
      title: 'Foul Language Detection AI',
      description: 'Machine learning system that detects and filters inappropriate language in real-time using natural language processing techniques.',
      tech: ['Python', 'NLP', 'Transformers', 'Flask'],
      features: [
        'Custom NLP model training',
        'Context-aware analysis',
        'Reduced false positives',
        'API deployment',
      ],
      gradient: 'gradient-3',
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          data-aos="fade-up"
        >
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
            >
              <div className={`project-gradient ${project.gradient}`}></div>
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <motion.div
                    className="project-link"
                    whileHover={{ scale: 1.2, rotate: 45 }}
                  >
                    <FaExternalLinkAlt />
                  </motion.div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-features">
                  {project.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

