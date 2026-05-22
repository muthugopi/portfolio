import { motion as Motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const principles = [
  { label: 'Clarity', value: 'Interfaces that explain themselves without flattening the personality.' },
  { label: 'Motion', value: 'Scroll reveals, hover states, and transitions with purpose and restraint.' },
  { label: 'Systems', value: 'Reusable React structures that keep speed, SEO, and maintenance in view.' },
];

const timeline = [
  {
    period: '2026 focus',
    title: 'Premium frontend products',
    detail: 'Designing dark-first React experiences with bento layouts, glass surfaces, and polished motion.',
  },
  {
    period: '2025',
    title: 'Full-stack web systems',
    detail: 'Building authentication, community, and data-backed products with clean API flows.',
  },
  {
    period: '2024',
    title: 'Data and algorithms',
    detail: 'Sharpening problem solving through SQL workflows, C++ fundamentals, and automation.',
  },
];

function About() {
  return (
    <section id="about" className="relative isolate px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          align="left"
          eyebrow="Profile"
          title="Design taste meets engineering discipline."
          description="The trend research was clear: the strongest 2026 tech portfolios are dark-first, typography-led, bento-organized, and motion-aware. This redesign applies those ideas while keeping the content fast and readable."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Motion.div
            className="sticky top-28 h-fit overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl" />
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-cyan-200">Operating mode</p>
            <h3 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white">Build the thing. Make it feel inevitable.</h3>
            <p className="mt-5 text-base leading-8 text-slate-400">
              I care about the moment a visitor decides the work is credible. That means sharp hierarchy, generous rhythm, and interactions that reward attention.
            </p>
          </Motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((item, index) => (
              <Motion.article
                key={item.label}
                className={`${index === 0 ? 'md:col-span-2' : ''} glass-panel group relative overflow-hidden rounded-[2rem] p-6`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: 'easeOut' }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-0 transition group-hover:opacity-100" />
                <p className="text-sm font-bold uppercase tracking-[0.32em] text-slate-500">{item.label}</p>
                <p className="mt-5 text-2xl font-bold leading-tight text-white sm:text-3xl">{item.value}</p>
              </Motion.article>
            ))}

            <Motion.div
              className="glass-panel rounded-[2rem] p-6 md:col-span-2"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="grid gap-7">
                {timeline.map((item, index) => (
                  <div key={item.title} className="relative grid gap-4 pl-8 md:grid-cols-[12rem_1fr] md:gap-8">
                    <span className="timeline-dot absolute left-0 top-2" />
                    {index !== timeline.length - 1 ? <span className="absolute left-[5px] top-7 h-[calc(100%+0.75rem)] w-px bg-white/10" /> : null}
                    <p className="text-xs font-bold uppercase tracking-[0.32em] text-cyan-200/80">{item.period}</p>
                    <div>
                      <h3 className="text-2xl font-black tracking-[-0.03em] text-white">{item.title}</h3>
                      <p className="mt-2 text-base leading-7 text-slate-400">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
