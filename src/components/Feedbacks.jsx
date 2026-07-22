import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { github } from "../assets";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.7)}
      whileHover={{
        y: -10,
      }}
      className="group"
    >
      <div
        className="
        h-full
        rounded-[28px]
        bg-gradient-to-br
        from-cyan-400
        via-violet-500
        to-pink-500
        p-[1px]
        transition-all
        duration-500
        hover:shadow-[0_0_35px_rgba(99,102,241,.3)]
      "
      >
        <div
          className="
          flex
          h-full
          flex-col
          rounded-[28px]
          bg-[#151030]/95
          backdrop-blur-xl
          p-8
        "
        >
          {/* Quote */}

          <div
            className="
            mb-6
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-cyan-500/10
            text-4xl
            font-black
            text-cyan-300
          "
          >
            "
          </div>

          {/* Testimonial */}

          <p
            className="
            flex-1
            leading-8
            text-[16px]
            text-[#d1d5db]
          "
          >
            {testimonial}
          </p>

          {/* Divider */}

          <div className="my-7 h-px bg-white/10" />

          {/* User */}

          <div className="flex items-center gap-4">
              <img
                src={github}
                alt="GitHub"
                className="
                  h-10
                  w-10
                  rounded-full
                  border-2
                  border-cyan-400
                  object-contain
                  bg-white/5
                  p-1
                "
              />

            <div>
              <h4 className="text-lg font-semibold text-white">
                {name}
              </h4>

              <p className="text-sm text-[#aaa6c3]">
                {designation}
              </p>

              <p className="text-sm text-cyan-300">
                {company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Testimonials
        </p>

        <h2 className={styles.sectionHeadText}>
          What Clients Say.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="
          mt-8
          max-w-3xl
          text-lg
          leading-9
          text-[#aaa6c3]
        "
      >
        Feedback from clients, collaborators and teams I've worked with.
        Building software isn't only about writing code—it's also about
        communication, reliability and delivering solutions that create value.
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
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={`${testimonial.name}-${index}`}
            index={index}
            {...testimonial}
          />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");