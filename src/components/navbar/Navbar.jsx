import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <div className="portfolio-text">
          <a href="#Homepage">
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Portfolio
            </motion.span>
          </a>
        </div>
        <div className="social">
          <a href="https://linkedin.com/in/manmeetsingh1699">
            <img src="/linkedinIcon.png" alt="linkedin" />
          </a>
          <a href="https://www.instagram.com/mannnu1699/">
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <a id="githubImg" href="https://github.com/ManmeetSingh99">
            <img src="/github.png" alt="Github" />
          </a>
          <a href="#">
            <img src="/facebook.png" alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
