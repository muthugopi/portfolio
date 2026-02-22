import React from 'react'
import Developer from '../assets/developer.png'
import Card from './Card'

function About() {
  return (
    <section className="about px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-10">
      <div className='flex justify-even flex-col items-center'>
        <h1 className='text-3xl sm:text-4xl md:text-[48px] font-bold bg-gradient-to-r from-indigo-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent'>
          About Me
        </h1>
        <hr className='bg-gradient-to-r from-indigo-400 via-indigo-500 to-purple-500 h-1 w-[100px] sm:w-[140px] rounded mt-2' />
      </div>

      <div className="dev flex flex-col lg:flex-row items-center justify-even gap-6 my-8 sm:my-12">
        <div className="img flex justify-center">
          <img src={Developer} className='w-[220px] sm:w-[320px] md:w-[460px] max-w-full' />
        </div>

        <div className='max-w-[600px] text-[14px] sm:text-[16px] text-[#94a3b8]'>
          <div>
            <p className="py-1 px-3 w-fit my-2 text-[11px] sm:text-[13px] bg-[#6366f1]/10 text-[#94a3b8] border border-[#6366f1] rounded-full">
              <i className="bi pe-2 bi-mortarboard-fill"></i>
              Student Developer
            </p>
          </div>

          <h1 className='text-[20px] sm:text-[24px] md:text-[30px] font-semibold'>
            Pursuing B.E ECE at <br />
            <span className='bg-gradient-to-r from-indigo-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent'>
              Ramco Institute Of Technology
            </span>
          </h1>

          <p className='mt-4 mb-6 leading-relaxed'>
            I'm a passionate developer with a strong interest in full-stack web development, data analysis, and competitive programming. I love building scalable applications and solving complex problems using modern technologies.
          </p>

          <p className='mb-6 leading-relaxed'>
            My expertise spans across the MERN stack, data analysis with Python, and low-level programming with C++. I'm constantly learning and exploring new technologies to enhance my skill set and create impactful solutions.
          </p>

          <div className='flex flex-wrap gap-3'>
            <p className="py-2 px-3 text-[12px] sm:text-[14px] text-blue-300 border border-blue-500 rounded-lg bg-blue-500/10">
              <i className="bi pe-2 bi-tools"></i>
              Problem Solver
            </p>

            <p className="py-2 px-3 text-[12px] sm:text-[14px] text-purple-300 border border-purple-500 rounded-lg bg-purple-500/10">
              <i className="bi pe-2 bi-lightning"></i>
              Quick Learner
            </p>

            <p className="py-2 px-3 text-[12px] sm:text-[14px] text-cyan-300 border border-cyan-500 bg-cyan-500/10 rounded-lg">
              <i className="bi pe-2 bi-gear"></i>
              Team Lead
            </p>
          </div>
        </div>
        
      </div>
      <div className="cards grid grid-cols-1 md:grid-cols-3 gap-6 ">
            <Card icon='bi bi-trophy ' content='5+' seconderyContent='Proects Completed'/>
            <Card icon='bi bi-code-slash ' content='12+' seconderyContent='Tech Stack'/>
            <Card icon='bi bi-suitcase' content='Intermediate' seconderyContent='Experience Level'/>
        </div>
    </section>
  )
}

export default About