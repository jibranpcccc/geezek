import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'text-navy font-bold bg-navy/5' : 'text-slate-600 hover:text-navy hover:bg-slate-50';
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-gray-100/50 backdrop-blur-xl transition-all duration-300">
            <div className="flex items-center justify-between px-5 md:px-8 h-[72px] max-w-7xl mx-auto w-full">
                {/* Logo Area */}
                <Link to="/" className="flex items-center gap-2.5 group">
                    <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-navy/20 group-hover:scale-105 transition-transform duration-300 bg-white p-1.5">
                        <img src="/favicon.png" alt="Geezek Logo" className="w-full h-full object-contain" />
                    </div>
                    <h1 className="text-navy text-xl font-extrabold tracking-tight hidden sm:block">Geezek<span className="text-teal-accent">.</span></h1>
                </Link>

                <div className="flex items-center gap-6">
                    {/* Desktop Nav Links */}
                    <div className="hidden lg:flex items-center gap-2 font-medium text-sm">
                        <Link to="/" className={`px-4 py-2 rounded-full transition-all duration-200 ${isActive('/')}`}>Home</Link>
                        <Link to="/about" className={`px-4 py-2 rounded-full transition-all duration-200 ${isActive('/about')}`}>About</Link>
                        <Link to="/services" className={`px-4 py-2 rounded-full transition-all duration-200 ${isActive('/services')}`}>Services</Link>
                        <Link to="/portfolio" className={`px-4 py-2 rounded-full transition-all duration-200 ${isActive('/portfolio')}`}>Portfolio</Link>
                        <Link to="/contact" className={`px-4 py-2 rounded-full transition-all duration-200 ${isActive('/contact')}`}>Contact</Link>
                    </div>

                    {/* Action Button - Enhanced */}
                    <Link to="/contact" className="hidden lg:flex items-center justify-center rounded-full bg-navy hover:bg-navy-dark text-white px-6 py-2.5 font-bold text-sm shadow-md hover:shadow-lg shadow-navy/20 transition-all hover:-translate-y-0.5 active:translate-y-0">
                        Book a Call
                    </Link>

                    {/* Mobile Action (Small) */}
                    <Link to="/contact" className="lg:hidden flex items-center justify-center rounded-full border border-gray-200 hover:border-navy/30 bg-white hover:bg-gray-50 w-10 h-10 transition-all shadow-sm group">
                        <span className="material-symbols-outlined text-navy text-xl group-hover:scale-110 transition-transform">call</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
