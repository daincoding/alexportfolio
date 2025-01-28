import React from 'react'
import { PROJECTS } from '../constants/infos'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-4xl text-transparent'>Projects</h2>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className='w-full lg:w-1/4'>
                        <img src={project.image} className='mb-6 rounded' alt={project.title} height={150} width={150}/>
                    </div>
                    <div className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>{project.title}</h6>
                        <p className='mb-4 text-neutral-400'>{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <button key={index} className='mr-1 mt-2 rounded bg-neutral-900 px-1 py-0.5 text-sm font-medium text-purple-600'>{tech}</button>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects