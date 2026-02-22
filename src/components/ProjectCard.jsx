import React from "react";

function ProjectCard({
    icon,
    iconGradient,
    title,
    content,
    techStack,
    projectLink,
    active
}) {
    return (
        <div className="group relative h-full flex flex-col w-full border bg-slate-900/70 border-[#475569]/30 p-6 rounded-2xl overflow-hidden duration-300 hover:scale-[1.02] transition-all">
            <span
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition duration-500 bg-gradient-to-r ${iconGradient}`}
            ></span>
            <span className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></span>
            <span className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></span>

            <div className="relative z-10">
                <div className={`w-fit p-4 rounded-xl bg-gradient-to-r ${iconGradient} text-white shadow-lg`}>
                    <i className={`bi ${icon} text-2xl`}></i>
                </div>
            </div>

            <h2 className="text-[24px] font-semibold text-gray-200 mt-4 relative z-10">
                {title}
            </h2>

            <p className="text-gray-400 mt-3 text-[16px] leading-relaxed relative z-10">
                {content}
            </p>
            <div className="flex flex-wrap gap-2 mt-4 relative z-10">
                {techStack?.map((tech, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 text-[12px] bg-white/5 border border-[#475569]/30 rounded-md text-gray-300"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex-grow"></div>

            {active ? (
                <a
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 inline-block text-center px-4 py-2 rounded-lg bg-gradient-to-r ${iconGradient} text-white font-medium hover:opacity-90 transition relative z-10`}
                >
                    Live Demo →
                </a>
            ) : (
                <button
                    disabled
                    className="mt-6 px-4 py-2 rounded-lg bg-gray-700 text-gray-400 cursor-not-allowed relative z-10"
                >
                    🚧 Deployment in Progress
                </button>
            )}
            
        </div>
    );
}

export default ProjectCard;