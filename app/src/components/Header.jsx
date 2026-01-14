import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    const isActive = (path) => {
        return location.pathname === path
            ? 'text-navy font-bold bg-navy/5 dark:text-teal-accent dark:bg-teal-accent/10'
            : 'text-slate-600 hover:text-navy hover:bg-slate-50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5';
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-gray-100/50 dark:border-white/5 backdrop-blur-xl transition-all duration-300 dark:bg-slate-900/80">
            <div className="flex items-center justify-between px-5 md:px-8 h-[72px] max-w-7xl mx-auto w-full">
                {/* Logo Area */}
                <Link to="/" className="flex items-center gap-2.5 group">
                    <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-navy/20 dark:shadow-teal-accent/20 group-hover:scale-105 transition-transform duration-300 bg-white dark:bg-slate-800 p-1.5 glass-nav">
                        <img src="/favicon.png" alt="Geezek Logo" className="w-full h-full object-contain" />
                    </div>
                    <h1 className="text-navy dark:text-white text-xl font-extrabold tracking-tight hidden sm:block">Geezek<span className="text-teal-accent">.</span></h1>
                </Link>

                <div className="flex items-center gap-4 lg:gap-6">
                    {/* Desktop Nav Links */}
                    <div className="hidden lg:flex items-center gap-2 font-medium text-sm">
                        <Link to="/" className={`px-4 py-2 rounded-full transition-all duration-200 ${isActive('/')}`}>Home</Link>
                        <Link to="/about" className={`px-4 py-2 rounded-full transition-all duration-200 ${isActive('/about')}`}>About</Link>
                        <Link to="/services" className={`px-4 py-2 rounded-full transition-all duration-200 ${isActive('/services')}`}>Services</Link>
                        <Link to="/portfolio" className={`px-4 py-2 rounded-full transition-all duration-200 ${isActive('/portfolio')}`}>Portfolio</Link>
                        <Link to="/contact" className={`px-4 py-2 rounded-full transition-all duration-200 ${isActive('/contact')}`}>Contact</Link>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-slate-500 hover:text-navy hover:bg-slate-100 dark:text-slate-400 dark:hover:text-teal-accent dark:hover:bg-white/5 transition-colors"
                            aria-label="Toggle Dark Mode"
                        >
                            <span className="material-symbols-outlined text-xl">
                                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                            </span>
                        </button>

                        {/* Action Button - Enhanced */}
                        <Link to="/contact" className="hidden lg:flex items-center justify-center rounded-full bg-navy hover:bg-navy-dark text-white px-6 py-2.5 font-bold text-sm shadow-md hover:shadow-lg shadow-navy/20 dark:shadow-teal-accent/20 transition-all hover:-translate-y-0.5 active:translate-y-0">
                            Book a Call
                        </Link>

                        {/* Mobile Action (Small) */}
                        <Link to="/contact" className="lg:hidden flex items-center justify-center rounded-full border border-gray-200 dark:border-white/10 hover:border-navy/30 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 w-10 h-10 transition-all shadow-sm group">
                            <span className="material-symbols-outlined text-navy dark:text-white text-xl group-hover:scale-110 transition-transform">call</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
