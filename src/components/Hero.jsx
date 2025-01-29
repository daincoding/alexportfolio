import React from 'react'
import avatar from '../assets/Images/hero_Profile.png'
import { motion } from 'framer-motion'

const aniContainer = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay},
    },
});

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                    variants={aniContainer(0.25)}
                    initial='hidden'
                    animate='visible'
                     className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Alexander Panske</motion.h1>
                    <motion.span 
                    variants={aniContainer(0.5)}
                    initial='hidden'
                    animate='visible'
                    className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-4xl text-transparent'>Webdev, Sound Designer & Composer</motion.span>
                    <motion.p 
                    variants={aniContainer(0.75)}
                    initial='hidden'
                    animate='visible'
                    className='my-2 max-2-xl py-6 font-light tracking-tighter'>Hi! I’m a passionate web developer with a love for frontend design and user experiences. 
                        My background in sound design and composing for a game studio sparked my interest in coding and UI/UX because I helped out in this area while working there, and I’ve since gained experience in both frontend and backend technologies.
                        I’m always eager to learn and strive to create seamless, user-friendly designs.
                    </motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                        <motion.img
                            src={avatar}
                            alt="Alexander Panske"
                            width={550}
                            className='rounded-xl'
                            initial={{ x: 100, opacity: 0}}
                            animate={{ x: 0, opacity: 1}}
                            transition={{ duration: 1, delay: 1.2}}
                        />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero