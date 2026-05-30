import { motion as Motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const projects = [
  {
    title: 'Authentication Site',
    label: 'Secure identity product',
    description: 'A polished MERN authentication platform with JWT flows, account states, responsive screens, and trustworthy product UX.',
    tags: ['React', 'Node.js', 'MySQL', 'JWT'],
    href: 'https://authentication-gray-five.vercel.app',
    gradient: 'from-cyan-300 via-violet-400 to-fuchsia-400',
    className: 'lg:col-span-2 lg:row-span-2',
    stat: '01',
  },
  {
    title: 'Emix Community',
    label: 'Social collaboration',
    description: 'A community platform focused on publishing, discovery, moderation-ready structure, and mobile-first interaction.',
    tags: ['React', 'Tailwind', 'Express', 'REST'],
    href: 'https://emix-community.vercel.app',
    gradient: 'from-violet-300 to-pink-500',
    className: '',
    stat: '02',
  },
  {
    title: 'FundFlow CLI',
    label: 'Terminal finance system',
    description: 'A C++ budgeting and transaction manager built for fast local workflows and clean file handling.',
    tags: ['C++', 'CLI', 'STL', 'File I/O'],
    href: null,
    gradient: 'from-amber-300 to-orange-500',
    className: '',
    stat: '03',
  },
];

function ProjectCard({ project, index }) {
  return (
    <Motion.article
      className={`group glass-panel relative min-h-[24rem] overflow-hidden rounded-[2rem] p-6 ${project.className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.75, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -10 }}
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.gradient}`} />
      <div className={`absolute -right-24 -top-20 h-72 w-72 rounded-full bg-gradient-to-br ${project.gradient} opacity-10 blur-3xl transition duration-500 group-hover:opacity-20`} />
      <div className="relative flex h-full flex-col justify-between gap-10">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-cyan-200/80">{project.label}</p>
              <h3 className="mt-5 max-w-2xl text-4xl font-black leading-none tracking-[-0.05em] text-white sm:text-5xl">
                {project.title}
              </h3>
            </div>
            <span className="text-5xl font-black tracking-[-0.08em] text-white/10">{project.stat}</span>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">{project.description}</p>
        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs font-bold text-slate-300">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-7">
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-100 focus-ring"
              >
                Launch case {'->'}
              </a>
            ) : (
              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-slate-400">
                Deployment in progress
              </span>
            )}
          </div>
        </div>
      </div>
    </Motion.article>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative isolate px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          align="left"
          eyebrow="Selected work"
          title="Bento showcases built to be scanned and remembered."
          description="Large project cards, layered glow, clear tags, and decisive calls to action make the work feel more like product launches than static portfolio tiles."
        />

        <div className="grid auto-rows-fr gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <Motion.div
          className="mt-6 flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="max-w-2xl text-base leading-7 text-slate-400">
            Each project prioritizes responsive craft, readable architecture, and an interface that feels finished.
          </p>
          <a
            href="https://github.com/muthugopi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-sm font-black text-cyan-100 transition hover:-translate-y-1 hover:bg-cyan-300 hover:text-slate-950 focus-ring"
          >
            Explore GitHub
          </a>
        </Motion.div>
      </div>
    </section>
  );
}

export default Projects;
