import './App.css'

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import Projects from './components/Projects';
import Wrong from './components/Wrong';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);


function toggle(){
  const list=document.querySelector('#List');
  if(list.style.display==='none' || list.style.display===''){
    list.style.display='block';
  }else{
    list.style.display='none';
  }
}
function hide(){
  const list=document.querySelector('#List');
  list.style.display='none';
}


function App() {
  return (
    <Router>
      <div id='List' style={{display:'none'}} className=' m-5 absolute top-16 w-11/12 h-max bg-cyan-500 rounded-md'>
          <ul onClick={hide} className=' text-3xl font-serif gap-5 p-5 flex flex-col justify-evenly items-center h-full'>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-slate-900' : 'hover:text-slate-900'}>Home</NavLink></li>
            <div className='w-full h-[1px] bg-blue-950'></div>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'text-slate-900' : 'hover:text-slate-900'}>About</NavLink></li>
            <div className='w-full h-[1px] bg-blue-950'></div>
            <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'text-slate-900' : 'hover:text-slate-900'}>Projects</NavLink></li>
          </ul>
        </div>
      <div className='bg-slate-300 p-4'>
        <header className='  flex h-14 bg-cyan-600 p-2 mb-4 rounded-full text-white'>
          <div className=' flex  w-full sm:w-1/2'>
          <a href='https://www.instagram.com/m_i_vivek/'>
            <lord-icon
              src="https://cdn.lordicon.com/kthelypq.json"
              trigger="hover"
              colors="primary:#ffffff"
              style={{ width: '40px', height: '40px' }}
              className="m-0">
            </lord-icon>
          </a>
            <p className=' textShadow pl-3 flex text-3xl font-bold '>Vivek Verma</p>
          </div>
          <div className='block sm:hidden' onClick={toggle}>
            <lord-icon
              src="https://cdn.lordicon.com/eouimtlu.json"
              trigger="hover"
              colors="primary:#ffffff"
              style={{width:'40px',height:'40px'}}>
            </lord-icon>
          </div>
          <div className='hidden sm:block w-1/2 text-lg font-semibold'>
            <ul className='flex justify-evenly items-center h-full'>
              <li ><NavLink to="/" className={({ isActive }) => isActive ? 'text-slate-900' : 'hover:text-slate-900'}>Home</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => isActive ? 'text-slate-900' : 'hover:text-slate-900'}>About</NavLink></li>
              <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'text-slate-900' : 'hover:text-slate-900'}>Projects</NavLink></li>
            </ul>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Wrong />} />
        </Routes>
        

        <footer className='w-full flex justify-center gap-10'>
          <a href='https://www.linkedin.com/in/vivek-verma-b7701929a/'>
            <lord-icon
              src="https://cdn.lordicon.com/qgebwute.json"
              trigger="hover"
              delay="100"
              stroke="bold"
              state="hover-draw"
              colors="primary:#121331,secondary:#000000"
              style={{ width: '35px', height: '35px' }}>
            </lord-icon>
          </a>
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
        </footer>
      </div>
    </Router>
  )
}

export default App
