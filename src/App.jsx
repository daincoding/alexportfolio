import React from 'react'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import TechStack from './components/TechStack'

// TODO: Add Links to NavBar
// TODO: Think about adding NavBar fast scrolls
// TODO: HERO: CHANGE PICTURE
// TODO: AboutMe: CHANGE PICTURE - make it Scrollable?!?
// TODO: AboutMe: Contact and Location - under headline

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div class="relative h-full w-full bg-slate-950">
          <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
      </div>
      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero />
        <AboutMe />
        <TechStack />
      </div>
    </div>
  )
}

export default App
