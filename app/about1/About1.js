import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faChartColumn, faObjectUngroup, faDatabase } from "@fortawesome/free-solid-svg-icons";

const About1 = () => {
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
              <div id="services" className=" px-10 lg:px-32 pb-10">    
    <motion.div
          variants={variants}
          transition={{ duration: 0.8, ease: "easeOut" }} // Durasi lebih panjang untuk animasi yang lebih halus
        >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          What I Do.
        </h2>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 grid-rows-2 gap-4">
          <div className="flex sm:flex-col space-x-4 bg-white shadow-md rounded-lg p-10 ">
            <div className="p-4">
              <FontAwesomeIcon icon={faCode} size="2xl" />
            </div>
            <div className="">
              <h1 className="font-bold">Fullstack Web Development</h1>
              <p>Ini Deskripsi</p>
              <p>Ini Tools</p>
            </div>
          </div>
          <div className="flex sm:flex-col space-x-4 bg-white shadow-md rounded-lg p-10 ">
          <div className="p-4">
            <FontAwesomeIcon icon={faChartColumn} size="2xl" />
            </div>
            <div className="">
            <h2 className="font-bold">Data Analyst</h2>
              <p>Ini Deskripsi</p>
              <p>Ini Tools</p>

            </div>
          </div>
          <div className="flex sm:flex-col space-x-4 bg-white shadow-md rounded-lg p-10 ">
          <div className="p-4">
              <FontAwesomeIcon icon={faObjectUngroup} size="2xl"/>
            </div>
            <div className="">
            <h1 className="font-bold">UI/UX Design</h1>
              <p>Ini Deskripsi</p>
              <p>Ini Tools</p>
            </div>
          </div>
          <div className="flex sm:flex-col space-x-4 bg-white shadow-md rounded-lg p-10 ">
          <div className="p-4">
              <FontAwesomeIcon icon={faDatabase} size="2xl"/>
            </div>
            <div className="">
            <h1 className="font-bold">Database Mangement</h1>
              <p>Ini Deskripsi</p>
              <p>Ini Tools</p>

            </div>
          </div>
        </div>
        </motion.div>
        </div>
        </motion.section>
  )
}

export default About1