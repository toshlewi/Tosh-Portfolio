import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="h-full"
    >
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        perspective={1200}
        transitionSpeed={600}
        scale={1.03}
        glareEnable={false}
        className="h-full"
      >
        <div
          className="
          group
          h-full
          rounded-[28px]
          bg-gradient-to-br
          from-cyan-400
          via-violet-500
          to-pink-500
          p-[1px]
          transition-all
          duration-500
          hover:shadow-[0_0_40px_rgba(99,102,241,.35)]
        "
        >
          <div
            className="
            flex
            h-full
            flex-col
            overflow-hidden
            rounded-[28px]
            bg-[#151030]/95
            backdrop-blur-xl
          "
          >
            <div className="relative overflow-hidden">
              <img
                src={image}
                alt={name}
                className="
                h-60
                w-full
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
              "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <button
                onClick={() => window.open(source_code_link, "_blank")}
                className="
                absolute
                right-5
                top-5
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-black/70
                backdrop-blur-md
                transition-all
                duration-300
                hover:scale-110
                hover:bg-violet-600
              "
              >
                <img
                  src={github}
                  alt="github"
                  className="h-6 w-6"
                />
              </button>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-2xl font-bold text-white">
                {name}
              </h3>

              <p className="mt-4 flex-1 leading-7 text-[#aaa6c3]">
                {description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-3
                    py-1
                    text-sm
                    text-cyan-300
                    backdrop-blur-md
                  "
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Portfolio
        </p>

        <h2 className={styles.sectionHeadText}>
          Featured Projects.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="
          mt-8
          max-w-4xl
          text-lg
          leading-9
          text-[#aaa6c3]
        "
      >
        Here are some of the projects I've built, ranging from AI-powered
        applications to full-stack web platforms. Each project demonstrates my
        experience in building scalable, responsive, and user-focused software
        using modern technologies.
      </motion.p>

      <motion.div
        variants={fadeIn("up", "", 0.25, 1)}
        className="
          mt-20
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
        "
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            index={index}
            {...project}
          />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "work");