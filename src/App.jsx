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
  return (
    <Motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-[#03050a]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      <div className="relative w-[min(86vw,28rem)] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center shadow-panel backdrop-blur-2xl">
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
        <Motion.div
          className="mx-auto grid h-24 w-24 place-items-center rounded-3xl border border-white/10 bg-black/30 text-3xl font-black text-white"
          animate={{ rotate: [0, 4, -4, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          MJ
        </Motion.div>
        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.42em] text-cyan-200">Initializing interface</p>
        <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
          <Motion.div
            className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.15, ease: 'easeInOut' }}
          />
        </div>
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
