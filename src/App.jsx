import { AnimatePresence, motion as Motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import About from './components/About';
import Certificates from './components/Certificates';
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

  useEffect(() => {
    const interval = setInterval(() => {
      setLabelIndex((prev) => (prev + 1) % loaderLabels.length);
    }, 900); // Slower transitions feel more stable and deliberate
    return () => clearInterval(interval);
  }, []);

  // Animation variants for the unique 2x2 grid blocks
  const blockVariants = {
    animate: (i) => ({
      scale: [1, 0.4, 1],
      opacity: [1, 0.3, 1],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.15, // Staggered delay creates a fluid wave effect
      },
    }),
  };

  return (
    <Motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 select-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
    >
      <div className="relative flex flex-col items-center gap-8">
        
        {/* Unique Geometric 2x2 Matrix Loader */}
        <div className="grid grid-cols-2 gap-1.5 w-9 h-9">
          {[0, 1, 2, 3].map((index) => (
            <Motion.div
              key={index}
              custom={index}
              variants={blockVariants}
              animate="animate"
              // Clean, single-color sharp blocks with a subtle radius
              className="w-4 h-4 rounded-[3px] bg-indigo-600 dark:bg-indigo-500"
            />
          ))}
        </div>

        {/* Dynamic Micro-Typography */}
        <div className="h-5 overflow-hidden relative w-48 flex justify-center">
          <AnimatePresence mode="popLayout">
            <Motion.span
              key={labelIndex}
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.25, ease: "linear" }}
              className="absolute text-[11px] font-semibold tracking-[0.2em] text-zinc-500 dark:text-zinc-400 uppercase"
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
        <Certificates />
        <Projects />
        <Contact />
        <Footer />
      </Motion.main>
    </div>
  );
}

export default App;