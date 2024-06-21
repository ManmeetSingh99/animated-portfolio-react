import { useRef } from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <h2>Hi, I'm Manmeet Singh</h2>
        <p>
          A Front-end Developer skilled in creating dynamic and responsive
          applications using React.js and Vue.js. Passionate about building
          seamless user experiences and efficient code. Currently enhancing my
          skill set by exploring backend development to become a more versatile
          developer."
        </p>
        <div className="rolesContainer">
          <motion.div className="role" variants={variants}>
            <h3>Front End Developer</h3>
            <p>
              I'm a Front-end Developer skilled in creating dynamic and
              responsive applications using React.js and Vue.js.
            </p>
          </motion.div>
          <motion.div className="role" variants={variants}>
            <h3>Back End Developer</h3>
            <p>
              Enhancing my skill set by exploring backend development to become
              a more versatile developer.
            </p>
          </motion.div>
          <motion.div className="role" variants={variants}>
            <h3>UI Designer</h3>
            <p>
              I have designed also landing pages and have created design for
              websites as well using Figma.
            </p>
          </motion.div>
        </div>
        <button>Download Resume</button>
      </motion.div>
      <motion.div className="photoContainer" variants={variants}>
        <img src="/aboutImage.png" alt="Your Name" />
      </motion.div>
    </motion.div>
  );
};

export default About;
