import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faChartColumn,
  faObjectUngroup,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

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
          transition={{ duration: 0.8, ease: "easeOut" }} // Durasi lebih panjang untuk animasi yang lebih halus
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center py-7">
            About Me.
          </h2>
        </motion.div>
        <motion.div
          variants={variants}
          transition={{ duration: 0.8, ease: "easeOut" }} // Durasi lebih panjang untuk animasi yang lebih halus
        >
          <h1 class="text-justify lg:text-xl sm:text-sm">
            Hi, I'm Muhammad Rafii, a{" "}
            <span class="font-bold">Full-Stack Developer & Data Analyst</span>{" "}
            with expertise in
            <span class="font-bold">{" "}
              enterprise systems, process automation, and data-driven
              decision-making.
            </span> {" "}
            My journey started with building a{" "}
            <span class="font-bold">CRUD system</span> and developing an {" "}
            <span class="font-bold">e-commerce website</span> for campus
            research. During my internship, I expanded into
            <span class="font-bold">Laravel</span> and{" "}
            <span class="font-bold">Angular</span>, and now I focus on mastering
            <span class="font-bold">{" "}React, Next.js, and Node.js.</span>
            Additionally, I have experience in{" "}
            <span class="font-bold">
              PowerApps, SharePoint, and Power BI
            </span>{" "}
            to develop scalable digital solutions that bridge{" "}
            <span class="font-bold">HR, finance, and IT requirements.</span>
          </h1>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
