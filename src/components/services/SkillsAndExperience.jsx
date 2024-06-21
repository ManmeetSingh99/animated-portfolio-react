import React, { useRef } from "react";
import "./skillsAndExperience.scss";
import { motion } from "framer-motion";
import Draggable from "react-draggable";

const SkillsAndExperience = () => {
  const skills = [
    { id: 1, name: "HTML", imageSrc: "/html.png" },
    { id: 2, name: "CSS", imageSrc: "/css.png" },
    { id: 3, name: "JavaScript", imageSrc: "/javascript.png" },
    { id: 4, name: "React", imageSrc: "/react.png" },
    { id: 5, name: "C#", imageSrc: "/csharp.png" },
    { id: 6, name: "Vue.js", imageSrc: "/vue.png" },
    { id: 7, name: "Github", imageSrc: "/github.png" },
    { id: 8, name: "Java", imageSrc: "/java.png" },
    { id: 9, name: "SQL", imageSrc: "/sql.png" },
    { id: 10, name: "Figma", imageSrc: "/figma.png" },
  ];

  const experience = [
    {
      id: 1,
      company: "Interbiz Consulting Pvt. Ltd.",
      position: "Software Engineer - Trainee",
      duration: "15 April, 2024 - 15 June, 2024",
      description: [
        "Gained extensive training and practical experience in key technologies including C#, MySQL, and LINQ.",
        "Actively participated in code reviews, providing and receiving constructive feedback to improve code quality.",
        "Developed a console application for a student management system.",
        "Designed and implemented a database for managing member details such as address, contact information, bank accounts, educational background, and employment history.",
      ],
    },
    {
      id: 2,
      company: "LetsGrowMore",
      position: "Front-End Development Intern",
      duration: "1 Oct, 2021 - 1 Nov, 2021",
      description: [
        "Created a responsive single-page portfolio website to showcase personal projects, skills, and experiences.",
        "Developed reusable React components for efficient code management.",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const generateRandomPosition = () => {
    const x = Math.floor(Math.random() * 90); // percentage of width
    const y = Math.floor(Math.random() * 90); // percentage of height
    return { x, y };
  };

  return (
    <motion.div
      className="skillsAndExperience"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="skills">
        <h2>Technologies</h2>
        <div className="skills-container">
          {skills.map((skill) => {
            const { x, y } = generateRandomPosition();
            const nodeRef = useRef(null);
            return (
              <Draggable key={skill.id} nodeRef={nodeRef}>
                <div
                  ref={nodeRef}
                  className="skill"
                  style={{ top: `${y}%`, left: `${x}%` }}
                >
                  <img src={skill.imageSrc} alt={skill.name} />
                  <p>{skill.name}</p>
                </div>
              </Draggable>
            );
          })}
        </div>
      </div>
      <div className="experience">
        <h2>Experience</h2>
        {experience.map((exp) => (
          <motion.div
            key={exp.id}
            className="job"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{exp.position}</h3>
            <h4>{exp.company}</h4>
            <p>{exp.duration}</p>
            <ul>
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsAndExperience;
