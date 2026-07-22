import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.15, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="
          relative
          w-full
          py-12
          px-6
          sm:px-10
          sm:py-14
          lg:px-16
          lg:py-16
          xl:px-24
          xl:py-18
        "
      >
        <div
          id={idName}
          className="
            mx-auto
            w-full
            max-w-7xl
          "
        >
          <span className="hash-span" />

          <Component />
        </div>
      </motion.section>
    );
  };

export default SectionWrapper;