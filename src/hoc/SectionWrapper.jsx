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
          py-20
          px-6
          sm:px-10
          lg:px-16
          xl:px-24
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