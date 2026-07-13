import { AnimatePresence, motion as Motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SectionShell } from './MotionPrimitives';
import SectionHeading from './SectionHeading';

const certificates = [
  {
    title: 'BIZNOVEXA // P1',
    issuer: 'CSBS',
    year: '2026',
    description: 'Secured Pole Position and converted it into victory',
    image: '/CSBS_1st.jpg',
  },
  {
    title: 'CODEATHON // P1',
    issuer: 'ECE [HOME DEPT]',
    year: '2026',
    description: 'Lights Out • Event Win ',
    image: '/ECE_1st.jpg',
  },
  {
    title: "ASTRYX'26 // P2",
    issuer: 'IT',
    year: '2026',
    description: 'Started on Pole • Finished P2 ',
    image: '/IT_2nd.jpg',
  },
  {
    title: 'TECHQUEST // P3',
    issuer: 'IT',
    year: '2026',
    description: 'Consistent Pace • Podium Finish',
    image: '/IT_3rd.jpg',
  },
];

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    if (!selectedCertificate) {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [selectedCertificate]);

  return (
    <SectionShell id="certificates">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          align="left"
          eyebrow="Achievements"
          title="Academic milestones, arranged as a clean showcase."
          description="These recognitions are presented in a balanced grid so each one feels clear, polished, and easy to explore."
        />

        <div className="grid gap-6 sm:grid-cols-2 2xl:grid-cols-4">
          {certificates.map((certificate, index) => (
            <Motion.button
              key={certificate.title}
              type="button"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left backdrop-blur-xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCertificate(certificate)}
            >
              <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-cyan-300/80 via-cyan-400/20 to-transparent" />
              <div className="absolute left-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-slate-950/70 text-[11px] font-bold text-cyan-200/90 backdrop-blur-md">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-200 backdrop-blur-md">
                {certificate.year}
              </div>

              <div className="relative overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-64 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
              </div>

              <div className="relative -mt-10 px-5 pb-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-cyan-200/80">
                  {certificate.issuer}
                </p>
                <h3 className="mt-2 text-xl font-black leading-tight tracking-[-0.02em] text-white">
                  {certificate.title}
                </h3>

                <div className="mt-4 border-t border-white/10 pt-4">
                  <p className="text-sm leading-6 text-slate-400">{certificate.description}</p>
                </div>
              </div>
            </Motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCertificate ? (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/85 px-4 py-6 backdrop-blur-xl"
            onClick={() => setSelectedCertificate(null)}
          >
            <Motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/95 shadow-[0_30px_120px_rgba(2,6,23,0.75)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm font-semibold text-white backdrop-blur-md"
              >
                Close
              </button>

              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="max-h-[78vh] w-full object-contain"
              />

              <div className="border-t border-white/10 bg-white/[0.03] p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-cyan-200/80">
                  {selectedCertificate.issuer}
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-white">
                  {selectedCertificate.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-400">
                  {selectedCertificate.description}
                </p>
              </div>
            </Motion.div>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </SectionShell>
  );
}

export default Certificates;