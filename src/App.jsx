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

  useEffect(() => {
    const id = setInterval(() => {
      setLabelIndex((i) => (i + 1) % loaderLabels.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <Motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#03050a] backdrop-blur-sm"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
    >
      {/* Animated background glow */}
      <Motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.05),transparent_70%)]"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Animated particles around loader */}
      {[0, 1, 2].map((i) => (
        <Motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-cyan-400/40"
          animate={{
            x: [0, Math.cos((i * 120) * (Math.PI / 180)) * 60, 0],
            y: [0, Math.sin((i * 120) * (Math.PI / 180)) * 60, 0],
          }}
          transition={{ duration: 4, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <Motion.div className="relative flex w-56 flex-col items-center">

        {/* Monogram container with glow */}
        <Motion.div
          className="relative mb-12 flex h-14 w-14 items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Glow background */}
          <Motion.div
            className="absolute inset-0 rounded-lg bg-cyan-400/20 blur-xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Monogram */}
          <Motion.div
            className="relative flex items-center justify-center rounded-lg border border-cyan-400/30 bg-gradient-to-br from-slate-950 via-[#0e1623] to-slate-950 px-4 py-3 text-sm font-bold tracking-wider text-cyan-100 shadow-2xl"
            animate={{ borderColor: ['rgba(34, 211, 238, 0.3)', 'rgba(34, 211, 238, 0.6)', 'rgba(34, 211, 238, 0.3)'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            MJ
          </Motion.div>
        </Motion.div>

        {/* Progress bar container */}
        <Motion.div
          className="mb-8 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Motion.div className="relative mb-2 h-1 w-full overflow-hidden rounded-full bg-white/5 shadow-inner">
            {/* Gradient progress fill */}
            <Motion.div
              className="h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              animate={{
                marginLeft: ['0%', '15%', '100%'],
                width: ['0%', '70%', '0%'],
              }}
              transition={{ duration: 2, ease: [0.4, 0, 0.2, 1], repeat: Infinity }}
            />
            {/* Glow effect */}
            <Motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-0 blur-sm"
              animate={{ opacity: [0, 0.6, 0] }}
              transition={{ duration: 2, ease: [0.4, 0, 0.2, 1], repeat: Infinity }}
            />
          </Motion.div>
        </Motion.div>

        {/* Label with enhanced styling */}
        <AnimatePresence mode="wait">
          <Motion.div
            key={labelIndex}
            className="text-center"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <Motion.p
              className="text-xs font-medium uppercase tracking-[0.15em] text-cyan-100/60"
            >
              {loaderLabels[labelIndex]}
            </Motion.p>
          </Motion.div>
        </AnimatePresence>

        {/* Subtle dots indicator */}
        <Motion.div className="mt-6 flex gap-2">
          {[0, 1, 2].map((i) => (
            <Motion.div
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-white/20"
              animate={{
                backgroundColor: [
                  'rgba(255, 255, 255, 0.2)',
                  'rgba(34, 211, 238, 0.6)',
                  'rgba(255, 255, 255, 0.2)',
                ],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </Motion.div>

      </Motion.div>
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
