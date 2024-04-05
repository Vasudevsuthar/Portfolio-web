import React from 'react';
import img from '../assets/img.png';
import bg from '../assets/bg.avif';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
const Banner = () => {

  const handleDownload = () => {
    const fileUrl = 'https://drive.google.com/file/d/1qzYams07juj6IvEiEf9iloiAiZO3BY6k/view?usp=drive_link';

    const link = document.createElement('a');
    link.href = fileUrl;

    link.setAttribute('download', 'resume.pdf');

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  return (
    <section className='min-h-[95vh] lg:min-h-[70vh] flex items-center' id='home'>
      <div className="mx-auto sm:-mt-24 lg:mt-5">
        <div className='flex flex-col gap-y-6 lg:flex-row lg:items-center lg:gap-x-52'>
          <div className='flex-1 text-center font-secondary lg:text-left '>
            <motion.h1
              variants={fadeIn('down', 0.3)} initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }} className='text-[45px] leading-[0.8] font-bold lg:text-[100px]'>Vasudev</motion.h1>
            <motion.div
              variants={fadeIn('down', 0.3)} initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-1 text-[26px] lg:text-[45px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='mr-4'>I am a</span>
              <TypeAnimation
                sequence={[
                  'Forntend',
                  2000,
                  'Developer',
                  2000,
                ]}
                speed={20}
                className='text-accent'
                wrapper='span'
                repeat={Infinity} />
            </motion.div>
            <motion.p
              variants={fadeIn('down', 0.7)} initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[20px] lg:text-[26px] mb-5 max-w-lg mx-auto lg:mx-0'>
              Welcome to my digital portfolio hub!
            </motion.p>
            <motion.div
              variants={fadeIn('down', 0.9)} initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-6 mx-auto lg:mx-0'>
              <Link to='contact'
                activeClass='active'
                smooth={true}
                spy={true}
              ><button className='btn btn-lg transform  '><a>Contact me</a></button></Link>
              <button onClick={handleDownload} className='flex items-center cursor-pointe gap-x-1 text-accent text-xl font-bold transform duration-300 hover:scale-110 transition-transform' target="_blank"
              rel="noopener noreferrer">Curriculum Vitae<IoMdCloudDownload /></button>
            </motion.div>
            <motion.div
              variants={fadeIn('down', 0.9)} initial="hidden"
              whileInView={'show'}
              className='flex text-[30px] gap-x-4 max-w-max mx-auto lg:mx-0'>
              <a href="https://github.com/Vasudevsuthar" target="_blank"
              rel="noopener noreferrer">
                <FaGithub className='cursor-pointer transform duration-500 hover:scale-125 transition-transform' /></a>
              <a href={'mailto:vasudevsuthar17@gmail.com'} className='cursor-pointer transform duration-500 hover:scale-125 transition-transform' target="_blank"
              rel="noopener noreferrer">
                <MdEmail className='cursor-pointer' />
              </a>
              <a href="https://www.linkedin.com/in/vasudev-suthar-6b835829a/" className='cursor-pointer transform duration-500 hover:scale-125 transition-transform' target="_blank"
              rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/qr/DOAB7A6PICKAK1" className='cursor-pointer transform duration-500 hover:scale-125 transition-transform' target="_blank"
              rel="noopener noreferrer">
                <FaWhatsappSquare />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('up', 0.3)} initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.9 }}
            className='hidden imgdiv lg:flex flex-1 max-w-[220px] lg:max-w-[280px]'>
            <div className='img__container '>
              <img className='circle ' src={bg} alt="" />
              <img className="vj" src={img} alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
