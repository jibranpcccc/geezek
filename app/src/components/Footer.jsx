import { Link } from 'react-router-dom';
import { FadeIn } from './ScrollReveal';

export default function Footer() {
    return (
        <footer className="bg-navy-dark dark:bg-slate-950 text-white pt-16 pb-8 border-t border-white/5 relative overflow-hidden transition-colors duration-300">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-accent/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

            <FadeIn>
                <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">

                        {/* Brand Column */}
                        <div className="space-y-6">
                            <Link to="/" className="flex items-center gap-3 group">
                                <div className="w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-transform bg-white/10 p-2">
                                    <img src="/favicon.png" alt="Geezek Logo" className="w-full h-full object-contain" />
                                </div>
                                <h2 className="text-2xl font-extrabold tracking-tight text-white">Geezek</h2>
                            </Link>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                                Empowering businesses with cutting-edge digital solutions. From Hyderabad to the world, we build systems that scale.
                            </p>
                            <div className="flex items-center gap-4">
                                <a href="https://www.linkedin.com/company/geezakitsolutions" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-accent hover:text-navy-dark transition-all duration-300 group">
                                    <span className="text-lg font-bold">In</span>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-accent hover:text-navy-dark transition-all duration-300 group">
                                    <span className="text-lg font-bold">X</span>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-accent hover:text-navy-dark transition-all duration-300 group">
                                    <span className="text-lg font-bold">Fb</span>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-white text-center md:text-left">Company</h3>
                            <ul className="space-y-4 text-center md:text-left">
                                <li><Link to="/" className="text-slate-400 hover:text-teal-accent transition-colors text-sm">Home</Link></li>
                                <li><Link to="/about" className="text-slate-400 hover:text-teal-accent transition-colors text-sm">About Us</Link></li>
                                <li><Link to="/services" className="text-slate-400 hover:text-teal-accent transition-colors text-sm">Services</Link></li>
                                <li><Link to="/portfolio" className="text-slate-400 hover:text-teal-accent transition-colors text-sm">Portfolio</Link></li>
                                <li><Link to="/contact" className="text-slate-400 hover:text-teal-accent transition-colors text-sm">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-white text-center md:text-left">Services</h3>
                            <ul className="space-y-4 text-center md:text-left">
                                <li><Link to="/services/web-development" className="text-slate-400 hover:text-teal-accent transition-colors text-sm">Web Development</Link></li>
                                <li><Link to="/services/seo-optimization" className="text-slate-400 hover:text-teal-accent transition-colors text-sm">SEO Optimization</Link></li>
                                <li><Link to="/services/social-media" className="text-slate-400 hover:text-teal-accent transition-colors text-sm">Social Media Mgmt</Link></li>
                                <li><Link to="/services/ecommerce" className="text-slate-400 hover:text-teal-accent transition-colors text-sm">E-Commerce Solutions</Link></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-white text-center md:text-left">Contact</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 justify-center md:justify-start">
                                    <span className="material-symbols-outlined text-teal-accent mt-0.5">location_on</span>
                                    <span className="text-slate-400 text-sm">Site Area,<br />Hyderabad, Sindh</span>
                                </li>
                                <li className="flex items-center gap-3 justify-center md:justify-start">
                                    <span className="material-symbols-outlined text-teal-accent">mail</span>
                                    <a href="mailto:hello@geezek.com" className="text-slate-400 hover:text-white transition-colors text-sm">hello@geezek.com</a>
                                </li>
                                <li className="flex items-center gap-3 justify-center md:justify-start">
                                    <span className="material-symbols-outlined text-teal-accent">call</span>
                                    <a href="tel:+923332622962" className="text-slate-400 hover:text-white transition-colors text-sm">0333 2622962</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-slate-500 text-xs">© 2026 Geezek. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Privacy Policy</a>
                            <a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </footer>
    );
}
