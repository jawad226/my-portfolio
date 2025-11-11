import { About, Contact, Experience, Hero, Projects, Skills } from "./components";

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

      <div id="experinece">
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
