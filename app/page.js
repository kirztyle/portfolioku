"use client";

import "../app/globals.css";
import Navbar from "../app/navbar/Navbar";
import About from "./about/About";
import About1 from "./about1/About1";
import Hero from "./hero/Hero";
import WelcomePopup from "./popup/Popup";
import "@fontsource/roboto/400.css"; // Regular weight
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import PreviousProjects from "./myproject/Project";
import Footer from "./contact/Contact";
config.autoAddCss = false;

export default function Home() {
  return (
    <div className="mx-auto bg-gray-100 ">
      <WelcomePopup />
      <Navbar />
      <Hero />
      <div className="bg-customOne">
        <About />
        <About1 />
      </div>
      <PreviousProjects />
      <Footer />
    </div>
  );
}
