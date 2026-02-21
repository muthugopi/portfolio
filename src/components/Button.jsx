import React from "react";

function Button({ content, className = "" }) {
  return (
    <button
      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 
      bg-[var(--btn-primary-bg)] 
      hover:bg-[var(--btn-primary-hover)] 
      text-[var(--btn-primary-text)] 
      ${className}`}
    >
      {content}
    </button>
  );
}

export default Button;