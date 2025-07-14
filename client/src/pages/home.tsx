import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import ExperienceSection from "@/components/sections/experience";
import Blog from "@/components/sections/blog";
import Contact from "@/components/sections/contact";
import ParticlesBackground from "@/components/ui/particles-background";
import ScrollProgress from "@/components/ui/scroll-progress";
import LoadingScreen from "@/components/ui/loading-screen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      <div className="min-h-screen bg-dark-bg text-foreground">
        <ParticlesBackground />
        <ScrollProgress />
        
        <Header />
        
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <ExperienceSection />
          <Blog />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
