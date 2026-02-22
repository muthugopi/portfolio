import React from 'react';

function SkillCard(props) {
  return (
    <section className="skill-card group relative ">
      <span
        className={`absolute -inset-1 rounded-2xl opacity-0 
    group-hover:opacity-60 blur-3xl transition duration-500 
    bg-gradient-to-r ${props.gradient} -z-10`}
      ></span>
      <div className="w-[400px] border bg-slate-900/70 border-[#475569]/30 p-6 rounded-2xl card-shadow relative animation duration-300 overflow-hidden">

        {/* Modern Bright Circles (Like Gradient Vibe) */}
        <span className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></span>
        <span className="absolute top-6 right-4 w-48 h-48 bg-purple-500/18 rounded-full blur-3xl"></span>
        <span className="absolute bottom-0 left-10 w-36 h-36 bg-cyan-500/15 rounded-full blur-3xl"></span>
        <span className="absolute top-24 left-28 w-32 h-32 bg-indigo-500/12 rounded-full blur-3xl"></span>

        <div className="head flex items-center gap-3 relative z-10">
          <h1 className={`text-2xl bg-gradient-to-r ${props.gradient} p-3 rounded-lg text-white shadow-lg`}>
            <i className={`bi ${props.icon}`}></i>
          </h1>
          <h1 className="text-[20px] font-semibold text-gray-200">{props.title}</h1>
        </div>

        <div className="tech mt-4 py-2 mb-2 relative z-10">
          {props.tech?.map((item, index) => (
            <div
              key={index}
              className="px-[16px] py-[8px] mb-[8px] bg-white/5 border border-[#475569]/30 rounded-md flex items-center gap-2 backdrop-blur-sm"
            >
              <i className="bi bi-circle-fill text-[8px] text-purple-400"></i>
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillCard;