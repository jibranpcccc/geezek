import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

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
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-accent/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

                <div className="text-center max-w-3xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-soft border border-teal-accent/20 mb-6">
                        <span className="material-symbols-outlined text-teal-accent text-sm">verified</span>
                        <span className="text-xs font-bold text-teal-accent uppercase tracking-wider">Trusted by 150+ Brands</span>
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-extrabold text-navy leading-tight mb-6">
                        Digital Solutions <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-accent to-navy">for Modern Brands</span>
                    </h1>

                    <p className="text-slate-500 text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
                        From SEO to full-stack development, we deliver end-to-end digital solutions that drive real business growth.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/contact" className="w-full sm:w-auto bg-navy hover:bg-navy-dark text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-navy/20 hover:-translate-y-1 flex items-center justify-center gap-2">
                            Start Your Project
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                        <a href="#services" className="w-full sm:w-auto bg-white hover:bg-gray-50 text-navy px-8 py-4 rounded-xl font-bold transition-all border border-gray-200 flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">expand_more</span>
                            Explore Services
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="services" className="px-5 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-20">
                <div className="text-center mb-12">
                    <span className="text-teal-accent font-bold tracking-widest uppercase text-xs">What We Offer</span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mt-2">Our Core Services</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service) => {
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
                            <article key={service.id} className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-soft transition-all hover:shadow-xl hover:-translate-y-2 duration-300">
                                <div className="h-52 w-full bg-cover bg-center relative"
                                    style={{ backgroundImage: `url("${service.image}")` }}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 p-2.5 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-white/50">
                                        <span className="material-symbols-outlined text-teal-accent">{service.icon}</span>
                                    </div>
                                </div>
                                <div className="p-6 pt-5 flex flex-col">
                                    <h3 className="text-navy text-xl font-bold mb-2">{service.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-3 mb-8 flex-1">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="material-symbols-outlined text-teal-accent text-[20px] mt-0.5">check_circle</span>
                                                <span className="text-gray-700 text-sm font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex gap-3">
                                        <Link to={`/services/${finalSlug}`} className="flex-1 h-12 rounded-xl bg-white border-2 border-navy text-navy font-bold text-sm tracking-wide hover:bg-navy/5 transition-all flex items-center justify-center gap-2">
                                            <span>Learn More</span>
                                        </Link>
                                        <Link to="/contact" className="flex-1 h-12 rounded-xl bg-navy text-white font-bold text-sm tracking-wide hover:bg-navy-dark shadow-lg shadow-navy/20 transition-all flex items-center justify-center gap-2">
                                            <span>Get Quote</span>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="bg-gradient-to-br from-navy via-navy-dark to-navy rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="relative z-10">
                        <div className="text-center mb-10">
                            <span className="text-teal-accent font-bold tracking-widest uppercase text-xs">Technology</span>
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mt-2">Tools We Master</h2>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                            {techStack.map((tech) => (
                                <div key={tech.name} className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center transition-all hover:-translate-y-1 border border-white/5">
                                    <div className="text-3xl mb-2">{tech.icon}</div>
                                    <p className="text-white text-sm font-medium">{tech.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="text-center mb-12">
                    <span className="text-teal-accent font-bold tracking-widest uppercase text-xs">Our Process</span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mt-2">How We Deliver Results</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { step: '01', title: 'Discovery Call', desc: 'We learn about your business, goals, and challenges in a free 30-minute consultation.', icon: 'phone_in_talk' },
                        { step: '02', title: 'Strategy & Proposal', desc: 'We create a tailored strategy and transparent quote based on your specific needs.', icon: 'description' },
                        { step: '03', title: 'Execute & Optimize', desc: 'We implement, test, and continuously optimize to maximize your ROI.', icon: 'rocket_launch' },
                    ].map((item) => (
                        <div key={item.step} className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-soft hover:shadow-lg transition-all group">
                            <div className="absolute -top-4 -left-2 text-6xl font-extrabold text-gray-100 group-hover:text-teal-soft transition-colors">{item.step}</div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-teal-soft flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-teal-accent text-2xl">{item.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full pb-10">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-accent to-teal-accent/80 p-8 lg:p-16 text-center">
                    <div className="relative z-10">
                        <h2 className="text-3xl lg:text-5xl font-extrabold text-navy mb-4">Ready to Get Started?</h2>
                        <p className="text-navy/80 text-lg lg:text-xl mb-8 max-w-2xl mx-auto">Book a free strategy session and let's discuss how we can accelerate your growth.</p>
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-lg shadow-navy/30 hover:-translate-y-1">
                            Book Free Consultation
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
