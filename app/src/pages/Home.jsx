import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { SERVICES, INDUSTRIES, TESTIMONIALS, TEAM_MEMBERS, PROJECTS } from '../constants';
import ScrollReveal, { FadeIn } from '../components/ScrollReveal';

export default function Home() {
    return (
        <div className="flex flex-col gap-10 lg:gap-20">
            <Helmet>
                <title>Geezek - Software House | Hyderabad</title>
                <meta name="description" content="Geezek is a leading software house in Hyderabad, simplifying digital growth with premium SEO, web development, and social media strategies." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative px-5 lg:px-8 pt-8 lg:pt-12 pb-4 overflow-hidden max-w-7xl mx-auto w-full">
                <div className="absolute top-[-50px] right-[-50px] w-80 h-80 bg-teal-accent/10 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="absolute top-[20%] left-[-20%] w-64 h-64 bg-navy/5 dark:bg-teal-accent/5 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:items-center relative z-10">
                    <div className="flex flex-col gap-6 lg:gap-8">
                        <FadeIn delay={0.1}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-white/10 shadow-sm w-fit">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-accent"></span>
                                </span>
                                <span className="text-xs font-semibold text-navy dark:text-white uppercase tracking-wider">Based in Hyderabad</span>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <h1 className="text-[2.5rem] lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-heading dark:text-white">
                                Empowering <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-teal-accent dark:from-teal-accent dark:to-teal-soft">Digital Growth</span> <br />
                                Global Standards.
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <p className="text-slate-500 dark:text-slate-400 text-lg lg:text-xl leading-relaxed max-w-[95%] lg:max-w-lg font-medium">
                                Premium SEO, Web Development, and Social Media strategies tailored for your business success.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="flex items-center gap-4 pt-2">
                                <Link to="/contact" className="flex-1 lg:flex-none lg:w-48 bg-navy hover:bg-navy-dark dark:bg-teal-accent dark:hover:bg-teal-accent/90 text-white dark:text-navy h-12 lg:h-14 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-navy/20 active:scale-95 group">
                                    Start a Project
                                    <span className="material-symbols-outlined text-sm font-bold group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                                <button className="h-12 w-12 lg:h-14 lg:w-14 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-white/10 hover:border-navy/30 dark:hover:border-teal-accent/50 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors text-navy dark:text-white shadow-sm active:scale-95">
                                    <span className="material-symbols-outlined lg:text-3xl">play_arrow</span>
                                </button>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Hero Image / Stats */}
                    <FadeIn delay={0.5} className="mt-10 lg:mt-0">
                        <div className="rounded-2xl overflow-hidden relative h-52 lg:h-[400px] w-full bg-slate-50 dark:bg-slate-800 border border-gray-100 dark:border-white/5 shadow-soft lg:shadow-2xl">
                            <div className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-multiply dark:mix-blend-normal transition-transform duration-1000 hover:scale-105"
                                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200")', filter: 'grayscale(100%) brightness(1.2)' }}>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent mix-blend-multiply dark:mix-blend-overlay"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                            <div className="absolute bottom-5 left-5 right-5 lg:bottom-10 lg:left-10 lg:right-10 flex justify-between items-end z-10">
                                <div>
                                    <p className="text-xs text-teal-accent font-bold tracking-widest uppercase mb-1 drop-shadow-sm">Impact</p>
                                    <p className="text-2xl lg:text-4xl font-bold text-white drop-shadow-md">150+ Clients</p>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm p-2 lg:p-3 rounded-lg hover:bg-white/30 transition-colors">
                                    <span className="material-symbols-outlined text-white text-3xl lg:text-4xl">globe_asia</span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Stats Infographic Section */}
            <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full">
                <ScrollReveal>
                    <div className="bg-gradient-to-br from-navy via-navy-dark to-navy dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden border border-white/5">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-accent/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-accent/5 rounded-full blur-[80px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                            <div className="text-center group">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-teal-accent/20 transition-colors">
                                    <span className="material-symbols-outlined text-3xl text-teal-accent">groups</span>
                                </div>
                                <p className="text-4xl lg:text-5xl font-extrabold text-white mb-2">150<span className="text-teal-accent">+</span></p>
                                <p className="text-slate-400 text-sm font-medium">Happy Clients</p>
                            </div>
                            <div className="text-center group">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-teal-accent/20 transition-colors">
                                    <span className="material-symbols-outlined text-3xl text-teal-accent">rocket_launch</span>
                                </div>
                                <p className="text-4xl lg:text-5xl font-extrabold text-white mb-2">320<span className="text-teal-accent">+</span></p>
                                <p className="text-slate-400 text-sm font-medium">Projects Delivered</p>
                            </div>
                            <div className="text-center group">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-teal-accent/20 transition-colors">
                                    <span className="material-symbols-outlined text-3xl text-teal-accent">trending_up</span>
                                </div>
                                <p className="text-4xl lg:text-5xl font-extrabold text-white mb-2">98<span className="text-teal-accent">%</span></p>
                                <p className="text-slate-400 text-sm font-medium">Client Retention</p>
                            </div>
                            <div className="text-center group">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-teal-accent/20 transition-colors">
                                    <span className="material-symbols-outlined text-3xl text-teal-accent">star</span>
                                </div>
                                <p className="text-4xl lg:text-5xl font-extrabold text-white mb-2">4.9<span className="text-teal-accent">/5</span></p>
                                <p className="text-slate-400 text-sm font-medium">Average Rating</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* Expertise / Services Preview */}
            <section className="px-5 lg:px-8 bg-surface-light dark:bg-slate-900 py-10 lg:py-16 rounded-3xl max-w-7xl mx-auto w-full transition-colors duration-300">
                <div className="flex items-center justify-between mb-8 px-1">
                    <h2 className="text-xl lg:text-3xl font-bold text-navy dark:text-white">Our Expertise</h2>
                    <Link to="/services" className="text-sm lg:text-base text-navy dark:text-teal-accent font-semibold hover:text-teal-accent dark:hover:text-white transition-colors flex items-center gap-1">
                        View All
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
                    {SERVICES.slice(0, 3).map((service, i) => (
                        <ScrollReveal key={service.id} delay={i * 0.1}>
                            <div className="group relative p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-teal-accent/30 dark:hover:border-teal-accent/30 transition-all shadow-card hover:shadow-soft overflow-hidden hover:-translate-y-1 duration-300 h-full">
                                <div className="absolute top-0 right-0 p-4 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-10 transition-opacity text-navy dark:text-teal-accent">
                                    <span className="material-symbols-outlined text-7xl">{service.icon}</span>
                                </div>
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-xl bg-teal-soft dark:bg-teal-accent/10 flex items-center justify-center shrink-0 text-teal-accent/90 dark:text-teal-accent shadow-sm group-hover:bg-teal-accent/20 transition-colors">
                                        <span className="material-symbols-outlined text-[26px]">{service.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-heading dark:text-white mb-1.5">{service.title}</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full">
                <ScrollReveal>
                    <div className="mb-8">
                        <h2 className="text-xl lg:text-3xl font-bold text-navy dark:text-white mb-2">Industries We Empower</h2>
                        <p className="text-slate-500 dark:text-slate-400">Tailored digital strategies for diverse sectors.</p>
                    </div>
                </ScrollReveal>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {INDUSTRIES.map((industry, i) => (
                        <ScrollReveal key={industry.name} delay={i * 0.1}>
                            <div className="relative group rounded-xl overflow-hidden aspect-[4/3] shadow-md border border-gray-100 dark:border-white/5">
                                <img loading="lazy" src={industry.image} alt={industry.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent flex items-end p-4">
                                    <p className="text-white font-bold text-sm lg:text-base">{industry.name}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Our Process Infographic Section */}
            <section className="px-5 lg:px-8 py-10 lg:py-16 max-w-7xl mx-auto w-full">
                <ScrollReveal>
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <span className="text-teal-accent font-bold tracking-widest uppercase text-xs">How We Work</span>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-navy dark:text-white mt-2 mb-4">Your Path to Digital Success</h2>
                        <p className="text-slate-500 dark:text-slate-400">A streamlined, transparent timeline from concept to launch.</p>
                    </div>
                </ScrollReveal>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[55px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-accent/30 to-transparent"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {[
                            { step: 1, title: 'Discovery', desc: 'We audit your current state and define clear, measurable goals.', color: 'bg-navy dark:bg-teal-accent', textColor: 'text-white dark:text-navy', border: 'border-navy/10' },
                            { step: 2, title: 'Strategy', desc: 'We build a roadmap including tech stack, design system, and SEO plan.', color: 'bg-white dark:bg-slate-800', textColor: 'text-teal-accent', border: 'border-teal-accent/50' },
                            { step: 3, title: 'Execution', desc: 'Our devs and creatives bring the vision to life with pixel-perfect code.', color: 'bg-navy dark:bg-teal-accent', textColor: 'text-white dark:text-navy', border: 'border-navy/10' },
                            { step: 4, title: 'Launch & Scale', desc: 'We go live, monitor performance, and iterate for continuous growth.', color: 'bg-teal-accent', textColor: 'text-white', border: 'border-teal-accent/50' }
                        ].map((item, i) => (
                            <ScrollReveal key={item.step} delay={i * 0.1}>
                                <div className={`group relative bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2 ${i % 2 !== 0 ? 'lg:mt-12' : ''}`}>
                                    <div className={`w-16 h-16 mx-auto ${item.color} ${item.textColor} rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-navy/30 dark:shadow-teal-accent/20 relative z-20 group-hover:scale-110 transition-transform`}>{item.step}</div>
                                    <h3 className="text-xl font-bold text-navy dark:text-white mb-3">{item.title}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Work Preview */}
            <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <FadeIn>
                            <h2 className="text-xl lg:text-3xl font-bold text-navy dark:text-white mb-2">Featured Work</h2>
                            <p className="text-slate-500 dark:text-slate-400">Some of our best projects that drove real results.</p>
                        </FadeIn>
                    </div>
                    <Link to="/portfolio" className="hidden lg:flex text-navy dark:text-teal-accent font-semibold hover:text-teal-accent dark:hover:text-white transition-colors items-center gap-1">
                        View All Work
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {PROJECTS.slice(0, 3).map((project, i) => (
                        <ScrollReveal key={project.id} delay={i * 0.1}>
                            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-white/5">
                                <div className="aspect-[16/10] overflow-hidden">
                                    <img loading="lazy" src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <p className="text-teal-accent text-xs font-bold uppercase tracking-wider mb-1">{project.category}</p>
                                    <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-white/80 text-sm">{project.result}</p>
                                </div>
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white">arrow_outward</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
                <div className="lg:hidden mt-6 text-center">
                    <Link to="/portfolio" className="inline-flex items-center gap-2 text-navy dark:text-teal-accent font-semibold hover:text-teal-accent transition-colors">
                        View All Work
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </Link>
                </div>
            </section>

            {/* About / Team Section / Testimonials */}
            <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full">
                <ScrollReveal>
                    <div className="relative overflow-hidden rounded-2xl bg-navy dark:bg-slate-800 text-white p-7 lg:p-12 shadow-xl border border-white/5">
                        <div className="absolute inset-0 z-0 opacity-10 bg-no-repeat bg-right-bottom bg-contain pointer-events-none mix-blend-overlay"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600')", filter: 'invert(1)' }}>
                        </div>
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="h-[2px] w-6 bg-teal-accent"></div>
                                    <p className="text-teal-accent text-xs font-bold uppercase tracking-wider">Who We Are</p>
                                </div>
                                <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">Made in Sindh. <br />Built for the World.</h2>
                                <p className="text-slate-300 text-sm lg:text-lg leading-relaxed mb-6 max-w-[90%]">
                                    We are a team of passionate developers, designers, and strategists based in Hyderabad. We bridge the gap between local talent and global standards.
                                </p>
                                <div className="flex items-center gap-4 bg-white/10 p-3 rounded-xl w-fit backdrop-blur-sm border border-white/5">
                                    <div className="flex -space-x-3">
                                        {TEAM_MEMBERS.slice(0, 3).map((member) => (
                                            <img key={member.name} alt={member.name} className="inline-block h-10 w-10 rounded-full ring-2 ring-navy dark:ring-slate-800 bg-gray-200 object-cover" src={member.image} />
                                        ))}
                                    </div>
                                    <span className="text-xs text-white font-semibold tracking-wide">+12 others</span>
                                </div>
                            </div>

                            {/* Testimonials Carousel */}
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 mt-6 lg:mt-0">
                                <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-4">Client Stories</p>
                                <div className="space-y-4">
                                    {TESTIMONIALS.map((t) => (
                                        <div key={t.id} className="bg-white/10 p-4 rounded-xl flex gap-4 items-start border border-white/5 hover:bg-white/20 transition-colors">
                                            <img loading="lazy" src={t.image} className="w-10 h-10 rounded-full object-cover" alt={t.name} />
                                            <div>
                                                <p className="text-slate-200 text-sm italic mb-1">"{t.content}"</p>
                                                <p className="text-teal-accent text-xs font-bold">{t.name}, <span className="text-white/60 font-normal">{t.role}</span></p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* CTA Section */}
            <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full">
                <ScrollReveal>
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-accent to-teal-accent/80 dark:from-teal-accent/90 dark:to-teal-accent/70 p-8 lg:p-16 text-center shadow-lg shadow-teal-accent/20">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLThoLTJ2LTRoMnY0em0tOCA4aC0ydi00aDJ2NHptMC04aC0ydi00aDJ2NHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl lg:text-5xl font-extrabold text-navy dark:text-white mb-4">Ready to Transform Your Business?</h2>
                            <p className="text-navy/80 dark:text-white/80 text-lg lg:text-xl mb-8 max-w-2xl mx-auto">Let's discuss how we can help you achieve your digital goals. Book a free consultation today.</p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link to="/contact" className="w-full sm:w-auto bg-navy text-white hover:bg-navy-dark dark:bg-white dark:text-navy dark:hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-navy/30 hover:-translate-y-1 flex items-center justify-center gap-2">
                                    Get Free Consultation
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </Link>
                                <a href="tel:+923332622962" className="w-full sm:w-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm text-navy dark:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-navy/20 dark:border-white/20 flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined">call</span>
                                    0333 2622962
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* FAQ Section */}
            <section className="px-5 lg:px-8 py-10 lg:py-16 max-w-7xl mx-auto w-full">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="text-teal-accent font-bold tracking-widest uppercase text-xs">FAQ</span>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-navy dark:text-white mt-2 mb-4">Frequently Asked Questions</h2>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            { q: "How long does a typical project take?", a: "Most projects take 4-12 weeks depending on complexity. A simple website might be 4-6 weeks, while a full-scale platform could be 3-4 months." },
                            { q: "Do you provide ongoing support?", a: "Yes! We offer maintenance packages that include hosting, updates, security monitoring, and priority support for all our clients." },
                            { q: "What's your pricing model?", a: "We work on both fixed-price and retainer models. After our discovery call, we provide a detailed proposal with transparent pricing." },
                            { q: "Can you help with SEO and marketing?", a: "Absolutely. We offer full-service digital marketing including SEO, content strategy, social media management, and paid advertising." }
                        ].map((faq, i) => (
                            <details key={i} className="group bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
                                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                    <h3 className="font-bold text-navy dark:text-white text-lg pr-4">{faq.q}</h3>
                                    <span className="material-symbols-outlined text-teal-accent group-open:rotate-180 transition-transform shrink-0">expand_more</span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-500 dark:text-slate-400 leading-relaxed">{faq.a}</div>
                            </details>
                        ))}
                    </div>
                </ScrollReveal>
            </section>

            {/* Trusted By Section */}
            <section className="pb-10 lg:pb-16">
                <div className="px-5 mb-6">
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Trusted By Industry Leaders</h2>
                </div>
                <div className="relative w-full overflow-hidden max-w-5xl mx-auto">
                    <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10 transition-colors duration-300"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10 transition-colors duration-300"></div>
                    <div className="flex items-center gap-10 lg:gap-20 px-5 overflow-x-auto hide-scrollbar whitespace-nowrap py-2 opacity-70 justify-center">
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-600 dark:text-slate-400 grayscale hover:grayscale-0 transition-all"><span className="material-symbols-outlined text-3xl text-navy dark:text-teal-accent">token</span> NexTech</div>
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-600 dark:text-slate-400 grayscale hover:grayscale-0 transition-all"><span className="material-symbols-outlined text-3xl text-navy dark:text-teal-accent">all_inclusive</span> Infinity</div>
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-600 dark:text-slate-400 grayscale hover:grayscale-0 transition-all"><span className="material-symbols-outlined text-3xl text-navy dark:text-teal-accent">diamond</span> LuxeWeb</div>
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-600 dark:text-slate-400 grayscale hover:grayscale-0 transition-all"><span className="material-symbols-outlined text-3xl text-navy dark:text-teal-accent">bolt</span> RapidScale</div>
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-600 dark:text-slate-400 grayscale hover:grayscale-0 transition-all"><span className="material-symbols-outlined text-3xl text-navy dark:text-teal-accent">anchor</span> HarborIO</div>
                    </div>
                </div>
            </section>
        </div>
    );
}
