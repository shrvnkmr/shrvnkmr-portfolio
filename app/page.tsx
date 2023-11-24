"use client";
import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ScrollIndicator from "@/components/ScrollIndicator";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   const savedMode = localStorage.getItem("mode");
  //   if (savedMode === "dark") {
  //     setDarkMode(true);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("mode", darkMode ? "dark" : "light");
  // }, [darkMode]);

  return (
    <div className={`scroll-smooth ${darkMode ? "dark" : ""}`}>
      <Head>
        <title>Shravan Kumar</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <main className="bg-slate-100 text-slate-700 transition dark:bg-gray-900 dark:text-slate-50">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <AboutSection />
        <Skills />
        <WorkExperience />
        <Projects />
        <Contact />
        <ScrollIndicator />
        <br />
        <Footer />
      </main>
    </div>
  );
}
