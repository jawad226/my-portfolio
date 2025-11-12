import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./components/Hero"));
const About = dynamic(() => import("./components/About"));
const Skills = dynamic(() => import("./components/Skills"));
const Experience = dynamic(() => import("./components/Experience"));
const Projects = dynamic(() => import("./components/Projects"));
const Contact = dynamic(() => import("./components/Contact"));

export default function home() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skill">
        <Skills />
      </div>

      <div id="experience">
        <Experience />
      </div>
      <div id="project">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </>
  )
}
