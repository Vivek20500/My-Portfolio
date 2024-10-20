import React from "react";
import logo from '../assets/github-mark.svg'
import myImg from '../assets/Vivek.jpg'

function Home() {
  return (
    <div className='mainContent w-full h-max sm:h-screen flex flex-col-reverse justify-end sm:flex-row '>
      <div className=" flex justify-center items-center sm:hidden">
      <lottie-player src="https://lottie.host/cf5655b7-c8d2-498f-8141-db53dbce7d71/sZJTTk4eTp.json" background="##000000" speed="1" style={{width: '300px', height: '300px'}} loop  autoplay direction="1" mode="normal"></lottie-player>
      </div>
      <div className='w-full my-10 sm:w-1/2 flex flex-col items-center justify-center'>
        <p className='textShadowWhite font-extrabold text-5xl mb-5 cursor-default'>Vivek Verma</p>
        <div className=' w-1/2 flex justify-around'>
          <a href='https://www.linkedin.com/in/vivek-verma-b7701929a/'>
            <lord-icon
              src="https://cdn.lordicon.com/qgebwute.json"
              trigger="hover"
              stroke="bold"
              state="hover-draw"
              colors="primary:#121331,secondary:#000000"
              style={{ width: '35px', height: '35px' }}>
            </lord-icon>
          </a>
          <div className='w-1 bg-cyan-950'></div>
          <a href='https://github.com/Vivek20500'>
            <img src={logo} alt="Logo" width={35} height="auto" />
          </a>
          <div className='w-1 bg-cyan-950'></div>
          <a href='mailto:vivekverma20500@gmail.com'>
            <lord-icon
              src="https://cdn.lordicon.com/ozlkyfxg.json"
              trigger="hover"
              stroke="bold"
              state="hover-spin"
              colors="primary:#121331,secondary:#000000"
              style={{ width: '35px', height: '35px' }}>
            </lord-icon>
          </a>
        </div>
      </div>
      <div className='sm:block hidden w-1 bg-cyan-950'></div>
      <div className=' sm:w-1/2 flex justify-center items-center'>
        <img src={myImg} width='50%' alt="My Photo" className=" border-4 shadow-2xl " />
      </div>
      
    </div>
  )
}

export default Home;