import React from 'react'
import logo from '../assets/Images/alex_logo.png'

const Footer = () => {
  return (
    <footer className="mb-1 flex items-center justify-evenly py-6">
            <div className='flex flex-shrink-0 items-center'>
                <img
                    src={logo}
                    className="img-fluid rounded-top mx-2 w-5"
                    alt="logo"
                />
            </div>
            <div className='m-1 flex items-center justify-center gap-4 text-sm'>
              <a 
                href="/impressum.html"
                className="text-cyan-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                Impressum
              </a>
            </div>
        </footer>
  )
}

export default Footer