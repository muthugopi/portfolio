import { AnimatePresence, motion as Motion } from 'framer-motion';
import { Forminit } from 'forminit';
import { useEffect, useState } from 'react';
import { MagneticButton, SectionShell } from './MotionPrimitives';
import SectionHeading from './SectionHeading';

const socialLinks = [
  { label: 'LinkedIn', icon: 'bi-linkedin', href: 'https://www.linkedin.com/in/muthugopi-j-848459371/' },
  { label: 'GitHub', icon: 'bi-github', href: 'https://github.com/muthugopi' },
  { label: 'Email', icon: 'bi-envelope-fill', href: 'mailto:muthugopij@gmail.com' },
];

const forminit = new Forminit();
const FORMINIT_FORM_ID = 'v83iyi2tviz';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!showSuccess) return undefined;
    const timeout = window.setTimeout(() => setShowSuccess(false), 5000);
    return () => window.clearTimeout(timeout);
  }, [showSuccess]);

  const handleChange = (event) => {
    const fieldNames = {
      'fi-sender-fullName': 'name',
      'fi-sender-email': 'email',
      'fi-text-message': 'message',
    };
    setFormData((current) => ({ ...current, [fieldNames[event.target.name]]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    setIsSubmitting(true);
    setStatus('Sending your message...');

    try {
      const { data, error } = await forminit.submit(FORMINIT_FORM_ID, new FormData(form));

      if (error || !data) {
        setStatus(error?.message || 'Your message could not be sent. Please try again.');
      } else {
        setFormData({ name: '', email: '', message: '' });
        setStatus('Message sent. I will reply soon.');
        setShowSuccess(true);
      }
    } catch (error) {
      setStatus(error?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionShell id="contact">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let us build the sharp version."
          description="A minimal contact section keeps the final conversion clean: direct form, direct email, and social links with no visual clutter."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr]">
          <Motion.form
            onSubmit={handleSubmit}
            aria-busy={isSubmitting}
            className="glass-panel rounded-[2rem] p-6 sm:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <input type="hidden" name="_gotcha" value="" />
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-slate-300">
                Name
                <input
                  name="fi-sender-fullName"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="focus-ring rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-slate-600"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-300">
                Email
                <input
                  type="email"
                  name="fi-sender-email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="focus-ring rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-slate-600"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm font-bold text-slate-300">
              Message
              <textarea
                name="fi-text-message"
                rows={7}
                value={formData.message}
                onChange={handleChange}
                required
                className="focus-ring resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-slate-600"
                placeholder="Tell me what you want to build"
              />
            </label>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <MagneticButton
                as="button"
                type="submit"
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
                className="bg-white text-slate-950 hover:-translate-y-1 hover:bg-cyan-100"
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </MagneticButton>
              {status ? <p role="status" aria-live="polite" className={`text-sm font-semibold ${showSuccess ? 'text-cyan-200' : status.startsWith('Sending') ? 'text-slate-300' : 'text-rose-200'}`}>{status}</p> : null}
            </div>
          </Motion.form>

          <Motion.aside
            className="grid gap-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="glass-panel rounded-[2rem] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-cyan-200">Details</p>
              <a href="mailto:muthugopij@gmail.com" className="mt-5 block text-2xl font-black tracking-[-0.04em] text-white hover:text-cyan-200">
                muthugopij@gmail.com
              </a>
              <p className="mt-4 text-base leading-7 text-slate-400">Seithur, Tamil Nadu. Available for frontend roles, freelance builds, and product collaborations.</p>
            </div>

            <div className="glass-panel rounded-[2rem] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-cyan-200">Social</p>
              <div className="mt-5 grid gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="focus-ring flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:border-cyan-300/40"
                  >
                    <span className="flex items-center gap-3"><i aria-hidden="true" className={`bi ${link.icon} text-lg text-cyan-200`} />{link.label}</span>
                    <i aria-hidden="true" className="bi bi-arrow-up-right text-cyan-200" />
                  </a>
                ))}
              </div>
            </div>
          </Motion.aside>
        </div>
      </div>
      <AnimatePresence>
        {showSuccess ? (
          <Motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/55 p-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="presentation"
          >
            <Motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-success-title"
              className="glass-panel relative w-full max-w-md rounded-[2rem] p-8 text-center shadow-2xl"
              onKeyDown={(event) => {
                if (event.key === 'Escape') setShowSuccess(false);
              }}
              initial={{ opacity: 0, scale: 0.9, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <button
                type="button"
                autoFocus
                onClick={() => setShowSuccess(false)}
                className="focus-ring absolute right-4 top-4 rounded-full px-3 py-2 text-sm font-bold text-slate-300 hover:text-white"
                aria-label="Dismiss success message"
              >
                ×
              </button>
              <div aria-hidden="true" className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full border border-cyan-200/30 bg-cyan-200/10 text-2xl text-cyan-200">✓</div>
              <h2 id="contact-success-title" className="text-2xl font-black text-white">Thank you!</h2>
              <p className="mt-3 leading-7 text-slate-300">Your message has been sent successfully. I’ll be in touch soon.</p>
              <p className="mt-4 text-xs font-semibold text-slate-500">This message closes in 5 seconds.</p>
            </Motion.div>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </SectionShell>
  );
}

export default Contact;
