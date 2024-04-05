import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {

  return (
    <section className='' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-y-0 h-screen'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[400px]  bg-top '></motion.div>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 '>
            <h2 className='h2 text-accent'>About me.</h2>
            <h4 className='h4 mb-4'>I'm a React.js Developer with a knack for crafting intuitive user interfaces. Proficient in front-end web development, specializing in React library utilization. Passionate about delivering seamless digital experiences that engage and delight users.</h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
