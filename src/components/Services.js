import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { FaHtml5 } from "react-icons/fa6";
import { DiCss3 } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import Boostrap from '../assets/boostrap.svg';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants';


const Services = () => {
  return (
    <section id='services' className='py-52 sm:py-10 lg:py-14 my-10'>
      <div className='flex-1 text-center '>
        <div className='text-[70px] text-accent leading-[0.8] font-bold lg:text-[120px] mb-20 lg:mb-10' >Skills</div>
        <div className='container mx-auto my-10 sm:gap-y-16 gap-y-10 grid justify-center items-center '>
          <motion.div
            variants={fadeIn('right', 0.3)} initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex justify-center items-center gap-x-16 lg:gap-x-28 text-lg sm:text-2xl lg:text-3xl sm:font-bold font-semibold '>
            <div className='flex items-center  rounded-lg backdrop-blur-sm'>
              <FaHtml5 className='text-purple-500' />
              <p> HTML</p>
            </div>
            <div className='flex items-center gap-x-1 rounded-lg backdrop-blur-sm'>
              <DiCss3 className='text-blue-500' />
              <p> CSS</p>
            </div>
            <div className='flex items-center gap-x-1 rounded-lg backdrop-blur-sm'>
              <RiJavascriptFill className='text-yellow-500' />
              <p> JavaScript</p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.3)} initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex justify-center items-center  gap-x-10 lg:gap-x-20 text-lg sm:text-2xl lg:text-3xl sm:font-bold font-semibold'>
            <div className='flex items-center gap-x-1 rounded-lg backdrop-blur-sm'>
              <RiReactjsLine className='text-blue-400' />
              <p> React JS</p>
            </div>
            <div className='flex items-center gap-x-1 rounded-lg backdrop-blur-sm'>
              <TbBrandRedux className='text-purple-600' />
              <p> Redux</p>
            </div>
            <div className='flex items-center gap-x-1 rounded-lg backdrop-blur-sm'>
              <SiTailwindcss className='text-cyan-500' />
              <p> Tailwind CSS</p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('right', 0.3)} initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex justify-center items-center gap-x-12 lg:gap-x-24 text-lg sm:text-2xl lg:text-3xl sm:font-bold font-semibold'>
            <div className='flex items-center gap-x-1 rounded-lg backdrop-blur-sm'>
              <TbBrandVscode className='text-blue-600' />
              <p> VS Code</p>
            </div>
            <div className='flex items-center gap-x-1 rounded-lg backdrop-blur-sm'>
              <FaGithubSquare className='text-black' />
              <p> Git Hub</p>
            </div>
            <div className='flex items-center gap-x-1 rounded-lg backdrop-blur-sm'>
              <img src={Boostrap} className='filter invert h-5' alt='' />
              <p> Boostrap</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Services;
