import React from "react";
import SkillsName from './SkillsName.jsx';
import project1 from '../assets/projectImg/p1.png'
import project3 from '../assets/projectImg/p3.png'
import project4 from '../assets/projectImg/p4.png'


function Card(props){
    return(
        <div className="hover:scale-110 text-white w-60 h-full text-center bg-slate-600 flex flex-col items-center p-4">
            <img className="w-52 h-52 bg-gray-900" src={props.img} alt={props.name} />
            <SkillsName name={props.name}/>
            <div className="bg-white w-full h-[2px] mb-[4px]"></div>
            <p>{props.description}</p>
        </div>
    )
}

function Projects(){
    return(
        <div className=" h-max md:h-screen">
            <div className="  flex-col md:flex-row flex gap-10">
                <a className="flex justify-center" href="https://vivek20500.github.io/calculator/"><Card img={project1} name='Calculator' description='Introducing a sleek web-based calculator that combines elegance with powerful functionality.'/></a>
                <a className="flex justify-center" href="https://vivek20500.github.io/To-Do-List/"><Card img={project4} name='To-Do List' description='A sleek to-do list web app designed for productivity.'/></a>
                <a className="flex justify-center" href="https://vivek20500.github.io/index/"><Card img={project3} name='Solar System' description='Its a Solar system'/></a>
            </div>
        </div>
    )
}

export default Projects;