import React from "react";
import { RiReactjsLine, RiTailwindCssFill, RiNotionFill } from "react-icons/ri";
import {
  FaHtml5,
  FaJs,
  FaPhp,
  FaFigma,
  FaBootstrap,
  FaGit,
  FaBars,
} from "react-icons/fa";
import {
  SiCsswizardry,
  SiTypescript,
  SiUnrealengine,
  SiChakraui,
  SiJira,
  SiAdobeaftereffects,
  SiAdobeaudition,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAffinityphoto,
  SiDavinciresolve,
  SiObsstudio
} from "react-icons/si";
import { DiSqllite } from "react-icons/di";
import { GiGrimReaper } from "react-icons/gi";
import { animate, motion } from 'framer-motion'

const aniIcons = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});


const TechStack = () => {
  return (
    <motion.div 
    whileInView={{ opacity: 1}}
      initial={{ opacity: 0}}
      transition={{ duration: 0.5, delay: 0.25}}
    className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{ opacity: 1}}
      initial={{ opacity: 0}}
      transition={{ duration: 0.5, delay: 0.25}}
      className="my-10 text-center text-4xl">Tech Stack & Knowledge</motion.h2>
      <motion.h3 
      whileInView={{ opacity: 1}}
      initial={{ opacity: 0}}
      transition={{ duration: 0.5, delay: 0.35}}
      className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-center text-2xl text-transparent">
        Tech Stack
      </motion.h3>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={aniIcons(2.5)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4 mt-10 hover:cursor-pointer group">
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <motion.span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            React: Beginner 2/5
          </motion.span>
        </motion.div>
        <motion.div 
        variants={aniIcons(4.5)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4 mt-10 group">
          <FaHtml5 className="text-7xl text-[#F16A34]" />
          <motion.span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            HTML: Intermediate 4/5
          </motion.span>
        </motion.div>
        <motion.div 
        variants={aniIcons(3.2)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4 mt-10 group">
          <SiCsswizardry className="text-7xl text-[#6B3B9D]" />
          <motion.span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            CSS: Intermediate 3/5
          </motion.span>
        </motion.div>
        <motion.div 
        variants={aniIcons(2.7)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4 mt-10 group">
          <FaJs className="text-7xl text-[#F7E02B]" />
          <motion.span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            JavaScript: Beginner 2/5
          </motion.span>
        </motion.div>
        <motion.div 
        variants={aniIcons(3.3)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4 mt-10 group">
          <SiTypescript className="text-7xl text-[#2E7ECE]" />
          <motion.span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            TypeScript: Beginner 1/5
          </motion.span>
        </motion.div>
        <motion.div 
        variants={aniIcons(5)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4 mt-10 group">
          <FaPhp className="text-7xl text-[#7C7FB6]" />
          <motion.span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            php: Beginner 1/5
          </motion.span>
        </motion.div>
        <motion.div 
        variants={aniIcons(4.1)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4 mt-10 group">
          <DiSqllite className="text-7xl text-[#14425E]" />
          <motion.span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            SQLite: Beginner 2/5
          </motion.span>
        </motion.div>
        <motion.div 
        variants={aniIcons(3.85)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4 mt-10 group">
          <SiUnrealengine className="text-7xl text-[#fff]" />
          <motion.span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            Unreal: Intermediate 3/5
          </motion.span>
        </motion.div>
      </div>
      <motion.h3 
      whileInView={{ opacity: 1}}
      initial={{ opacity: 0}}
      transition={{ duration: 0.5, delay: 0.35}}className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-center text-2xl text-transparent mt-10">
        Design
      </motion.h3>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={aniIcons(2.3)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4 mt-10 group">
          <FaFigma className="text-7xl text-[#fff]" />
          <motion.span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            Figma: Beginner 2/5
          </motion.span>
        </motion.div>
        <motion.div 
        variants={aniIcons(4.1)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4 mt-10 group">
          <RiTailwindCssFill className="text-7xl text-[#3CBFF8]" />
          <motion.span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            Tailwind CSS: Intermediate 4/5
          </motion.span>
        </motion.div>
        <motion.div 
        variants={aniIcons(5.1)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4 mt-10 group">
          <SiChakraui className="text-7xl text-[#69C9CD]" />
          <motion.span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            Chakra UI: Beginner 2/5
          </motion.span>
        </motion.div>
        <motion.div 
        variants={aniIcons(3.3)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4 mt-10 group">
          <FaBootstrap className="text-7xl text-[#7C1EF7]" />
          <motion.span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            Bootstrap: Intermediate 3/5
          </motion.span>
        </motion.div>
      </div>
      <motion.h3 
      whileInView={{ opacity: 1}}
      initial={{ opacity: 0}}
      transition={{ duration: 0.5, delay: 0.35}}
      className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-center text-2xl text-transparent mt-10">
        Project Management
      </motion.h3>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={aniIcons(3.3)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4 mt-10 group">
          <SiJira className="text-7xl text-[#3988FF]" />
          <motion.span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            Jira: Intermediate 4/5
          </motion.span>
        </motion.div>
        <motion.div 
        variants={aniIcons(2.6)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4 mt-10 group">
          <FaGit className="text-7xl text-[#F0563A]" />
          <motion.span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            Git: Beginner 2/5
          </motion.span>
        </motion.div>
        <motion.div
        variants={aniIcons(4.7)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4 mt-10 group">
          <RiNotionFill className="text-7xl text-[#fff]" />
          <motion.span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            Notion: Intermediate 3/5
          </motion.span>
        </motion.div>
      </div>
      <motion.h3 
      whileInView={{ opacity: 1}}
      initial={{ opacity: 0}}
      transition={{ duration: 0.5, delay: 0.35}}
      className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-center text-2xl text-transparent mt-10">
        Sound & -Motion- Picture
      </motion.h3>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={aniIcons(4.7)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4 mt-10">
          <FaBars className="text-7xl text-[#fff]" />
          <motion.span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            Ableton: Expert 5/5
          </motion.span>
        </motion.div>
        <motion.div 
        variants={aniIcons(2.7)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4 mt-10">
          <GiGrimReaper className="text-7xl text-[#6BC53B]" />
          <motion.span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            Reaper: Intermediate 3/5
          </motion.span>
        </motion.div>
        <motion.div 
        variants={aniIcons(3.2)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4 mt-10 group">
          <SiAdobeaudition className="text-7xl text-[#120C61]" />
          <motion.span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            Audition: Intermediate 3/5
          </motion.span>
        </motion.div>
        <motion.div 
        variants={aniIcons(5.7)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4 mt-10 group">
          <SiAffinityphoto className="text-7xl text-[#F59CFE]" />
          <motion.span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            Affinity Photo: Beginner 2/5
          </motion.span>
        </motion.div>
        <motion.div 
        variants={aniIcons(2.5)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4 mt-10 group">
          <SiAdobephotoshop className="text-7xl text-[#3CB0FF]" />
          <motion.span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            Photoshop: Beginner 2/5
          </motion.span>
        </motion.div>
        <motion.div 
        variants={aniIcons(3.6)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4 mt-10 group">
          <SiDavinciresolve className="text-7xl text-[#F9364B]" />
          <motion.span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            DaVinci Resolve: Intermediate 3/5
          </motion.span>
        </motion.div>
        <motion.div 
        variants={aniIcons(4.23)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4 mt-10 group">
          <SiAdobepremierepro className="text-7xl text-cyan-400" />
          <motion.span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            Premiere: Intermediate 3/5
          </motion.span>
        </motion.div>
        <motion.div 
        variants={aniIcons(3.1)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4 mt-10 group">
          <SiAdobeaftereffects className="text-7xl text-cyan-400" />
          <motion.span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            AfterEffects: Intermediate 3/5
          </motion.span>
        </motion.div>
        <motion.div 
        variants={aniIcons(4)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4 mt-10 group">
          <SiObsstudio className="text-7xl text-[#fff]" />
          <motion.span
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            OBS Studio: Intermediate 4/5
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TechStack;
