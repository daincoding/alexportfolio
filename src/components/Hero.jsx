import React from 'react'
import avatar from '../assets/Images/kevinRushProfile.png'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Alexander Panske</h1>
                    <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-4xl text-transparent'>Webdev, Sound Designer & Composer</span>
                    <p className='my-2 max-2-xl py-6 font-light tracking-tighter'>Hi! I’m a passionate web developer with a love for frontend design and user experiences. 
                        My background in sound design and composing for a game studio sparked my interest in coding and UI/UX because I helped out in this area while working there, and I’ve since gained experience in both frontend and backend technologies.
                        I’m always eager to learn and strive to create seamless, user-friendly designs.
                    </p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                        <img
                            src={avatar}
                            alt="Alexander Panske"
                        />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero