import { motion as Motion } from 'framer-motion';
import { SectionShell } from './MotionPrimitives';
import { staggerGroup } from './motionVariants';
import SectionHeading from './SectionHeading';

const skillGroups = [
  {
    title: 'Interface engineering',
    focus: 'Frontend craft',
    summary: 'Building responsive, polished product interfaces with reusable React components and clean Tailwind systems.',
    tools: ['React', 'Tailwind CSS', 'Framer Motion', 'Responsive UI'],
    highlight: 'Frontend',
    size: 'lg:col-span-2',
  },
  {
    title: 'Backend logic',
    focus: 'API foundations',
    summary: 'Creating reliable server flows, authentication logic, protected routes, and structured API behavior.',
    tools: ['Node.js', 'Express', 'JWT', 'REST APIs', 'Django'],
    highlight: 'Backend',
    size: '',
  },
  {
    title: 'Data systems',
    focus: 'Structured data',
    summary: 'Working with relational and document data models for storage, querying, and practical product features.',
    tools: ['MySQL', 'MongoDB', 'Python'],
    highlight: 'Database',
    size: '',
  },
  {
    title: 'Product performance',
    focus: 'Launch quality',
    summary: 'Keeping builds fast, accessible, responsive, and production-ready across devices and screen sizes.',
    tools: ['Vite', 'SEO', 'Accessibility', 'Optimization'],
    highlight: 'Learning',
    size: 'lg:col-span-2',
  },
];

const toolIcons = {
  'React': 'bi bi-filetype-jsx text-cyan-200',
  'Tailwind CSS': 'bi bi-wind text-cyan-200',
  'Framer Motion': 'bi bi-stars text-violet-200',
  'Responsive UI': 'bi bi-phone text-slate-200',
  'Node.js': 'bi bi-braces text-emerald-200',
  'Express': 'bi bi-diagram-3 text-slate-200',
  'JWT': 'bi bi-shield-lock text-amber-200',
  'REST APIs': 'bi bi-arrow-left-right text-sky-200',
  'Django': 'bi bi-server text-emerald-200',
  'MySQL': 'bi bi-database text-blue-200',
  'MongoDB': 'bi bi-collection text-emerald-200',
  'Python': 'bi bi-filetype-py text-yellow-200',
  'Vite': 'bi bi-lightning-charge text-violet-200',
  'SEO': 'bi bi-search text-cyan-200',
  'Accessibility': 'bi bi-universal-access text-pink-200',
  'Optimization': 'bi bi-speedometer2 text-orange-200',
};

function Skills() {
  return (
    <SectionShell id="skills">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="A modern stack with visual range."
          description="No fake skill percentages. Just a clean view of the areas I work in, the tools I use, and the product outcomes I focus on."
        />

        <Motion.div className="grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3" variants={staggerGroup}>
          {skillGroups.map((skill, index) => (
            <Motion.article
              key={skill.title}
              className={`group glass-panel relative overflow-hidden rounded-[2rem] p-6 ${skill.size}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.07, ease: 'easeOut' }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/[0.035] blur-3xl transition group-hover:bg-white/[0.055]" />
              <div className="relative flex h-full flex-col justify-between gap-10">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-bold uppercase tracking-[0.32em] text-slate-500">{skill.title}</p>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-black text-slate-300">
                      {skill.focus}
                    </span>
                  </div>

                  <div className="mt-8 grid gap-5">
                    <div>
                      <p className="text-3xl font-black leading-none tracking-[-0.05em] text-white sm:text-4xl">
                        {skill.highlight}
                      </p>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                        {skill.summary}
                      </p>
                    </div>

                    <div className="grid gap-2 sm:grid-cols-2">
                      {skill.tools.map((tool, toolIndex) => (
                        <Motion.div
                          key={tool}
                          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.45, delay: index * 0.06 + toolIndex * 0.05, ease: 'easeOut' }}
                        >
                          <i aria-hidden="true" className={`${toolIcons[tool] || 'bi bi-code-slash text-slate-300'} text-base`} />
                          <span className="text-sm font-semibold text-slate-300">{tool}</span>
                        </Motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.26em] text-slate-500">
                    Practical, product-focused implementation
                  </p>
                </div>
              </div>
            </Motion.article>
          ))}
        </Motion.div>

        <Motion.div
          className="mt-6 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="flex min-w-max animate-marquee gap-4 text-5xl font-black uppercase tracking-[-0.05em] text-white/10 sm:text-7xl">
            {['React', 'Tailwind', 'Motion', 'Node', 'SQL', 'UX', 'Performance', 'SEO', 'Python', 'Data Analytics', 'Django', 'Flask'].map((item) => (
              <span key={item}>{item}</span>
            ))}
            {['React', 'Tailwind', 'Motion', 'Node', 'SQL', 'UX', 'Performance', 'SEO'].map((item) => (
              <span key={`${item}-copy`}>{item}</span>
            ))}
          </div>
        </Motion.div>
      </div>
    </SectionShell>
  );
}

export default Skills;
