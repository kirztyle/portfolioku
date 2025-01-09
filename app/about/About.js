import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faChartColumn, faObjectUngroup, faDatabase } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      <div id="about" className=" px-10 lg:px-32 pb-10">
        <motion.div
          variants={variants}
          transition={{duration: 0.8, ease: "easeOut" }} // Durasi lebih panjang untuk animasi yang lebih halus
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center py-7">
            About Me.
          </h2>
        </motion.div>
        <motion.div
          variants={variants}
          transition={{duration: 0.8, ease: "easeOut" }} // Durasi lebih panjang untuk animasi yang lebih halus
        >
          <h1 className="text-justify lg:text-xl sm:text-sm">
            Hi, I'm Muhammad Rafii, a web developer with a strong passion for
            creating dynamic and scalable web applications. My journey started
            with building a simple CRUD system for a university project,
            followed by developing an e-commerce website for campus research
            using <span className="font-bold">HTML, CSS</span>, and{" "}
            <span className="font-bold">JavaScript</span>. During my internship,
            I expanded my skill set by working with frameworks like Laravel and
            Angular. Currently, I’m focusing on mastering modern technologies
            such as {""}
            <span className="font-bold">
              React, Node.js, Next.js, and Express.js
            </span>
            , always striving to grow and deliver high-quality solutions. <br />
            <br />
            Beyond web development, I have experience in{" "}
            <span className="font-bold"></span>machine learning, specifically
            for detecting the freshness of meat using{" "}
            <span className="font-bold">NLP </span>and{" "}
            <span className="font-bold">various Python libraries.</span>{" "}
            Additionally, I’ve worked as a <span className="font-bold"></span>
            Data Analyst in HR and gained graphic design experience during my
            second internship at{" "}
            <span className="font-bold">PT Pertamina Hulu Energi.</span>
          </h1>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
