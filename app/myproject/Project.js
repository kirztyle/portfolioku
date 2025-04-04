"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

// Data proyek
const projects = [
  {
    id: 1,
    title: "HR Dashboard",
    description:
      "Developed interactive data visualizations using Power BI to analyze a contract worker data model, providing in-depth insights into performance, turnover, and other key metrics.",
    tools: "Microsoft Power BI, Microsoft Excel, SAP",
    image: "./dashboard.png",
  },
  {
    id: 2,
    title: "Classification of Meat Freshness",
    description:
      "Developed a machine learning model using Artificial Neural Networks (ANN) to classify beef as fresh or spoiled.",
    tools:
      "Pandas, Numpy, Matplotlib, Seaborn, Plotly, Scikit-learn, TensorFlow, Keras",
    image: "./ann.png",
  },
  {
    id: 3,
    title: "E-Commerce & Website",
    description:
      "Designed and developed a fanpage website featuring artist biography, event listings, merchandise store, and music gallery. Integrated event information section with external links for ticket purchases, allowing visitors to easily access upcoming events and buy tickets.",
    tools: "C#, HTML, javascript, CSS",
    link: "Link Expired",
    image: "./website.png",
  },
];

const PreviousProjects = () => {
  const [openProjectId, setOpenProjectId] = useState(null);

  const togglePopup = (projectId) => {
    setOpenProjectId(openProjectId === projectId ? null : projectId);
  };

  const gridVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={gridVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <section id="projects" className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              My Previous Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:px-4 gap-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                  {/* Konten Proyek */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mt-2 text-justify">
                        {project.description}
                      </p>
                    </div>
                    <button
                      className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
                      onClick={() => togglePopup(project.id)}
                    >
                      View Project →
                    </button>
                  </div>
                  {/* Pop-up */}
                  {openProjectId === project.id && (
                    <motion.div
                      className="fixed px-4 inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={popupVariants}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-white p-6 rounded-lg shadow-lg max-w-screen-sm w-full">
                        <h3 className="text-xl text-justify font-bold mb-4">
                          {project.title}
                        </h3>
                        <p className="text-gray-700 text-justify">
                          {project.description}
                        </p>
                        <p className="mt-4 ">
                          <strong>Tools: </strong>
                          {project.tools}
                        </p>
                        <p>
                          <strong>{project.link}</strong>
                        </p>
                        <div className="mt-4 flex items-center justify-center shadow-lg">
                          <img src={project.image} style={{ width: "500px" }} />
                        </div>
                        <button
                          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                          onClick={() => togglePopup(null)}
                        >
                          Close
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </motion.section>
  );
};

export default PreviousProjects;
