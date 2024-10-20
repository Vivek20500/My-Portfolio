import React from 'react';
import Title from './Title.jsx';
import SkillsName from './SkillsName.jsx';

import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

function About() {
  return (
    <div className='font-serif mainContent w-full h-max flex flex-col p-5'>
      <div className=''>
        <div className='mb-5'>
          <Title title='About Me' />
          <p className='text-2xl'>
            <span className='text-3xl font-bold'>Hello! I'm Vivek</span>, a passionate Electronics and Communication Engineering sophomore at National Institute of Technology Raipur.
          </p>
          <p className='text-lg'>
            I specialize in web development and hardware prototyping, blending technology and creativity to build innovative solutions. My expertise spans front-end development with React and Tailwind CSS, as well as hands-on experience in Arduino-based hardware projects, including gesture-controlled drones using accelerometers.
          </p>
        </div>
      </div>
      <div className='mb-5'>
        <Title title='Education' />
        <div className='flex'>
          <div className='w-1/2'>
            <p className='text-3xl font-bold'>Kendriya Vidalaya No.2 Raipur</p>
            <p className='text-2xl'>89% 12th Year-2022</p>
            <p className='text-2xl'>82% 10th Year-2020</p>
          </div>
          <div className='w-1/2'>
            <p className='text-3xl font-bold'>National Institute of Technology Raipur</p>
            <p className='text-2xl'>B.Tech in Electronics and Communication Engineering</p>
            <p>2023-2027</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <Title title='Skills' />
        <div className='flex w-10/12 flex-wrap gap-10'>
          <div className='flex flex-col justify-items-end'>
            <lottie-player src="https://lottie.host/71ac0413-46be-45d2-a0a0-6bf8d981a88c/bEuxhMQqpu.json" background="##FFFFFF" speed="1" style={{ width: '200px', height: '200px' }} loop autoplay direction="1" mode="normal"></lottie-player>
            <SkillsName name='HTML' />
          </div>
          <div className=''>
            <lottie-player src="https://lottie.host/9f67ca89-2b14-4482-a873-3f84e4c79dad/RukpiY0QS5.json" background="##FFFFFF" speed="1" style={{ width: '200px', height: '200px' }} loop autoplay direction="1" mode="normal"></lottie-player>
            <SkillsName name='CSS' />
          </div>
          <div className=' flex flex-col justify-items-end'>
            <lottie-player src="https://lottie.host/fc25ac6d-c4a7-4191-999c-6ae1bb5b443b/jDkP4OtZMI.json" background="##FFFFFF" speed="1" style={{ width: '200px', height: '200' }} loop autoplay direction="1" mode="normal"></lottie-player>
            <SkillsName name='Javascript'/>
          </div>
          <div className=' w-[180px] flex flex-col items-center justify-center'>
            <lottie-player src="https://lottie.host/06cc0e88-9215-469a-9b7c-9ca9602a5d69/m14gnVDrl4.json" background="##FFFFFF" speed="0.5" style={{ width: '200px', height: '200px' }} loop autoplay direction="1" mode="normal"></lottie-player>
            <SkillsName name='React' />
          </div>
          <div className=' w-[180px] flex flex-col items-center justify-center'>
            <div className='flex justify-center items-center' style={{width:'200px', height:'200px'}}>
              <img src='https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' width={150} />
            </div>
            <SkillsName name='Nodejs' />
          </div>
          <div className=' w-[180px] flex flex-col items-center justify-center'>
            <div className='flex justify-center' style={{width:'200px', height:'200px'}}>
              <img src='https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' width={150} />
            </div>
            <SkillsName name='C++' />
          </div>
          <div className=' w-[180px] flex flex-col items-center justify-center'>
            <div className='flex justify-center items-center' style={{width:'200px', height:'200px'}}>
              <img src='https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' width={150} />
            </div>
            <SkillsName name='Postgres' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
