import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import ScrollReveal, { FadeIn } from '../components/ScrollReveal';

export default function Services() {
    const techStack = [
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '▲' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'WordPress', icon: '📝' },
        { name: 'Shopify', icon: '🛒' },
        { name: 'Google Ads', icon: '📊' },
        { name: 'Meta Ads', icon: '📘' },
        { name: 'SEMrush', icon: '🔍' },
    ];

    return (
        <div className="flex flex-col gap-16 lg:gap-24">
            <Helmet>
                <title>Our Services | Geezek - Digital Solutions</title>
                <meta name="description" content="SEO Optimization, Web Development, Social Media Management, Brand Identity, and E-Commerce solutions in Pakistan." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative px-5 lg:px-8 pt-8 lg:pt-16 pb-8 overflow-hidden max-w-7xl mx-auto w-full">
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-accent/10 dark:bg-teal-accent/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

                <div className="text-center max-w-3xl mx-auto relative z-10">
                    <FadeIn delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-soft dark:bg-teal-accent/10 border border-teal-accent/20 dark:border-teal-accent/20 mb-6">
                            <span className="material-symbols-outlined text-teal-accent text-sm">verified</span>
                            <span className="text-xs font-bold text-teal-accent uppercase tracking-wider">Trusted by 150+ Brands</span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-navy dark:text-white leading-tight mb-6">
                            Digital Solutions <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-accent to-navy dark:to-white">for Modern Brands</span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <p className="text-slate-500 dark:text-slate-400 text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
                            From SEO to full-stack development, we deliver end-to-end digital solutions that drive real business growth.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/contact" className="w-full sm:w-auto bg-navy hover:bg-navy-dark text-white dark:bg-teal-accent dark:text-navy dark:hover:bg-teal-accent/90 px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-navy/20 active:scale-95 hover:-translate-y-1 flex items-center justify-center gap-2">
                                Start Your Project
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                            <a href="#services" className="w-full sm:w-auto bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-navy dark:text-white px-8 py-4 rounded-xl font-bold transition-all border border-gray-200 dark:border-white/10 flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">expand_more</span>
                                Explore Services
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Services Grid */}
            <section id="services" className="px-5 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-20">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="text-teal-accent font-bold tracking-widest uppercase text-xs">What We Offer</span>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-navy dark:text-white mt-2">Our Core Services</h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, i) => {
                        // Create slug from title
                        const slug = service.title.toLowerCase().replace(/\s+/g, '-').replace('mgmt', '').replace('--', '-').replace(/-$/, '');
                        const slugMap = {
                            'seo-optimization': 'seo-optimization',
                            'web-development': 'web-development',
                            'social-media': 'social-media',
                            'brand-identity': 'brand-identity',
                            'content-marketing': 'content-marketing',
                            'e-commerce-solutions': 'ecommerce',
                        };
                        const finalSlug = slugMap[slug] || slug;

                        return (
                            <ScrollReveal key={service.id} delay={i * 0.1}>
                                <article className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-white/5 shadow-soft transition-all hover:shadow-xl hover:-translate-y-2 duration-300 h-full flex flex-col">
                                    <div className="h-52 w-full bg-cover bg-center relative"
                                        style={{ backgroundImage: `url("${service.image}")` }}>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 p-2.5 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md rounded-xl shadow-lg border border-white/50 dark:border-white/10">
                                            <span className="material-symbols-outlined text-teal-accent">{service.icon}</span>
                                        </div>
                                    </div>
                                    <div className="p-6 pt-5 flex flex-col flex-1">
                                        <h3 className="text-navy dark:text-white text-xl font-bold mb-2">{service.title}</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-3 mb-8 flex-1">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <span className="material-symbols-outlined text-teal-accent text-[20px] mt-0.5">check_circle</span>
                                                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex gap-3 mt-auto">
                                            <Link to={`/services/${finalSlug}`} className="flex-1 h-12 rounded-xl bg-white dark:bg-transparent border-2 border-navy dark:border-white text-navy dark:text-white font-bold text-sm tracking-wide hover:bg-navy/5 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                                <span>Learn More</span>
                                            </Link>
                                            <Link to="/contact" className="flex-1 h-12 rounded-xl bg-navy dark:bg-teal-accent text-white dark:text-navy font-bold text-sm tracking-wide hover:bg-navy-dark dark:hover:bg-teal-accent/90 shadow-lg shadow-navy/20 transition-all flex items-center justify-center gap-2">
                                                <span>Get Quote</span>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            </ScrollReveal>
                        )
                    })}
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full">
                <ScrollReveal>
                    <div className="bg-gradient-to-br from-navy via-navy-dark to-navy dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden border border-white/5">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="text-center mb-10">
                                <span className="text-teal-accent font-bold tracking-widest uppercase text-xs">Technology</span>
                                <h2 className="text-3xl lg:text-4xl font-extrabold text-white mt-2">Tools We Master</h2>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                                {techStack.map((tech, i) => (
                                    <ScrollReveal key={tech.name} delay={i * 0.05} width="auto">
                                        <div className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center transition-all hover:-translate-y-1 border border-white/5 h-full flex flex-col items-center justify-center">
                                            <div className="text-3xl mb-2">{tech.icon}</div>
                                            <p className="text-white text-sm font-medium">{tech.name}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* Process Section */}
            <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="text-teal-accent font-bold tracking-widest uppercase text-xs">Our Process</span>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-navy dark:text-white mt-2">How We Deliver Results</h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { step: '01', title: 'Discovery Call', desc: 'We learn about your business, goals, and challenges in a free 30-minute consultation.', icon: 'phone_in_talk' },
                        { step: '02', title: 'Strategy & Proposal', desc: 'We create a tailored strategy and transparent quote based on your specific needs.', icon: 'description' },
                        { step: '03', title: 'Execute & Optimize', desc: 'We implement, test, and continuously optimize to maximize your ROI.', icon: 'rocket_launch' },
                    ].map((item, i) => (
                        <ScrollReveal key={item.step} delay={i * 0.2}>
                            <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-100 dark:border-white/5 shadow-soft hover:shadow-lg transition-all group h-full">
                                <div className="absolute -top-4 -left-2 text-6xl font-extrabold text-gray-100 dark:text-slate-700/50 group-hover:text-teal-soft dark:group-hover:text-teal-accent/20 transition-colors">{item.step}</div>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-teal-soft dark:bg-teal-accent/10 flex items-center justify-center mb-6">
                                        <span className="material-symbols-outlined text-teal-accent text-2xl">{item.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-navy dark:text-white mb-3">{item.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full pb-10">
                <ScrollReveal>
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-accent to-teal-accent/80 dark:from-teal-accent/90 dark:to-teal-accent/70 p-8 lg:p-16 text-center">
                        <div className="relative z-10">
                            <h2 className="text-3xl lg:text-5xl font-extrabold text-navy mb-4">Ready to Get Started?</h2>
                            <p className="text-navy/80 text-lg lg:text-xl mb-8 max-w-2xl mx-auto">Book a free strategy session and let's discuss how we can accelerate your growth.</p>
                            <Link to="/contact" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-lg shadow-navy/30 hover:-translate-y-1">
                                Book Free Consultation
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}
