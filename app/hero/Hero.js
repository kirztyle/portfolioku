import React, { useEffect, useRef } from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGit,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Typed from "typed.js";

const Hero = () => {
  // Variants untuk animasi
  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Fullstack Developer", "Data Analyst", "AI Engineer"], // Array teks
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      <div className="z-0 flex flex-col-reverse md:flex-row justify-between items-center w-full py-14 lg:py-14 sm:py-32 px-10 lg:px-28 md:space-y-0 space-x-4">
        <motion.div
          variants={variants}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }} // Durasi lebih panjang untuk animasi yang lebih halus
        >
          <div className="lg:text-justify text-xl mt-10 sm:mt-10 sm:text-3xl">
            <h1>
              Hello, I'm{" "}
              <span className="font-bold text-cyan-500">Muhammad Rafii</span>
            </h1>
            <div className="font-bold text-xl sm:text-3xl mt-2">
              <span ref={typedElement}></span>
            </div>
            <p className="mt-2 text-lg sm:text-xl">
              I love creating fun, innovative, and user-friendly web
              experiences!
              <br /> Let’s create something amazing!
            </p>
          </div>

          <Link
            href="Muhammad_Rafii_CV.pdf"
            className="text-lg p-4 bg-cyan-400 text-black inline-block mt-4 rounded-2xl hover:bg-cyan-500 transition-all duration-450 ease-in-out"
          >
            Check out my CV
          </Link>
          <div className="pt-4 space-x-3 items-center sm:mb-4">
            <a href="https://instagram.com/kirztyle_">
              <FontAwesomeIcon icon={faInstagram} size="2xl" />
            </a>
            <a href="https://github.com/kirztyle/">
              <FontAwesomeIcon icon={faGit} size="2xl" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-rafii16/">
              <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </a>
          </div>
        </motion.div>
        <motion.div
          id="hero"
          className="flex-shrink-0"
          variants={variants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="z-0 bg-cyan-500 w-72 rounded-2xl overflow-hidden shadow-md">
            <img
              src="hero.png"
              alt="Hero Image"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
