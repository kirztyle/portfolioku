"use client"; // Menandakan bahwa komponen ini adalah client-side.

import Link from "next/link"; // Untuk navigasi tautan
import { motion } from "framer-motion";

// Data proyek (dapat dimodifikasi sesuai kebutuhan)
const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A fully functional e-commerce platform with user authentication and payment integration.",
    link: "https://example.com/ecommerce",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects and skills.",
    link: "https://example.com/portfolio",
  },
  {
    id: 3,
    title: "Chat Application",
    description: "Real-time chat application using WebSocket.",
    link: "https://example.com/chat-app",
  },
];

const PreviousProjects = () => {
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
        <motion.div
          variants={variants}
          transition={{ duration: 0.8, ease: "easeOut" }} // Durasi lebih panjang untuk animasi yang lebih halus
        >
      <section id="projects" className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">My Previous Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-4 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
  
                {/* Konten Proyek */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mt-2">{project.description}</p>
                  </div>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Project →
                  </Link>
                </div>
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
