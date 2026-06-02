import { motion as Motion } from 'framer-motion';

function Footer() {
  return (
    <Motion.footer
      className="relative border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl font-black tracking-[-0.05em] text-white">Muthugopi J</p>
          <p className="mt-2">Electronics and Communication Engineering</p>
        </div>
        <div className="flex flex-wrap gap-4 font-bold">
          {[
            ['Home', '#home'],
            ['Projects', '#projects'],
            ['Contact', '#contact'],
          ].map(([label, href]) => (
            <Motion.a key={href} href={href} className="transition hover:text-white focus-ring" whileHover={{ y: -2 }}>
              {label}
            </Motion.a>
          ))}
        </div>
        <p>Copyright 2026. Built with React, Tailwind, and Framer Motion.</p>
      </div>
    </Motion.footer>
  );
}

export default Footer;
