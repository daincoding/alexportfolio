import React from 'react'
import logo from '../assets/Images/alex_logo.png'
import { FaLinkedin, FaGithub, FaSpotify } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className='flex flex-shrink-0 items-center'>
            <a href="index.html">
              <img
                  src={logo}
                  className="img-fluid rounded-top mx-2 w-10"
                  alt="logo"
              />
            </a>
        </div>

        <div className="hidden md:flex space-x-6 text-lg">
        <a href="#about" className="hover:text-cyan-300 transition">About</a>
        <a href="#techstack" className="hover:text-cyan-300 transition">Tech</a>
        <a href="#cv" className="hover:text-cyan-300 transition">CV</a>
        <a href="#projects" className="hover:text-cyan-300 transition">Projects</a>
        <a href="#contact" className="hover:text-cyan-300 transition">Contact</a>
      </div>

        <motion.div 
        initial={{ x: 100, opacity: 0}}
        animate={{ x: 0, opacity: 1}}
        transition={{ duration: 0.5, delay: 0.2}}
        className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <a href="https://github.com/daincoding" target='_blank'>
            <FaGithub color='white' />
          </a>
          <a href="https://open.spotify.com/artist/0WGxgRurCUtZPILs08KznX?si=RHXmt8E8TEy0dnYT3B5Epw" target='_blank'>
            <FaSpotify color='white' />
          </a>
          <a href="https://www.linkedin.com/in/alexpanske/" target='_blank'>
            <FaLinkedin color='white' />
          </a>
        </motion.div>
    </nav>
  )
}

export default Navbar