import React from 'react'
import { PROJECTS } from '../constants/infos'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{ duration: 0.5 }}
        className='my-20 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-4xl text-transparent'>Projects</motion.h2>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{ duration: 1 }}
                    className='w-full lg:w-1/4'>
                        <img src={project.image} className='mb-6 rounded' alt={project.title} height={150} width={150}/>
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{ duration: 1.2 }}
                    className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>{project.title}</h6>
                        <p className='mb-4 text-neutral-400'>{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <button key={index} className='mr-1 mt-2 rounded bg-neutral-900 px-1 py-0.5 text-sm font-medium text-purple-600'>{tech}</button>
                            ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects