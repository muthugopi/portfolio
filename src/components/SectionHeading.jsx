import { motion as Motion } from 'framer-motion';

function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const centered = align === 'center';

  return (
    <Motion.div
      className={`mb-12 ${centered ? 'mx-auto text-center' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.38em] text-cyan-200/90">
        {eyebrow}
      </p>
      <h2 className="font-display text-[clamp(2.6rem,6vw,5.9rem)] font-black leading-[0.92] tracking-[-0.055em] text-white">
        {title}
      </h2>
      {description ? (
        <p className={`mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      ) : null}
    </Motion.div>
  );
}

export default SectionHeading;
