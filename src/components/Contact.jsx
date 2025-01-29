import React from 'react'
import { CONTACT } from '../constants/infos'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.div 
    whileInView={{ opacity: 1}}
    initial={{ opacity: 0}}
    transition={{ duration: 1, delay: 0.25}}
    className='border-b border-neutral-900 pb-25'>
        <h2 className='my-20 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-4xl text-transparent'>Get In Touch</h2>
        <div className='text-center tracking-tighter'>
            <p className='my-4'>Location: {CONTACT.location}</p>
            <p className='my-4'>Phone: {CONTACT.phoneNo}</p>
            <a type='mail' href='mailto:alexander.panske@yahoo.com' className='my-10 border-b'>{CONTACT.email}</a>
        </div>
    </motion.div>
  )
}

export default Contact