import React from 'react';
import { motion } from 'framer-motion';
import './Container.css';
import './Skills.css';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiTensorflow,
  SiPytorch,
  SiHtml5,
  SiCss3,
  SiSupabase,
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'Python', icon: SiPython, level: 90 },
        { name: 'JavaScript', icon: SiJavascript, level: 85 },
        { name: 'TypeScript', icon: SiTypescript, level: 80 },
        { name: 'SQL', icon: SiPostgresql, level: 85 },
      ],
    },
    {
      title: 'Web Technologies',
      icon: '🌐',
      skills: [
        { name: 'React.js', icon: SiReact, level: 90 },
        { name: 'Node.js', icon: SiNodedotjs, level: 85 },
        { name: 'HTML5', icon: SiHtml5, level: 90 },
        { name: 'CSS3', icon: SiCss3, level: 85 },
      ],
    },
    {
      title: 'Version Control',
      icon: '🔧',
      skills: [
        { name: 'Git', icon: SiGit, level: 90 },
        { name: 'GitHub', icon: SiGithub, level: 90 },
      ],
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, level: 85 },
        { name: 'MongoDB', icon: SiMongodb, level: 80 },
        { name: 'Firebase', icon: SiFirebase, level: 75 },
        { name: 'Supabase', icon: SiSupabase, level: 85 },
      ],
    },
    {
      title: 'AI/ML Frameworks',
      icon: '🤖',
      skills: [
        { name: 'TensorFlow', icon: SiTensorflow, level: 85 },
        { name: 'PyTorch', icon: SiPytorch, level: 80 },
        { name: 'Scikit-learn', icon: null, level: 80 },
        { name: 'Pandas', icon: null, level: 80 },
        { name: 'NumPy', icon: null, level: 80 },
        { name: 'Matplotlib', icon: null, level: 80 },
        { name: 'Seaborn', icon: null, level: 80 },
        { name: 'Plotly', icon: null, level: 80 },
        { name: 'SciPy', icon: null, level: 80 },
      ],
    },
    {
      title: 'AI/ML Specializations',
      icon: '🧠',
      skills: [
        { name: 'Natural Language Processing', level: 85 },
        { name: 'Computer Vision', level: 80 },
        { name: 'Predictive Modeling', level: 85 },
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          data-aos="fade-up"
        >
          <span className="section-tag">Skills & Expertise</span>
          <h2 className="section-title">Technologies I Work With</h2>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 }}
                    >
                      <div className="skill-header">
                        {IconComponent && (
                          <IconComponent className="skill-tech-icon" />
                        )}
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Scrolling Icons */}
        <div className="scrolling-icons-container">
          <div className="scrolling-icons">
            <SiPython className="scroll-icon" />
            <SiJavascript className="scroll-icon" />
            <SiReact className="scroll-icon" />
            <SiNodedotjs className="scroll-icon" />
            <SiGit className="scroll-icon" />
            <SiGithub className="scroll-icon" />
            <SiPostgresql className="scroll-icon" />
            <SiMongodb className="scroll-icon" />
            <SiTensorflow className="scroll-icon" />
            <SiPytorch className="scroll-icon" />
            {/* Duplicate for seamless loop */}
            <SiPython className="scroll-icon" />
            <SiJavascript className="scroll-icon" />
            <SiReact className="scroll-icon" />
            <SiNodedotjs className="scroll-icon" />
            <SiGit className="scroll-icon" />
            <SiGithub className="scroll-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

