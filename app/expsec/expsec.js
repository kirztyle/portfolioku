"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const workExperience = [
  {
    title: "Husky CNOOC Madura Limited",
    position: "Human Resource General Affairs & Center of Expertise",
    period: "February 2025 - Present",
    roles: [
      "Knowledge Management System Developer",
      "Dashboard Developer (Power BI)",
      "Process Automation",
      "HR Data Analyst",
      "PowerApps & SharePoint Engineer",
    ],
  },
  {
    title: "PT. Pertamina Hulu Energi",
    position: "Human Capital Information System",
    period: "Nov 2023 – Oct 2024",
    roles: [
      "Dashboard Developer (Contract Workforce)",
      "QA Tester (Internal Apps)",
      "Excel Macro Automation",
      "Workflow Designer (Visio)",
      "SAP HR Data Manager",
    ],
  },
  {
    title: "PT. Lintas Media Danawa",
    position: "AI Engineer Intern",
    period: "Sep 2023 – Oct 2023",
    roles: ["AI Chatbot Developer", "Machine Learning Engineer"],
  },
];

const education = [
  {
    title: "Gunadarma University",
    position: "Bachelor of Computer Science",
    period: "Sept 2019 – Aug 2023",
    roles: [
      "Thesis: Meat Freshness Classification (97% Accuracy)",
      "Scientific Research: Web-Based Fanpage Project",
      "GPA: 3.37 / 4.00",
    ],
  },
  {
    title: "SMA Negeri 9 Kota Bogor",
    position: "MIPA – Mathematics & Science",
    period: "July 2016 – July 2019",
    roles: ["Natural Science Track"],
  },
];

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState("work");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const data = activeTab === "work" ? workExperience : education;
  const totalSlides = data.length;

  useEffect(() => {
    if (isHovering) return; // Stop auto-slide pas hover

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 2500);

    return () => clearInterval(interval);
  }, [totalSlides, isHovering]); // Pastikan cek isHovering

  return (
    <section>
      {/* Tabs */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => {
            setActiveTab("work");
            setCurrentSlide(0);
          }}
          className={`px-4 rounded-full text-sm font-semibold ${
            activeTab === "work"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Work Experience
        </button>
        <button
          onClick={() => {
            setActiveTab("educ");
            setCurrentSlide(0);
          }}
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            activeTab === "educ"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Education
        </button>
      </div>

      {/* Carousel */}
      <div
        className="relative min-h-[300px] md:min-h-[350px] lg:min-h-[300px] overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="absolute w-full h-full flex justify-center items-center">
          {data.map((item, i) => {
            const isActive = i === currentSlide;

            return (
              <motion.div
                key={i}
                className="absolute w-full max-w-[90%] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] px-6 sm:px-10"
                onClick={() => {
                  if (!isActive) setCurrentSlide(i);
                }}
                animate={{
                  opacity: isActive ? 1 : 0.3,
                  scale: isActive ? 1 : 0.9,
                  x: (i - currentSlide) * 420,
                  zIndex: isActive ? 1 : 0,
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -50) {
                    setCurrentSlide((prev) => (prev + 1) % totalSlides);
                  } else if (info.offset.x > 50) {
                    setCurrentSlide((prev) =>
                      prev === 0 ? totalSlides - 1 : prev - 1
                    );
                  }
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.position}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.period}</p>
                  <ul className="text-sm mt-4 space-y-1 text-left list-disc list-inside">
                    {item.roles.map((role, idx) => (
                      <li key={idx}>{role}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
