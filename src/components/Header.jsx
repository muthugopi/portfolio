import React from "react";
import Button from "./Button";

function Header() {
  return (
    <header className="min-h-[70vh] header-bg my-[130px] sm:my-10 md:my-[150px] py-8 sm:py-10 flex flex-col items-center justify-center text-center gap-3 sm:gap-4">
      <div className="symbol-rotate text-xl sm:text-2xl">()</div>

      <div>
        <p className="py-1 px-3 text-[13px] sm:text-[14px] non-italic text-[#94a3b8] border border-[#6366f1] rounded-full">
          <i className="bi pe-2 bi-stars"></i>
          Available for Opportunities
        </p>
      </div>

      <div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl py-3 opacity-1 animate-fade font-bold bg-gradient-to-r from-indigo-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Muthugopi J
        </h1>
      </div>

      <div className="py-2 sm:py-3 md:py-4">
        <p className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center text-md sm:text-lg md:text-xl items-center">

          <span className="flex items-center gap-2">
            <i className="bi bi-code-slash"></i>
            <span className="hero-skill">MERN Stack Developer</span>
          </span>

          <span className="text-[#6366f1] hidden md:inline">|</span>

          <span className="flex items-center gap-2">
            <i className="bi bi-bar-chart-line"></i>
            <span className="hero-skill">Data Analyst</span>
          </span>

          <span className="text-[#6366f1] hidden md:inline">|</span>

          <span className="flex items-center gap-2">
            <i className="bi bi-database"></i>
            <span className="hero-skill">SQL Developer</span>
          </span>

        </p>
      </div>

      <div>
        <p className="hero-p max-w-[760px] w-full text-sm sm:text-base md:text-lg px-4 sm:px-0">
          B.E ECE Student Passionate About full-stack development and data driven solution
        </p>
      </div>

      <div className="flex gap-3 sm:gap-6 md:gap-8 mt-5 sm:mt-6 md:mt-8">
        <Button className="button-comp px-4 sm:px-6 md:px-10" onClick={() => document.getElementById('project').scrollIntoView({ behavior: 'smooth' })} content="View Project" />

        <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="hero-con button-comp text-white px-4 sm:px-6 md:px-10 py-2 sm:py-3 font-semibold rounded-xl hover:shadow-[var(--btn-secondary-outline-hover-bg)] transition duration-300">
          Contact
        </button>
      </div>

      <p className="arrow text-sm sm:text-base mt-5 sm:mt-6 md:mt-8">
        <i className="bi bi-arrow-down"></i>
      </p>
    </header>
  );
}

export default Header;