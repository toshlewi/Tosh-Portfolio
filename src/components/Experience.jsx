import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#151030",
        color: "#fff",
        borderRadius: "18px",
        boxShadow: "0 12px 40px rgba(0,0,0,.25)",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #232631",
      }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
      }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="h-[65%] w-[65%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-2xl font-bold text-white">
          {experience.title}
        </h3>

        <p className="mt-1 text-base font-medium text-[#aaa6c3]">
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-6 ml-5 list-disc space-y-3">
        {experience.points.map((point, index) => (
          <li
            key={index}
            className="text-[15px] leading-7 tracking-wide text-[#d1d5db]"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My Journey
        </p>

        <h2 className={styles.sectionHeadText}>
          Experience.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="
          mt-6
          max-w-3xl
          text-[17px]
          leading-8
          text-secondary
        "
      >
        My experience spans software engineering, artificial intelligence,
        healthcare technology and modern web development. I enjoy solving
        real-world problems while creating intuitive digital experiences.
      </motion.p>

      <motion.div
        variants={fadeIn("up", "", 0.2, 1)}
        className="mt-20"
      >
        <VerticalTimeline
          lineColor="#312e81"
          animate={true}
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");