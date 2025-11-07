import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaFlask, FaStethoscope } from 'react-icons/fa';
import './Container.css';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      type: 'education',
      icon: FaGraduationCap,
      title: 'Bachelor of Medicine and Bachelor of Surgery (MBChB)',
      organization: 'University of Nairobi',
      date: 'Expected 2028',
      description: 'Pursuing comprehensive medical education with focus on clinical skills and medical research.',
      highlights: [
        'Conducted research on hemophilia',
        'Completed surgical training electives',
        'Presented findings at university research symposium',
      ],
    },
    {
      type: 'education',
      icon: FaGraduationCap,
      title: 'Software Development (AI Specialization)',
      organization: 'Power Learn Project (PLP) Africa',
      date: 'Feb 2025 - Jul 2025',
      description: 'Intensive 16-week program covering Python, Web Technologies, Databases, and Software Engineering, with specialization in AI for Software Engineering.',
      highlights: [
        'Certified AI/ML Developer',
        'Full-stack web development',
        'Machine learning and deep learning',
      ],
    },
    {
      type: 'experience',
      icon: FaFlask,
      title: 'Medical Research - Hemophilia',
      organization: 'University of Nairobi',
      date: '2025',
      description: 'Conducted comprehensive literature review on current hemophilia treatments and analyzed patient data to identify patterns in treatment outcomes.',
      highlights: [
        'Literature review and data analysis',
        'Patient outcome pattern identification',
        'Research presentation',
      ],
    },
    {
      type: 'experience',
      icon: FaStethoscope,
      title: 'Clinical Electives - Surgical Training',
      organization: 'University of Nairobi',
      date: '2024-2025',
      description: 'Completed rotations in general surgery, orthopedics, and emergency medicine with hands-on clinical experience.',
      highlights: [
        'Surgical procedure assistance',
        'Patient management planning',
        'Post-operative care development',
      ],
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <motion.div
          className="section-header"
          data-aos="fade-up"
        >
          <span className="section-tag">Journey</span>
          <h2 className="section-title">Education & Experience</h2>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <motion.div
                key={`${exp.title}-${index}`}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                data-aos-delay={index * 100}
              >
                <div className="timeline-marker">
                  <div className="marker-icon">
                    <IconComponent />
                  </div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{exp.title}</h3>
                    <span className="timeline-date">{exp.date}</span>
                  </div>
                  <p className="timeline-organization">{exp.organization}</p>
                  <p className="timeline-description">{exp.description}</p>
                  <ul className="timeline-highlights">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

