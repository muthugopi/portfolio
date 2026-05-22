import { AnimatePresence, motion as Motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './index.css';

function BackgroundSystem() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#03050a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(0,229,255,0.16),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(168,85,247,0.18),transparent_25%),radial-gradient(circle_at_50%_86%,rgba(16,185,129,0.12),transparent_28%)]" />
      <div className="absolute inset-0 bg-grid opacity-[0.28]" />
      <div className="absolute left-1/2 top-0 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[130px]" />
      <div className="absolute bottom-[-16rem] right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-fuchsia-500/10 blur-[120px]" />
      <div className="scanline absolute inset-0" />
    </div>
  );
}

function CursorGlow() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const x = useSpring(mouseX, { stiffness: 120, damping: 24, mass: 0.2 });
  const y = useSpring(mouseY, { stiffness: 120, damping: 24, mass: 0.2 });

  useEffect(() => {
    const handleMove = (event) => {
      mouseX.set(event.clientX - 160);
      mouseY.set(event.clientY - 160);
    };

    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, [mouseX, mouseY]);

  return (
    <Motion.div
      className="pointer-events-none fixed z-30 hidden h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl lg:block"
      style={{ x, y }}
    />
  );
}

function Loader() {
  const segments = Array.from({ length: 5 }, (_, index) => index);

  return (
    <Motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-[#f4f0e8] text-[#211f1b]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 0.55, ease: 'easeInOut' } }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(255,255,255,0.9),transparent_34%)]" />
      <div className="relative w-[min(86vw,25rem)] text-center">
        <Motion.div
          className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-[#211f1b]/10 bg-[#211f1b] text-xl font-black tracking-[-0.05em] text-[#f4f0e8] shadow-[0_20px_60px_rgba(33,31,27,0.12)]"
          initial={{ opacity: 0, y: 10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          MJ
        </Motion.div>
        <Motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
        >
          <p className="mt-6 font-display text-2xl font-semibold tracking-[-0.04em]">Preparing your experience</p>
          <p className="mt-2 text-sm leading-6 text-[#6f675d]">Loading interface, motion, and project details.</p>
        </Motion.div>

        <div className="mx-auto mt-8 flex max-w-44 items-center justify-center gap-2">
          {segments.map((segment) => (
            <Motion.span
              key={segment}
              className="h-1.5 flex-1 rounded-full bg-[#211f1b]/20"
              animate={{ opacity: [0.25, 1, 0.25], scaleX: [0.75, 1, 0.75] }}
              transition={{
                duration: 1.15,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: segment * 0.12,
              }}
            />
          ))}
        </div>

        <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.32em] text-[#8b8174]">Portfolio 2026</p>
      </div>
    </Motion.div>
  );
}

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 1250);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-100">
      <BackgroundSystem />
      <CursorGlow />
      <AnimatePresence>{!loaded && <Loader />}</AnimatePresence>

      <Motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Motion.main>
    </div>
  );
}

export default App;
