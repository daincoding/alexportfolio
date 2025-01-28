import React from 'react'
import logo from '../assets/Images/alex_logo.png'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className='flex flex-shrink-0 items-center'>
            <img
                src={logo}
                className="img-fluid rounded-top mx-2 w-10"
                alt="logo"
            />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <a href="https://github.com/daincoding" target='_blank'>
            <FaGithub color='white' />
          </a>
          <FaInstagram color='white' />
          <FaLinkedin color='white' />
        </div>
    </nav>
  )
}

export default Navbar