/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "navy": "#1B365D",
                "navy-dark": "#0F2544",
                "teal-accent": "#14B8A6",
                "teal-soft": "#CCFBF1",
                "surface-light": "#F3F4F6",
                "surface-white": "#FFFFFF",
                "text-main": "#334155",
                "text-heading": "#1e293b",
                "primary": "#2563EB", // Services page blue
                "primary-hover": "#1d4ed8",
            },
            fontFamily: {
                "display": ["Manrope", "sans-serif"],
                "body": ["Noto Sans", "sans-serif"]
            },
            borderRadius: {
                "xl": "0.75rem",
                "2xl": "1rem",
                "3xl": "1.5rem",
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(27, 54, 93, 0.05)',
                'card': '0 2px 8px -1px rgba(0, 0, 0, 0.05)',
                'nav': '0 -4px 20px rgba(0,0,0,0.03)',
                'glow': '0 4px 14px 0 rgba(30, 58, 138, 0.3)',
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
}
