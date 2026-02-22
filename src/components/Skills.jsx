import React from 'react'
import SkillCard from './SkillCard'

function Skills() {
    return (
        <section className="skills my-20">
            <div className='flex justify-even flex-col mb-[64px] items-center'>
                <h1 className='text-3xl sm:text-4xl md:text-[48px] font-bold bg-gradient-to-r from-indigo-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent'>
                    Skills & Expertise
                </h1>
                <hr className='bg-gradient-to-r from-indigo-400 via-indigo-500 to-purple-500 h-1 w-[100px] sm:w-[140px] rounded mt-3' />
                <p className='text-[16px] sm:text-[18px] text-gray-400 text-center mt-4'>Technologies and tools I work with</p>
            </div>
            
            <div className="skills grid grid-cols-1 md:grid-cols-3 mx-auto max-w-7xl gap-6 justify-items-center">
                <SkillCard icon="bi-code-slash"  title="Frontend Development" gradient='from-pink-500 to-purple-500'  tech={["React", "Tailwind", "JavaScript"  ]}/>
                <SkillCard icon="bi-gear "  title="Backend Development" gradient='from-cyan-500 to-blue-500'  tech={["Node.js", "Express", "JWT"]}/>
                <SkillCard icon="bi-database-check "  title="Database" gradient='from-teal-500 to-green-500'  tech={["MySQL", "MongoDB", "SQLlite"]}/>
                <SkillCard icon="bi-terminal "  title="Programming" gradient='from-cyan-500 to-teal-500'  tech={["C++", "Pawn (SA:MP)", "Lua"]}/>
                <SkillCard icon="bi-bar-chart-line "  title="Data Analysis" gradient='from-cyan-500 to-teal-500'  tech={["numpy", "pandas", "matplotlib"]}/>
                <SkillCard icon="bi-tools "  title="Tools" gradient='from-cyan-500 to-teal-500'  tech={["VS Code", "Sublime Code", "Git - Github"]}/>
            </div>
            <div className='border border bg-slate-900/70 my-16 max-w-6xl mx-auto border-[#475569]/30 p-4 sm:p-6 rounded-2xl card-shadow relative animation duration-300 overflow-hidden text-center'>
                <h1><i className="bi bi-code-slash text-purple-400 text-[40px] sm:text-[48px]"></i></h1>
                <p className='text-[20px] sm:text-[24px] font-semibold mb-[8px] '>Always Learning</p>
                <p className='text-[14px] sm:text-[16px] text-gray-400 '>Constantly exploring new technologies and expanding my skill set to stay ahead in the ever-evolving tech landscape</p>
            </div>
        </section>
    )
}

export default Skills