import aboutimage from '../assets/Images/about.jpg'
import { motion } from 'framer-motion'

const AboutMe = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">About <span className="text-neutral-500"> Me</span></h2>
        <div className='flex flex-wrap'>
            <motion.div 
            whileInView={{ x: 0, opacity: 1}}
            initial={{ x: -100, opacity: 0}}
            transition={{ duration: 0.3, delay: 0.25}}
            className='w-full lg:w-1/2 lg:p-8'>
            <div className="flex items-center justify-center">
                <img
                    src={aboutimage}
                    className="rounded-2xl"
                    alt="About Image"
                />
            </div>
            </motion.div>
            <div className='w-full lg:w-1/2'>
                <motion.div 
                whileInView={{ x: 0, opacity: 1}}
                initial={{ x: 100, opacity: 0}}
                transition={{ duration: 0.3, delay: 0.25}}
                className='flex justify-center lg:justify-start'>
                    <p className='my-2 max-2-xl py-6 font-light tracking-tighter'>Hello! I’m a dedicated web developer with a passion for creating intuitive frontend designs and delivering clean, user-focused experiences. My journey into tech began while working as a sound designer and composer for a game studio. During that time, I had the opportunity to contribute to the game’s UI/UX, which ignited my enthusiasm for coding and interface design.<br/>
<br/>
Since then, I’ve transitioned into web development, where I’ve gained expertise in a variety of frontend technologies while also building a solid foundation in backend development. I’m always curious about new tools and advancements in the tech world, and I enjoy staying up to date with emerging trends and best practices.
<br/>
<br/>
My ultimate goal is to continuously grow as a developer, crafting innovative and engaging solutions that enhance user experiences. Whether it’s creating sleek interfaces or optimizing functionality behind the scenes, I’m driven by the challenge of turning ideas into reality.</p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe