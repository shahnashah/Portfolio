import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Aboutme from "@/components/About"
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="max-w-screen">
      <Nav />
      <div>
        <Hero />
        <Aboutme/>
        <Experience />
        <Projects />
        <Skills />
        <Contact/>
      </div>
    </div>
  );
}
