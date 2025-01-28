import React from 'react'
import { CONTACT } from '../constants/infos'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-4xl text-transparent'>Get In Touch</h2>
        <div className='text-center tracking-tighter'>
            <p className='my-4'>Phone: {CONTACT.phoneNo}</p>
            <a type='mail' href='mailto:alexander.panske@yahoo.com' className='my-4 border-b'>{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact