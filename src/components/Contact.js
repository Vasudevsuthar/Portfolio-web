import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qutrd8o', 'template_gp32v7p', form.current, {
        publicKey: 'W-1tHXylfj5vD8p11',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          alert("Thanks for sent Message :)");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto sm:py-0'>
        <div className='flex flex-col lg:mx-24 lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3)} initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 flex justify-start items-center'>
            <div className=''>
              <h4 className='lg:text-4xl uppercase text-accent font-bold tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br /> together</h2>
            </div>
          </motion.div>
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.3)} initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-center backdrop-blur-sm mb-24 lg:mb-0'>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" placeholder='Your Name' name="user_name" />
            <input className='bg-transparent border-b  outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" placeholder='Your Email' name="user_email" />
            <textarea className='bg-transparent border-b outline-none w-full py-8 placeholder:text-white focus:border-accent transition-all resize-none mb-6' placeholder='Your Message' name="message"></textarea>
            <button className='btn btn-lg -mb-10'><a>Send message</a></button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
