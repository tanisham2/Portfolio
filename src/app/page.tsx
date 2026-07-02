import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}