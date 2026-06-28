import { AnimatePresence, motion as Motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './index.css';

const loaderLabels = ['Loading interface', 'Preparing motion', 'Almost ready'];

function BackgroundSystem() {
  const reduceMotion = useReducedMotion();
  const particles = Array.from({ length: 18 }, (_, index) => index);
  const icons = ['React', 'JS', 'SQL', 'Node', 'UX', 'API'];

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#03050a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(0,229,255,0.16),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(168,85,247,0.18),transparent_25%),radial-gradient(circle_at_50%_86%,rgba(16,185,129,0.12),transparent_28%)]" />
      <div className="absolute inset-0 bg-grid opacity-[0.28]" />
      <div className="absolute left-1/2 top-0 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[130px]" />
      <div className="absolute bottom-[-16rem] right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-fuchsia-500/10 blur-[120px]" />
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <span
            key={particle}
            className="particle-dot"
            style={{
              left: `${(particle * 37) % 100}%`,
              top: `${(particle * 53) % 100}%`,
              animationDelay: `${particle * 0.55}s`,
              animationDuration: `${10 + (particle % 6)}s`,
            }}
          />
        ))}
      </div>
      {!reduceMotion ? (
        <div className="absolute inset-0 hidden lg:block">
          {icons.map((icon, index) => (
            <Motion.span
              key={icon}
              className="floating-tech"
              style={{
                left: `${10 + index * 15}%`,
                top: `${18 + ((index * 19) % 58)}%`,
              }}
              animate={{ y: [-8, 10, -8], rotate: [-3, 3, -3], opacity: [0.24, 0.44, 0.24] }}
              transition={{ duration: 7 + index, delay: index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
            >
              {icon}
            </Motion.span>
          ))}
        </div>
      ) : null}
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
  const [labelIndex, setLabelIndex] = useState(0);

  // Cycle through the unused loaderLabels array
  useEffect(() => {
    const interval = setInterval(() => {
      setLabelIndex((prev) => (prev + 1) % loaderLabels.length);
    }, 400); // Change text every 400ms
    return () => clearInterval(interval);
  }, []);

  return (
    <Motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#03050a] select-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
    >
      {/* Premium Ambient Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-500/[0.05] blur-[100px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] bg-fuchsia-500/[0.06] blur-[60px] rounded-full" />
      </div>

      <div className="relative flex flex-col items-center gap-6">
        {/* The Spinner Core */}
        <div className="relative h-16 w-16 flex items-center justify-center">
          {/* Subtle outer static track */}
          <div className="absolute inset-0 rounded-full border-[1.5px] border-white/[0.04]" />
          
          {/* Active Gradient Spinner (matches your cyan/fuchsia theme) */}
          <Motion.div
            className="absolute inset-0 rounded-full border-[1.5px] border-transparent border-t-cyan-400 border-r-fuchsia-400"
            animate={{ rotate: 360 }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Core Glow Pulse */}
          <Motion.div
            className="h-2.5 w-2.5 rounded-full bg-gradient-to-tr from-cyan-400 to-fuchsia-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
            animate={{ scale: [0.9, 1.25, 0.9], opacity: [0.7, 1, 0.7] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Dynamic Micro-Typo wrapping the loaderLabels */}
        <div className="h-4 overflow-hidden relative w-32 flex justify-center">
          <AnimatePresence mode="popLayout">
            <Motion.span
              key={labelIndex}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: [0.5, 1, 0.5] }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute text-[10px] font-medium tracking-[0.25em] text-slate-400 uppercase"
            >
              {loaderLabels[labelIndex]}
            </Motion.span>
          </AnimatePresence>
        </div>
      </div>
    </Motion.div>
  );
}

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Slightly extended to 1.5s so the user can enjoy the label cycle
    const timer = window.setTimeout(() => setLoaded(true), 1500); 
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-100">
      <BackgroundSystem />
      <CursorGlow />
      
      <AnimatePresence>
        {!loaded && <Loader />}
      </AnimatePresence>

      <Motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
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