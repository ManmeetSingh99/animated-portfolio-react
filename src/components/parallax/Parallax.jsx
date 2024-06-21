import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const getBackground = () => {
    switch (type) {
      case "services":
        return "linear-gradient(180deg, #111132, #0c0c1d)";
      case "about":
        return "linear-gradient(180deg, #111132, #3b3b5b)";
      default:
        return "linear-gradient(180deg, #111132, #505064)";
    }
  };

  const getText = () => {
    switch (type) {
      case "services":
        return "Experience";
      case "about":
        return "About me";
      default:
        return "Projects";
    }
  };

  const getImage = () => {
    switch (type) {
      case "services":
        return "/planets.png";
      case "about":
        return "/about.png";
      default:
        return "/sun.png";
    }
  };

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: getBackground(),
      }}
    >
      <motion.h1 style={{ y: yText }}>{getText()}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${getImage()})`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
