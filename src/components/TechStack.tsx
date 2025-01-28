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
} from "react-icons/si";
import { DiSqllite } from "react-icons/di";
import { GiGrimReaper } from "react-icons/gi";

const TechStack = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-10 text-center text-4xl">Tech Stack & Knowledge</h2>
      <h3 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-center text-2xl text-transparent">
        Tech Stack
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 mt-10">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 mt-10">
          <FaHtml5 className="text-7xl text-[#F16A34]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 mt-10">
          <SiCsswizardry className="text-7xl text-[#6B3B9D]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 mt-10">
          <FaJs className="text-7xl text-[#F7E02B]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 mt-10">
          <SiTypescript className="text-7xl text-[#2E7ECE]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 mt-10">
          <FaPhp className="text-7xl text-[#7C7FB6]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 mt-10">
          <DiSqllite className="text-7xl text-[#14425E]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 mt-10">
          <SiUnrealengine className="text-7xl text-[#fff]" />
        </div>
      </div>
      <h3 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-center text-2xl text-transparent mt-10">
        Design
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 mt-10">
          <FaFigma className="text-7xl text-[#fff]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 mt-10">
          <RiTailwindCssFill className="text-7xl text-[#3CBFF8]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 mt-10">
          <SiChakraui className="text-7xl text-[#69C9CD]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 mt-10">
          <FaBootstrap className="text-7xl text-[#7C1EF7]" />
        </div>
      </div>
      <h3 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-center text-2xl text-transparent mt-10">
        Project Management
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 mt-10">
          <SiJira className="text-7xl text-[#3988FF]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 mt-10">
          <FaGit className="text-7xl text-[#F0563A]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 mt-10">
          <RiNotionFill className="text-7xl text-[#fff]" />
        </div>
      </div>
      <h3 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-center text-2xl text-transparent mt-10">
        Sound & -Motion- Picture
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 mt-10">
          <FaBars className="text-7xl text-[#fff]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 mt-10">
          <GiGrimReaper className="text-7xl text-[#6BC53B]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 mt-10">
          <SiAdobeaudition className="text-7xl text-[#120C61]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 mt-10">
          <SiAffinityphoto className="text-7xl text-[#F59CFE]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 mt-10">
          <SiAdobephotoshop className="text-7xl text-[#3CB0FF]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 mt-10">
          <SiDavinciresolve className="text-7xl text-[#F9364B]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 mt-10">
          <SiAdobepremierepro className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 mt-10">
          <SiAdobeaftereffects className="text-7xl text-cyan-400" />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
