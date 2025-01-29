import React from 'react'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import TechStack from './components/TechStack'
import Cv from './components/Cv'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


// TODO: HERO: CHANGE PICTURE
// TODO: AboutMe: CHANGE PICTURE - make it Scrollable?!?
// TODO: Create Footer with Impressum & Datenschutz

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="techstack">
          <TechStack />
        </section>
        <section id="cv">
          <Cv />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  )
}

export default App
