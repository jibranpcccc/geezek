import { Outlet, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { HelmetProvider } from 'react-helmet-async';

// Scroll to top on route change
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default function Layout() {
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/', icon: 'home' },
        { name: 'Services', path: '/services', icon: 'grid_view' },
        { name: 'Portfolio', path: '/portfolio', icon: 'folder_open' },
        { name: 'Contact', path: '/contact', icon: 'mail' },
    ];

    return (
        <HelmetProvider>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 transition-colors duration-300">
                <Header />

                {/* Main Content Area */}
                <main className="flex-1 w-full flex flex-col pt-16 pb-24 lg:pb-0">
                    <Outlet />
                </main>

                {/* Bottom Navigation for Mobile */}
                <nav className="fixed bottom-0 left-0 right-0 z-50 glass-nav border-t border-gray-200 dark:border-white/5 pb-safe lg:hidden dark:bg-slate-900/80 backdrop-blur-xl">
                    <div className="flex items-center justify-around h-[84px] pb-4 px-2">
                        {navItems.map((item) => {
                            const active = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="flex flex-col items-center justify-center gap-1 w-16 group"
                                >
                                    <div className={`w-12 h-8 rounded-full flex items-center justify-center transition-colors ${active ? 'bg-navy/10 dark:bg-teal-accent/10' : 'bg-transparent group-hover:bg-gray-50 dark:group-hover:bg-white/5'}`}>
                                        <span className={`material-symbols-outlined text-2xl transition-colors ${active ? 'text-navy dark:text-teal-accent filled' : 'text-slate-400 group-hover:text-navy dark:group-hover:text-white'}`}>
                                            {item.icon}
                                        </span>
                                    </div>
                                    <span className={`text-[10px] font-bold transition-colors ${active ? 'text-navy dark:text-teal-accent' : 'text-slate-400 group-hover:text-navy dark:group-hover:text-white'}`}>
                                        {item.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </nav>

                {/* Full Footer */}
                <Footer />
            </div>
        </HelmetProvider>
    );
}

