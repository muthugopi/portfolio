import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import developerImage from '../assets/developer.png';
import { AnimatedCounter, MagneticButton } from './MotionPrimitives';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { label: 'GitHub', icon: 'bi-github', href: 'https://github.com/muthugopi' },
  { label: 'LinkedIn', icon: 'bi-linkedin', href: 'https://www.linkedin.com/in/muthugopi-j-848459371/' },
  { label: 'Email', icon: 'bi-envelope-fill', href: 'mailto:muthugopij@gmail.com' },
];

function Header() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.35], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.25]);

  return (
    <header id="home" className="relative isolate min-h-screen overflow-hidden px-4 pb-16 pt-5 sm:px-6 lg:px-8">
      <Motion.nav
        className="fixed left-1/2 top-4 z-40 w-[min(94vw,74rem)] -translate-x-1/2 rounded-full border border-white/10 bg-slate-950/55 px-4 py-3 shadow-panel backdrop-blur-2xl"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
      >
        <div className="flex items-center justify-between gap-4 text-sm">
          <a href="#home" className="rounded-full px-2 font-black uppercase tracking-[0.28em] text-white focus-ring">
            Muthugopi J
          </a>
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 transition hover:bg-white/10 hover:text-white focus-ring"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="mailto:muthugopij@gmail.com"
            className="rounded-full bg-cyan-200 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-950 transition hover:bg-white focus-ring"
          >
            Hire me
          </a>
        </div>
      </Motion.nav>

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center pt-24">
        <Motion.div style={{ y, opacity }} className="pointer-events-none absolute right-4 top-28 hidden text-right lg:block">
          <p className="text-[10rem] font-black leading-none tracking-[-0.08em] text-white/[0.035]">2026</p>
        </Motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.72fr]">
          <Motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-slate-300 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
              Open for product teams
            </div>

            <h1 className="max-w-6xl font-display text-[clamp(2.5rem,8vw,6rem)] font-black leading-[0.78] tracking-[-0.085em] text-white">
              Electronics
              <span className="block bg-gradient-to-r from-cyan-200 via-violet-200 to-fuchsia-300 bg-clip-text text-transparent">
                Communication
              </span>
              engineer.
            </h1>

            <div className="mt-8 grid gap-6 lg:grid-cols-[0.74fr_0.26fr] lg:items-end">
              <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                I build premium React interfaces with cinematic motion, clean architecture, and the kind of polish that makes products feel expensive.
              </p>
              <div className="hidden justify-end gap-3 lg:flex">
                {socials.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-xs font-black text-slate-300 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-200 focus-ring"
                    aria-label={item.label}
                  >
                    <i aria-hidden="true" className={`bi ${item.icon} text-lg`} />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <MagneticButton href="#projects" className="bg-white text-slate-950 shadow-[0_0_36px_rgba(103,232,249,0.25)] hover:-translate-y-1">
                View selected work
              </MagneticButton>
              <MagneticButton href="#contact" className="border border-white/15 bg-white/[0.04] text-white backdrop-blur-xl hover:-translate-y-1 hover:border-cyan-300/40">
                Start a project
              </MagneticButton>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 32, rotate: 1.5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.25 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-white/[0.04] blur-3xl" />
            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-black/30">
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#05070d] to-transparent" />
                <img
                  src={developerImage}
                  alt="Muthugopi J developer portrait"
                  className="relative mx-auto select-none pointer-events-none  h-[17rem] w-full object-contain object-bottom sm:h-[20rem] lg:h-[23rem]"
                />
                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-slate-200 backdrop-blur-xl">
                  Engineer
                </div>
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-black/45 p-3 backdrop-blur-xl">
                    <p className="text-2xl font-black text-white">
                      <AnimatedCounter value={7} suffix="+" />
                    </p>
                    <p className="mt-1 text-xs text-slate-300">React builds</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/45 p-3 backdrop-blur-xl">
                    <p className="text-2xl font-black text-white">
                      <AnimatedCounter value={4} />
                    </p>
                    <p className="mt-1 text-xs text-slate-300">Projects</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-black/30 p-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-bold uppercase tracking-[0.32em] text-cyan-200">Live stack</p>
                  <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-200">available</span>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {[
                    ['React + Tailwind', 'Frontend'],
                    ['Framer Motion', 'User Experience'],
                    ['Node + SQL', 'Backend'],
                  ].map(([title, label], index) => (
                    <Motion.div
                      key={title}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-3"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.55, delay: 0.45 + index * 0.12 }}
                    >
                      <p className="text-sm font-bold text-white">{title}</p>
                      <p className="mt-1 text-xs text-slate-400">{label}</p>
                    </Motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Motion.div>
        </div>

        <div className="mt-16 flex items-center justify-between gap-6 text-xs font-bold uppercase tracking-[0.28em] text-slate-500">
          <span>Scroll</span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/20 via-cyan-300/40 to-transparent" />
          <span>01 / 05</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
