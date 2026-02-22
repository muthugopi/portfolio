import React from "react";

function Button({ content, className = "", onClick }) {
  return (
    <button
      className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-300 
      bg-[var(--btn-primary-bg)] 
      hover:bg-[var(--btn-primary-hover)] 
      text-[var(--btn-primary-text)] 
      ${className}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

export default Button;