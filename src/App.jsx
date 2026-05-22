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
  const labels = ['Loading interface', 'Preparing motion', 'Almost ready'];
  const [labelIndex, setLabelIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setLabelIndex((i) => (i + 1) % labels.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <Motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#03050a]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
    >
      <div className="flex w-52 flex-col items-center">

        {/* Monogram */}
        <Motion.div
          className="mb-8 flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/8 bg-[#0e1623] text-[13px] font-semibold tracking-tight text-white/90"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          MJ
        </Motion.div>

        {/* Progress line */}
        <Motion.div
          className="mb-5 h-px w-full overflow-hidden rounded-px bg-white/7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Motion.div
            className="h-full bg-white/50"
            animate={{ marginLeft: ['0%', '20%', '100%'], width: ['0%', '60%', '0%'] }}
            transition={{ duration: 2, ease: [0.4, 0, 0.2, 1], repeat: Infinity }}
          />
        </Motion.div>

        {/* Label */}
        <AnimatePresence mode="wait">
          <Motion.p
            key={labelIndex}
            className="text-[11px] uppercase tracking-[0.12em] text-white/22"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {labels[labelIndex]}
          </Motion.p>
        </AnimatePresence>

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
