import { Helmet } from 'react-helmet-async';
import ScrollReveal, { FadeIn } from '../components/ScrollReveal';

export default function Contact() {
    const contactInfo = [
        { icon: 'location_on', label: 'Address', value: 'Site Area, Hyderabad, Sindh', href: 'https://maps.google.com' },
        { icon: 'mail', label: 'Email', value: 'hello@geezek.com', href: 'mailto:hello@geezek.com' },
        { icon: 'call', label: 'Phone', value: '0333 2622962', href: 'tel:+923332622962' },
        { icon: 'schedule', label: 'Hours', value: 'Mon - Fri: 9AM - 6PM PKT', href: null },
    ];

    const socialLinks = [
        { name: 'LinkedIn', icon: 'In', href: 'https://www.linkedin.com/company/geezakitsolutions' },
        { name: 'Twitter', icon: 'X', href: '#' },
        { name: 'Facebook', icon: 'Fb', href: '#' },
        { name: 'Instagram', icon: 'Ig', href: '#' },
    ];

    return (
        <div className="flex flex-col gap-12 lg:gap-16">
            <Helmet>
                <title>Contact Us | Geezek</title>
                <meta name="description" content="Get in touch with Geezek for your next digital project. We offer free consultations for SEO, Web Development, and Social Media services." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative px-5 lg:px-8 pt-8 lg:pt-16 overflow-hidden max-w-7xl mx-auto w-full">
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-accent/10 dark:bg-teal-accent/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

                <div className="text-center max-w-3xl mx-auto relative z-10">
                    <FadeIn delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-soft dark:bg-teal-accent/10 border border-teal-accent/20 dark:border-teal-accent/20 mb-6">
                            <span className="material-symbols-outlined text-teal-accent text-sm">chat</span>
                            <span className="text-xs font-bold text-teal-accent uppercase tracking-wider">Free Consultation</span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-navy dark:text-white leading-tight mb-6">
                            Let's Build <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-teal-accent dark:from-white dark:to-teal-accent">Something Great</span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <p className="text-slate-500 dark:text-slate-400 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
                            Tell us about your project and we'll get back to you within 24 hours with a custom strategy.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Main Content */}
            <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <FadeIn delay={0.4}>
                            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-white/5 shadow-soft p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-navy dark:text-white mb-6">Send Us a Message</h2>

                                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-slate-700 dark:text-slate-300 text-sm font-bold">Full Name *</label>
                                            <input
                                                className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 h-14 px-4 text-base text-slate-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-navy dark:focus:border-teal-accent focus:ring-1 focus:ring-navy dark:focus:ring-teal-accent transition-all"
                                                placeholder="Jane Doe"
                                                type="text"
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-slate-700 dark:text-slate-300 text-sm font-bold">Email Address *</label>
                                            <input
                                                className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 h-14 px-4 text-base text-slate-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-navy dark:focus:border-teal-accent focus:ring-1 focus:ring-navy dark:focus:ring-teal-accent transition-all"
                                                placeholder="jane@company.com"
                                                type="email"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-slate-700 dark:text-slate-300 text-sm font-bold">Phone Number</label>
                                            <input
                                                className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 h-14 px-4 text-base text-slate-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-navy dark:focus:border-teal-accent focus:ring-1 focus:ring-navy dark:focus:ring-teal-accent transition-all"
                                                placeholder="+92 300 1234567"
                                                type="tel"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-slate-700 dark:text-slate-300 text-sm font-bold">Company Name</label>
                                            <input
                                                className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 h-14 px-4 text-base text-slate-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-navy dark:focus:border-teal-accent focus:ring-1 focus:ring-navy dark:focus:ring-teal-accent transition-all"
                                                placeholder="Acme Inc."
                                                type="text"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <label className="text-slate-700 dark:text-slate-300 text-sm font-bold">I'm interested in *</label>
                                        <div className="flex flex-wrap gap-2">
                                            {['Web Development', 'SEO', 'Social Media', 'Branding', 'E-Commerce', 'Other'].map((service, i) => (
                                                <label key={service} className="cursor-pointer group">
                                                    <input defaultChecked={i === 0} className="peer hidden" name="service" type="radio" />
                                                    <div className="px-5 py-2.5 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-sm font-semibold transition-all group-hover:border-navy/30 dark:group-hover:border-teal-accent/50 peer-checked:border-navy dark:peer-checked:border-teal-accent peer-checked:bg-navy/5 dark:peer-checked:bg-teal-accent/10 peer-checked:text-navy dark:peer-checked:text-teal-accent">
                                                        {service}
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-slate-700 dark:text-slate-300 text-sm font-bold">Project Details *</label>
                                        <textarea
                                            className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 min-h-[160px] p-4 text-base text-slate-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-navy dark:focus:border-teal-accent focus:ring-1 focus:ring-navy dark:focus:ring-teal-accent resize-none transition-all"
                                            placeholder="Tell us about your project, timeline, and budget..."
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <label className="text-slate-700 dark:text-slate-300 text-sm font-bold">Estimated Budget</label>
                                        <div className="flex flex-wrap gap-2">
                                            {['< $5K', '$5K - $10K', '$10K - $25K', '$25K+', 'Not Sure'].map((budget) => (
                                                <label key={budget} className="cursor-pointer group">
                                                    <input className="peer hidden" name="budget" type="radio" />
                                                    <div className="px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-sm font-medium transition-all group-hover:border-navy/30 dark:group-hover:border-teal-accent/50 peer-checked:border-teal-accent peer-checked:bg-teal-soft dark:peer-checked:bg-teal-accent/10 peer-checked:text-teal-accent">
                                                        {budget}
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <button className="mt-4 w-full bg-navy hover:bg-navy-dark dark:bg-teal-accent dark:text-navy dark:hover:bg-teal-accent/90 active:scale-[0.98] text-white font-bold h-14 rounded-xl shadow-lg shadow-navy/20 transition-all flex items-center justify-center gap-2">
                                        <span>Send Message</span>
                                        <span className="material-symbols-outlined text-xl">send</span>
                                    </button>

                                    <p className="text-center text-slate-400 text-sm">
                                        We'll get back to you within 24 hours.
                                    </p>
                                </form>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Contact Info Sidebar */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        {/* Contact Cards */}
                        <FadeIn delay={0.5}>
                            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-white/5 shadow-soft p-6 lg:p-8">
                                <h3 className="text-xl font-bold text-navy dark:text-white mb-6">Contact Information</h3>
                                <div className="flex flex-col gap-5">
                                    {contactInfo.map((item) => (
                                        <a
                                            key={item.label}
                                            href={item.href || '#'}
                                            className="flex items-start gap-4 group"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-teal-soft dark:bg-teal-accent/10 flex items-center justify-center shrink-0 group-hover:bg-teal-accent/20 transition-colors">
                                                <span className="material-symbols-outlined text-teal-accent">{item.icon}</span>
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">{item.label}</p>
                                                <p className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-navy dark:group-hover:text-white transition-colors">{item.value}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        {/* Social Links */}
                        <FadeIn delay={0.6}>
                            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-white/5 shadow-soft p-6 lg:p-8">
                                <h3 className="text-xl font-bold text-navy dark:text-white mb-6">Follow Us</h3>
                                <div className="flex gap-3">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            className="w-12 h-12 rounded-xl bg-navy/5 dark:bg-white/5 flex items-center justify-center text-navy dark:text-white font-bold hover:bg-navy dark:hover:bg-teal-accent hover:text-white dark:hover:text-navy transition-all"
                                            title={social.name}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        {/* Map */}
                        <FadeIn delay={0.7}>
                            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-white/5 shadow-soft p-3 overflow-hidden">
                                <div className="relative w-full aspect-video rounded-2xl overflow-hidden group bg-slate-100 dark:bg-slate-700">
                                    <iframe
                                        title="Geezek Location"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57212.95361818979!2d68.32903645!3d25.39698235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70eb827853%3A0xaf4c7ca631d2d8c5!2sHyderabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1704960000000!5m2!1sen!2s"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="absolute inset-0 w-full h-full opacity-80 hover:opacity-100 transition-opacity"
                                    ></iframe>
                                    <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-100 dark:border-white/10 flex items-center gap-3 pointer-events-none">
                                        <div className="bg-navy dark:bg-teal-accent p-2 rounded-lg text-white dark:text-navy">
                                            <span className="material-symbols-outlined text-lg">location_on</span>
                                        </div>
                                        <div>
                                            <p className="text-navy dark:text-white font-bold text-sm">Geezek HQ</p>
                                            <p className="text-slate-500 dark:text-slate-400 text-xs">Site Area, Hyderabad</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Quick Contact Banner */}
            <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full pb-10">
                <ScrollReveal>
                    <div className="bg-gradient-to-r from-navy to-navy-dark dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 lg:p-12 border border-white/5">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">Prefer a Quick Call?</h3>
                                <p className="text-slate-300">Schedule a free 15-minute discovery call with our team.</p>
                            </div>
                            <a
                                href="tel:+923332622962"
                                className="w-full lg:w-auto inline-flex items-center justify-center gap-3 bg-teal-accent hover:bg-teal-accent/90 text-navy px-8 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-1"
                            >
                                <span className="material-symbols-outlined">call</span>
                                0333 2622962
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}
