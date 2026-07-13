import { motion as Motion } from 'framer-motion';
import { useState } from 'react';
import { MagneticButton, SectionShell } from './MotionPrimitives';
import SectionHeading from './SectionHeading';

const socialLinks = [
  { label: 'LinkedIn', icon: 'bi-linkedin', href: 'https://www.linkedin.com/in/muthugopi-j-848459371/' },
  { label: 'GitHub', icon: 'bi-github', href: 'https://github.com/muthugopi' },
  { label: 'Email', icon: 'bi-envelope-fill', href: 'mailto:muthugopij@gmail.com' },
];

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://formhanlder.onrender.com/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setStatus('Message sent. I will reply soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(data?.message || 'Failed to send message.');
      }
    } catch {
      setStatus('Something went wrong. Try again.');
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
            className="glass-panel rounded-[2rem] p-6 sm:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-slate-300">
                Name
                <input
                  name="name"
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
                  name="email"
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
                name="message"
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
                className="bg-white text-slate-950 hover:-translate-y-1 hover:bg-cyan-100"
              >
                Send message
              </MagneticButton>
              {status ? <p className="text-sm font-semibold text-cyan-200">{status}</p> : null}
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
    </SectionShell>
  );
}

export default Contact;
