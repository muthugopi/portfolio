function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl font-black tracking-[-0.05em] text-white">Muthugopi J</p>
          <p className="mt-2">Premium React portfolio, rebuilt for a dark-first 2026 web.</p>
        </div>
        <div className="flex flex-wrap gap-4 font-bold">
          <a href="#home" className="transition hover:text-white focus-ring">Home</a>
          <a href="#projects" className="transition hover:text-white focus-ring">Projects</a>
          <a href="#contact" className="transition hover:text-white focus-ring">Contact</a>
        </div>
        <p>Copyright 2026. Built with React, Tailwind, and Framer Motion.</p>
      </div>
    </footer>
  );
}

export default Footer;
