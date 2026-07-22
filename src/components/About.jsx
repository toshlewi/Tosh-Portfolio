import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      perspective={1200}
      transitionSpeed={500}
      scale={1.04}
      glareEnable={false}
      className="w-full"
    >
      <motion.div
        variants={fadeIn("up", "spring", index * 0.15, 0.75)}
        whileHover={{ y: -12 }}
        className="group h-full rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 p-[1px]"
      >
        <div
          className="
            h-full
            min-h-[290px]
            rounded-3xl
            bg-[#151030]/95
            backdrop-blur-lg
            px-8
            py-10
            flex
            flex-col
            justify-center
            items-center
            text-center
            transition-all
            duration-300
            group-hover:bg-[#1d163d]
          "
        >
          <div
            className="
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              bg-white/5
              border
              border-white/10
              mb-8
            "
          >
            <img
              src={icon}
              alt={title}
              className="h-16 w-16 object-contain"
            />
          </div>

          <h3 className="text-xl font-bold text-white">
            {title}
          </h3>

          <div className="mt-5 h-[3px] w-12 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-20" />
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>

        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.15, 1)}
        className="
          mt-8
          max-w-4xl
          text-lg
          leading-9
          text-[#aaa6c3]
        "
      >
        I'm <span className="font-semibold text-white">Lewis Gitonga</span>, a
        Software Developer, AI Engineer and Medical Student at the University
        of Nairobi. I enjoy designing modern digital experiences, building
        intelligent applications, and solving real-world problems through
        Artificial Intelligence, Machine Learning and Full-Stack Web
        Development.

        <br />
        <br />

        My passion lies in combining technology with healthcare to create
        impactful solutions while continually improving my engineering skills.
      </motion.p>

      <motion.div
        variants={fadeIn("up", "", 0.3, 1)}
        className="
          mt-20
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
        "
      >
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");