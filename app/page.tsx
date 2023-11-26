"use client";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ScrollIndicator from "@/components/ScrollIndicator";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Head from "next/head";
import useDarkMode from "@/hooks/useDarkMode";

export default function Home() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
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
        <Toaster position="bottom-right" />
      </main>
    </div>
  );
}
