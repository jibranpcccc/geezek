import { useState, useEffect } from 'react';

// Floating WhatsApp Button Component
export function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false);
    const phoneNumber = '923332622962';
    const message = 'Hi! I visited your website and would like to discuss a project.';

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-24 lg:bottom-8 right-5 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-all duration-300 group ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
            title="Chat on WhatsApp"
        >
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="absolute right-full mr-3 bg-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium text-gray-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Chat with us!
            </span>
        </a>
    );
}

// Cookie Consent Banner Component
export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 lg:p-6 bg-white border-t border-gray-200 shadow-2xl transform transition-transform duration-500">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-teal-accent text-2xl shrink-0">cookie</span>
                    <p className="text-slate-600 text-sm">
                        We use cookies to enhance your browsing experience and analyze site traffic. By continuing, you agree to our use of cookies.
                    </p>
                </div>
                <div className="flex gap-3 shrink-0">
                    <button
                        onClick={acceptCookies}
                        className="px-6 py-2.5 bg-navy text-white text-sm font-bold rounded-lg hover:bg-navy-dark transition-colors"
                    >
                        Accept All
                    </button>
                    <button
                        onClick={acceptCookies}
                        className="px-6 py-2.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        Essential Only
                    </button>
                </div>
            </div>
        </div>
    );
}

// Animated Counter Component
export function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    let start = 0;
                    const increment = end / (duration / 16);
                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                }
            },
            { threshold: 0.5 }
        );

        const element = document.getElementById(`counter-${end}`);
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    return (
        <span id={`counter-${end}`}>
            {count}{suffix}
        </span>
    );
}

// Custom Cursor Component (Desktop only)
export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, [role="button"]')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <div
                className="hidden lg:block fixed pointer-events-none z-[9999] w-3 h-3 bg-teal-accent rounded-full mix-blend-difference transition-transform duration-75"
                style={{
                    left: position.x - 6,
                    top: position.y - 6,
                    transform: isHovering ? 'scale(3)' : 'scale(1)'
                }}
            />
            <div
                className="hidden lg:block fixed pointer-events-none z-[9998] w-8 h-8 border-2 border-navy/30 rounded-full transition-all duration-300"
                style={{
                    left: position.x - 16,
                    top: position.y - 16,
                    transform: isHovering ? 'scale(1.5)' : 'scale(1)',
                    opacity: isHovering ? 0.5 : 0.3
                }}
            />
        </>
    );
}

// Scroll Progress Bar
export function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPosition = window.scrollY;
            setProgress((scrollPosition / totalHeight) * 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-[60]">
            <div
                className="h-full bg-gradient-to-r from-navy to-teal-accent transition-all duration-150"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}

// Back to Top Button
export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-24 lg:bottom-8 left-5 z-50 w-12 h-12 bg-navy/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-navy transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            title="Back to top"
        >
            <span className="material-symbols-outlined text-white">arrow_upward</span>
        </button>
    );
}
