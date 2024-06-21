import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Portfolio Website",
    img: "/portfolio-latest.png",
    desc: "A sleek and dynamic platform showcasing my skills and projects. The application highlights my expertise as a front-end developer, featuring applications built with React.js. It includes detailed sections for my professional experience, projects, and skills, along with an interactive UI for an engaging user.",
    url: "https://react-portfolio-qh1f.vercel.app/",
  },
  {
    id: 2,
    title: "Income Tracker",
    img: "/incometrack.png",
    desc: "A convenient application for managing and tracking your income. Users can add income entries with a detailed description, amount, and date.Additionally, users can delete entries as needed, maintaining an up-to-date and clutter-free tracker.",
    url: "https://vue-income-tracker-lyart.vercel.app/",
  },
  {
    id: 3,
    title: "Weather Application",
    img: "/weather.png",
    desc: "A comprehensive and user-friendly application that provides real-time weather updates. Users can view current weather conditions, including temperature, humidity, and wind speed, for their selected location. The app also offers detailed forecasts for the upcoming days, helping users plan their activities accordingly.",
    url: "https://manmeetsingh99.github.io/WeatherWebsiteReact/",
  },
  {
    id: 4,
    title: "Portfolio Website",
    img: "/portfolio.png",
    desc: "A sleek and dynamic platform showcasing my skills and projects. The application highlights my expertise as a front-end developer, featuring applications built with React.js. It includes detailed sections for my professional experience, projects, and skills, along with an interactive UI for an engaging user experience.",
    url: "",
  },
  {
    id: 5,
    title: "Keeper Application",
    img: "/keeper.png",
    desc: "A simple and intuitive note-taking application that allows users to easily add and manage notes. Users can create notes with titles and detailed content, ensuring all important information is organized and readily accessible. The app features a clean and user-friendly interface, making it easy to capture thoughts, to-dos, and ideas on the go.",
    url: "",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  console.log(item);
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.url}>See Demo</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
