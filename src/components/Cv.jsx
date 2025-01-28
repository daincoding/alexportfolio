import React from 'react'
import { EXPERIENCES } from '../constants/infos'
import { motion } from 'framer-motion'

const Cv = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-4xl text-transparent'>CV - Work Experience & Education</h2>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                    </div>
                    <div className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>{experience.role} - <span className='text-sm text-cyan-200'>{experience.company}</span></h6>
                    <p className='mb-4 text-neutral-400'>{experience.description}</p>
                    {experience.technologies.map((tech, index) => (
                        <button key={index} className='mr-1 mt-2 rounded bg-neutral-900 px-1 py-0.5 text-sm font-medium text-purple-600'>{tech}</button>
                    ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cv