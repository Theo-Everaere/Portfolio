import Data from "./Data";
import "./home.css";
import ScrollDown from "./ScrollDown";
import Social from "./Social";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <motion.div
            className="home__img"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          ></motion.div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </div>
  );
};

export default Home;
