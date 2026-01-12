import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

export default function Portfolio() {
    const categories = ['All Work', 'Web Development', 'SEO Campaigns', 'Social Media', 'Branding'];

    return (
        <div className="flex flex-col gap-12 lg:gap-16">
            <Helmet>
                <title>Our Portfolio | Geezek - Case Studies</title>
                <meta name="description" content="Explore our portfolio of successful projects in Web Development, SEO, Social Media Marketing, and Branding." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative px-5 lg:px-8 pt-8 lg:pt-16 overflow-hidden max-w-7xl mx-auto w-full">
                <div className="absolute top-0 left-0 w-96 h-96 bg-navy/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

                <div className="text-center max-w-3xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 mb-6">
                        <span className="material-symbols-outlined text-navy text-sm">auto_awesome</span>
                        <span className="text-xs font-bold text-navy uppercase tracking-wider">320+ Projects Completed</span>
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-extrabold text-navy leading-tight mb-6">
                        Work That <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-teal-accent">Speaks for Itself</span>
                    </h1>

                    <p className="text-slate-500 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
                        Real results for real businesses. Explore our case studies and see how we've helped brands grow.
                    </p>
                </div>
            </section>

            {/* Filters */}
            <div className="sticky top-[64px] z-20 w-full overflow-x-auto bg-white/95 backdrop-blur-sm border-b border-gray-100/50 px-5 lg:px-8 py-4">
                <div className="flex gap-3 max-w-7xl mx-auto lg:justify-center">
                    {categories.map((cat, i) => (
                        <button
                            key={cat}
                            className={`flex h-10 min-w-max items-center justify-center rounded-full px-6 text-sm font-bold transition-all active:scale-95 ${i === 0
                                ? 'bg-navy text-white shadow-lg shadow-navy/20'
                                : 'border border-gray-200 bg-white text-gray-600 hover:border-navy/30 hover:text-navy'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project) => (
                        <article key={project.id} className="group relative flex flex-col bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 overflow-hidden">
                            <div className="relative overflow-hidden aspect-[16/10]">
                                <img loading="lazy" alt={project.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src={project.image} />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Stat Badge */}
                                <div className="absolute top-4 right-4 z-10 rounded-full bg-white shadow-lg px-4 py-1.5 text-sm font-bold text-navy border border-gray-100">
                                    {project.stat}
                                </div>

                                {/* Hover Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <p className="text-white/90 text-sm leading-relaxed">{project.description}</p>
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex items-center gap-2 mb-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-teal-accent bg-teal-soft px-2 py-1 rounded-full">{tag}</span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-bold text-navy">{project.title}</h2>
                                    <span className="material-symbols-outlined text-gray-300 group-hover:text-teal-accent transition-colors">arrow_outward</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="bg-surface-light rounded-3xl p-8 lg:p-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {[
                            { value: '320+', label: 'Projects Completed' },
                            { value: '98%', label: 'Client Satisfaction' },
                            { value: '15+', label: 'Industry Awards' },
                            { value: '8+', label: 'Years Experience' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <p className="text-4xl lg:text-5xl font-extrabold text-navy mb-2">{stat.value}</p>
                                <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full pb-10">
                <div className="relative overflow-hidden rounded-3xl bg-navy p-8 lg:p-16 text-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-4">Want Results Like These?</h2>
                        <p className="text-slate-300 text-lg lg:text-xl mb-8 max-w-2xl mx-auto">Let's discuss your project and create something amazing together.</p>
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-teal-accent hover:bg-teal-accent/90 text-navy px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
                            Start Your Project
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
