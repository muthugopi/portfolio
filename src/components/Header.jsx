import React from "react";
import Button from "./Button";

function Header() {
  return (
    <header className="min-h-[80vh] header-bg my-6 mt-6 sm:my-8 md:my-10 md:py-16 pt-10 flex flex-col items-center justify-center text-center gap-4 sm:gap-5">
      <div className="symbol-rotate text-2xl sm:text-3xl">()</div>

      <div>
        <p className="py-2 px-3 text-[13px] sm:text-[14px] non-italic text-[#94a3b8] border border-[#6366f1] rounded-full">
          <i className="bi pe-2 bi-stars"></i>
          Available for Opportunities
        </p>
      </div>

      <div>
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl py-3 opacity-1 animate-fade font-bold bg-gradient-to-r from-indigo-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Muthugopi J
        </h1>
      </div>

      <div className="py-3 sm:py-4 md:py-5">
        <p className="flex gap-3 sm:gap-4 md:gap-5 justify-center text-lg sm:text-xl md:text-2xl items-center flex-wrap">
          <i className="bi bi-code"></i>
          <span className="hero-skill">MERN Stack Developer</span>

          <span className="text-[#6366f1]">|</span>

          <i className="bi bi-bar-chart-line"></i>
          <span className="hero-skill">Data Analyst</span>

          <span className="text-[#6366f1]">|</span>

          <i className="bi bi-database"></i>
          <span className="hero-skill">SQL Developer</span>
        </p>
      </div>

      <div>
        <p className="hero-p text-sm sm:text-base md:text-lg px-2 sm:px-0">
          B.E Electronics And Communication Engineering At Ramco Institute Of Technology
        </p>
      </div>

      <div className="flex gap-5 sm:gap-8 md:gap-10 mt-6 sm:mt-8 md:mt-10">
        <Button className="button-comp px-6 sm:px-8 md:px-10" content="View Project" />

        <button className="hero-con button-comp text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 font-semibold rounded-xl hover:shadow-[var(--btn-secondary-outline-hover-bg)] transition duration-300">
          Contact
        </button>
      </div>

      <p className="arrow text-base sm:text-lg mt-6 sm:mt-8 md:mt-10">
        <i className="bi bi-arrow-down"></i>
      </p>
    </header>
  );
}

export default Header;