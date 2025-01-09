import React from "react";
import Button from "../button/Button";
import SendSVG from "../../assets/send.svg";
import { motion } from "framer-motion";

const Data = () => {
  return (
    <div className="home__data">
      <motion.h1
        className="home__title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        Bienvenue
      </motion.h1>

      <motion.h3
        className="home__subtitle"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        Développeur Fullstack
      </motion.h3>

      <motion.p
        className="home__description"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        De l'idée au digital
        <br />
        transformer la créativité en réalité numérique
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <Button
          href="#contact"
          title="Me contacter"
          svg={SendSVG}
          className="button button--flex"
        />
      </motion.div>
    </div>
  );
};

export default Data;
