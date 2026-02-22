import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
    return (
        <section >
            <div className='flex justify-even flex-col mb-[64px] items-center'>
                        <h1 className='text-3xl sm:text-4xl md:text-[48px] font-bold bg-gradient-to-r from-indigo-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent'>
                            Featured Projects
                        </h1>
                        <hr className='bg-gradient-to-r from-indigo-400 via-indigo-500 to-purple-500 h-1 w-[100px] sm:w-[140px] rounded mt-3' />
                        <p className='text-[16px] sm:text-[18px] text-gray-400 text-center mt-4'>Some of my recent works and side projects</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
                <ProjectCard
                    icon="bi-shield-check"
                    iconGradient="from-pink-500 to-purple-500"
                    title="Authenticarion"
                    content="A full-stack MERN application that provides a secure login and registration system, ensuring safe storage and protection of user data."
                    techStack={["React", "Node.js", "MySQL", "JWT"]}
                    projectLink="https://authentication-gray-five.vercel.app"
                    active='true'
                />
                <ProjectCard
                    icon="bi-code-slash"
                    iconGradient="from-cyan-500 to-blue-500"
                    title="Data Analytics Dashboard"
                    content="Interactive dashboard for visualizing complex datasets with real-time charts, graphs, and statistical analysis using Python and modern visualization libraries."
                    techStack={["Python ", "Pandas", "Numpy", "matplotlib", "React"]}
                />
                <ProjectCard
                    icon="bi-code-slash"
                    iconGradient="from-green-500 to-teal-500"
                    title="REST API-Service"
                    content="A full-stack MERN e-commerce platform with authentication, cart system, and admin dashboard."
                    techStack={["React", "Node.js", "MongoDB", "JWT"]}
                />
            </div>
            <div className="flex justify-center my-20">
                <a
                    href="https://github.com/muthugopi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 text-white font-medium hover:scale-105 hover:px-8 transition"
                >
                    <i className="bi bi-github text-xl"></i>
                    View More on GitHub
                </a>
            </div>
        </section>
    )
}

export default Projects