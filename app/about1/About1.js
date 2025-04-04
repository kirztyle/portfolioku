import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faChartColumn,
  faObjectUngroup,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

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
            {/* Fullstack Web Development */}
            <div className="lg:flex sm:flex-col space-x-4 bg-white shadow-md rounded-2xl p-10">
              <div className="p-4">
                <FontAwesomeIcon icon={faCode} size="2xl" />
              </div>
              <div>
                <h1 className="font-bold">Fullstack Web Development</h1>
                <p className="text-justify">
                  I build scalable, high-performance web applications that
                  enhance user experience and drive business growth.
                </p>
                <p className="mt-4">
                  <strong>Tools:</strong> Next.js, Node.js, Express,
                  TailwindCSS, .NET MVC, Odoo, Power Apps, Laravel.
                </p>
                <p>
                  <strong>Experience:</strong> 3+ years of hands-on development
                </p>
              </div>
            </div>
            {/* Data Analyst */}
            <div className="lg:flex sm:flex-col space-x-4 bg-white shadow-md rounded-2xl p-10">
              <div className="p-4">
                <FontAwesomeIcon icon={faChartColumn} size="2xl" />
              </div>
              <div>
                <h2 className="font-bold">Data Analyst</h2>
                <p className="text-justify">
                  I transform complex datasets into actionable insights using
                  advanced analytics and visualization tools.
                </p>
                <p className="mt-4">
                  <strong>Tools:</strong> Python, Pandas, Tableau, Microsoft
                  Power BI, SQL Server, MySQL, MongoDB, Microsoft Excel
                </p>
                <p>
                  <strong>Experience:</strong> 2+ years of working with data
                  analytics
                </p>
              </div>
            </div>
            {/* UI/UX Design */}
            <div className="lg:flex sm:flex-col space-x-4 bg-white shadow-md rounded-2xl p-10">
              <div className="p-4">
                <FontAwesomeIcon icon={faObjectUngroup} size="2xl" />
              </div>
              <div>
                <h1 className="font-bold">UI/UX Design</h1>
                <p className="text-justify">
                  I design intuitive and user-friendly interfaces that enhance
                  user experience and meet business goals.
                </p>
                <p className="mt-4">
                  <strong>Tools:</strong> Figma, Canva
                </p>
                <p>
                  <strong>Experience:</strong> 2 years in crafting exceptional
                  UI/UX designs
                </p>
              </div>
            </div>
            {/* Database Management */}
            <div className="lg:flex sm:flex-col space-x-4 bg-white shadow-md rounded-2xl p-10">
              <div className="p-4">
                <FontAwesomeIcon icon={faDatabase} size="2xl" />
              </div>
              <div>
                <h1 className="font-bold">Database Management</h1>
                <p className="text-justify">
                  I design, optimize, and manage databases to ensure efficient
                  data storage and retrieval for applications.
                </p>
                <p className="mt-4">
                  <strong>Tools:</strong> MySQL, PostgreSQL, MongoDB
                </p>
                <p>
                  <strong>Experience:</strong> 3 years in database design and
                  optimization
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About1;
