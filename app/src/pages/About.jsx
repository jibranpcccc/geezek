import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { TEAM_MEMBERS, TESTIMONIALS } from '../constants';
import ScrollReveal, { FadeIn } from '../components/ScrollReveal';

export default function About() {
    const values = [
        { icon: 'rocket_launch', title: 'Innovation', desc: 'We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions.' },
        { icon: 'handshake', title: 'Partnership', desc: 'We treat every client relationship as a long-term partnership, not just a transaction.' },
        { icon: 'verified', title: 'Quality', desc: 'We never compromise on quality. Every pixel, every line of code matters.' },
        { icon: 'speed', title: 'Agility', desc: 'We move fast and adapt quickly to changing requirements and market conditions.' },
    ];

    const milestones = [
        { year: '2018', title: 'Founded', desc: 'Geezek was born in a small office in Hyderabad with a team of 3.' },
        { year: '2019', title: 'First Major Client', desc: 'Landed our first enterprise contract with a leading retail chain.' },
        { year: '2020', title: 'Remote Expansion', desc: 'Grew to 15 team members working across Pakistan.' },
        { year: '2022', title: 'International Reach', desc: 'Started serving clients in UAE, UK, and North America.' },
        { year: '2024', title: '150+ Projects', desc: 'Crossed 150 successful project deliveries with 98% client satisfaction.' },
        { year: '2026', title: 'Industry Leaders', desc: 'Recognized as a top digital agency in Sindh with 20+ team members.' },
    ];

    return (
        <div className="flex flex-col gap-16 lg:gap-24">
            <Helmet>
                <title>About Us | Geezek - Our Story</title>
                <meta name="description" content="Learn about Geezek's journey from a small Hyderabad startup to a leading digital agency serving clients worldwide." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative px-5 lg:px-8 pt-8 lg:pt-16 overflow-hidden max-w-7xl mx-auto w-full">
                <div className="absolute top-0 left-0 w-96 h-96 bg-navy/5 dark:bg-teal-accent/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <FadeIn delay={0.1}>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-soft dark:bg-teal-accent/10 border border-teal-accent/20 dark:border-teal-accent/20 mb-6">
                                <span className="material-symbols-outlined text-teal-accent text-sm">groups</span>
                                <span className="text-xs font-bold text-teal-accent uppercase tracking-wider">Our Story</span>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <h1 className="text-4xl lg:text-6xl font-extrabold text-navy dark:text-white leading-tight mb-6">
                                Built in Hyderabad, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-teal-accent dark:from-teal-accent dark:to-teal-soft">Trusted Worldwide</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8">
                                We're a passionate team of developers, designers, and digital strategists who believe that
                                local talent can deliver global-quality solutions. From our humble beginnings in Sindh to
                                serving clients across continents, we've stayed true to our mission: empowering businesses
                                through technology.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="flex flex-wrap gap-6">
                                <div className="text-center">
                                    <p className="text-4xl font-extrabold text-navy dark:text-white">8+</p>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm">Years Experience</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-4xl font-extrabold text-navy dark:text-white">150+</p>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm">Projects Delivered</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-4xl font-extrabold text-navy dark:text-white">20+</p>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm">Team Members</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.5}>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/5">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                                    alt="Geezek Team"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-white/5 card-shadow">
                                <p className="text-navy dark:text-white font-bold text-lg">Site Area, Hyderabad</p>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Our Headquarters</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Values Section */}
            <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="text-teal-accent font-bold tracking-widest uppercase text-xs">What Drives Us</span>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-navy dark:text-white mt-2">Our Core Values</h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, i) => (
                        <ScrollReveal key={value.title} delay={i * 0.1}>
                            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-100 dark:border-white/5 shadow-soft hover:shadow-lg transition-all hover:-translate-y-1 group h-full">
                                <div className="w-14 h-14 rounded-2xl bg-teal-soft dark:bg-teal-accent/10 flex items-center justify-center mb-5 group-hover:bg-teal-accent/20 transition-colors">
                                    <span className="material-symbols-outlined text-teal-accent text-2xl">{value.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-navy dark:text-white mb-2">{value.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{value.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Timeline Section */}
            <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="text-teal-accent font-bold tracking-widest uppercase text-xs">Our Journey</span>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-navy dark:text-white mt-2">Key Milestones</h2>
                    </div>
                </ScrollReveal>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-slate-700 lg:-translate-x-1/2"></div>

                    <div className="space-y-8">
                        {milestones.map((milestone, i) => (
                            <ScrollReveal key={milestone.year} delay={i * 0.1}>
                                <div className={`relative flex items-center gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                    {/* Dot */}
                                    <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-teal-accent rounded-full border-4 border-white dark:border-slate-900 shadow-md lg:-translate-x-1/2 z-10"></div>

                                    {/* Content */}
                                    <div className={`ml-12 lg:ml-0 lg:w-1/2 ${i % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-100 dark:border-white/5 shadow-soft hover:shadow-lg transition-all group hover:-translate-y-1">
                                            <span className="inline-block px-3 py-1 bg-navy dark:bg-teal-accent text-white dark:text-navy text-sm font-bold rounded-full mb-3">{milestone.year}</span>
                                            <h3 className="text-xl font-bold text-navy dark:text-white mb-2">{milestone.title}</h3>
                                            <p className="text-slate-500 dark:text-slate-400">{milestone.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="text-teal-accent font-bold tracking-widest uppercase text-xs">The Faces Behind Geezek</span>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-navy dark:text-white mt-2">Meet Our Team</h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {TEAM_MEMBERS.map((member, i) => (
                        <ScrollReveal key={member.name} delay={i * 0.1}>
                            <div className="group text-center">
                                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg border border-gray-100 dark:border-white/5">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                                        <div className="flex gap-2">
                                            <a href="#" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors text-sm font-bold">In</a>
                                            <a href="#" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors text-sm font-bold">X</a>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="font-bold text-navy dark:text-white">{member.name}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">{member.role}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full">
                <ScrollReveal>
                    <div className="bg-gradient-to-br from-navy via-navy-dark to-navy dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden border border-white/5">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

                        <div className="text-center mb-10 relative z-10">
                            <span className="text-teal-accent font-bold tracking-widest uppercase text-xs">Testimonials</span>
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mt-2">What Clients Say</h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
                            {TESTIMONIALS.map((t, i) => (
                                <ScrollReveal key={t.id} delay={i * 0.1}>
                                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                                        <div className="flex gap-1 mb-4">
                                            {[1, 2, 3, 4, 5].map(j => (
                                                <span key={j} className="material-symbols-outlined text-yellow-400 text-lg">star</span>
                                            ))}
                                        </div>
                                        <p className="text-white/90 mb-6 italic">"{t.content}"</p>
                                        <div className="flex items-center gap-4">
                                            <img loading="lazy" src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                                            <div>
                                                <p className="text-white font-bold">{t.name}</p>
                                                <p className="text-white/60 text-sm">{t.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* CTA */}
            <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full pb-10">
                <ScrollReveal>
                    <div className="text-center">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-navy dark:text-white mb-4">Ready to Join Our Journey?</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg mb-8 max-w-2xl mx-auto">Whether you're looking to build something amazing or join our team, we'd love to hear from you.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/contact" className="w-full sm:w-auto bg-navy text-white hover:bg-navy-dark dark:bg-teal-accent dark:text-navy dark:hover:bg-teal-accent/90 px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-navy/20 active:scale-95 hover:-translate-y-1 flex items-center justify-center gap-2">
                                Start a Project
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                            <a href="mailto:careers@geezek.com" className="w-full sm:w-auto bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-navy dark:text-white px-8 py-4 rounded-xl font-bold transition-all border border-gray-200 dark:border-white/10 flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">work</span>
                                View Careers
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}
