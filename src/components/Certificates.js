import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import './Container.css';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      title: 'Software Development (AI Specialization)',
      issuer: 'Power Learn Project (PLP) Africa',
      date: 'Feb 2025 - Jul 2025',
      description: 'Successfully completed a 16-week program in Software Development with a specialization in AI for Software Engineering. Intensive training covering Python, Web Technologies, Databases, and Software Engineering.',
      type: 'pdf',
      file: '/Lewi Certificate AI.pdf',
      gradient: 'gradient-1',
    },
    {
      title: 'ITCILO Hackathon Certificate',
      issuer: 'International Training Centre of the ILO',
      date: '2025',
      description: 'Awarded for developing an innovative tech solution in a competitive hackathon environment. Recognized for excellence in problem-solving and technical innovation.',
      type: 'link',
      link: 'https://credentials.itcilo.org/1fa710c1-7c7b-4069-ae66-69d6cb2187b7#acc.wlVgDz8h',
      gradient: 'gradient-2',
    },
  ];

  return (
    <section className="certificates" id="certificates">
      <div className="container">
        <motion.div
          className="section-header"
          data-aos="fade-up"
        >
          <span className="section-tag">Achievements</span>
          <h2 className="section-title">Certifications & Awards</h2>
        </motion.div>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="certificate-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className={`cert-gradient ${cert.gradient}`}>
                <FaCertificate className="cert-icon" />
              </div>
              <div className="cert-content">
                <div className="cert-header">
                  <h3>{cert.title}</h3>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-description">{cert.description}</p>
                <div className="cert-actions">
                  {cert.type === 'pdf' ? (
                    <a
                      href={cert.file}
                      download
                      className="cert-btn"
                    >
                      <FaDownload />
                      Download Certificate
                    </a>
                  ) : (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-btn"
                    >
                      <FaExternalLinkAlt />
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

