import React from "react";
import logo from '../assets/github-mark.svg'
import myImg from '../assets/Vivek.jpg'

function Home() {
  return (
    <div className='mainContent w-full h-screen flex'>
      <div className='w-1/2 flex flex-col items-center justify-center'>
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
      <div className=' w-1 bg-cyan-950'></div>
      <div className=' w-1/2 flex justify-center items-center'>
        <img src={myImg} width='60%' alt="My Photo" className=" rounded-full border-4 shadow-2xl" />

      </div>
    </div>
  )
}

export default Home;