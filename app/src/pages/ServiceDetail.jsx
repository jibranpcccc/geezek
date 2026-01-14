import { Helmet } from 'react-helmet-async';
import { Link, useParams, Navigate } from 'react-router-dom';
import { SERVICES, PROJECTS, TESTIMONIALS } from '../constants';
import ScrollReveal, { FadeIn } from '../components/ScrollReveal';

// Extended service data with comprehensive details
const SERVICE_DETAILS = {
    'seo-optimization': {
        slug: 'seo-optimization',
        title: 'SEO Optimization',
        tagline: 'Dominate Search Rankings',
        description: 'Our data-driven SEO strategies are designed to increase your organic visibility, drive qualified traffic, and maximize ROI. We combine technical expertise with creative content strategies to help you outrank your competitors.',
        icon: 'search_insights',
        heroImage: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&q=80&w=1200',
        features: [
            { title: 'Keyword Research & Strategy', desc: 'In-depth analysis of high-value keywords with search intent mapping to target users at every stage of the buyer journey.', icon: 'key' },
            { title: 'On-Page Optimization', desc: 'Technical optimizations including meta tags, header structure, internal linking, and content optimization for maximum relevance.', icon: 'tune' },
            { title: 'Technical SEO Audit', desc: 'Comprehensive site audits covering crawlability, indexation, Core Web Vitals, mobile-friendliness, and site architecture.', icon: 'settings' },
            { title: 'Link Building', desc: 'White-hat link acquisition strategies including guest posting, digital PR, and high-authority backlink development.', icon: 'link' },
            { title: 'Local SEO', desc: 'Google Business Profile optimization, local citations, and geo-targeted strategies for businesses serving specific areas.', icon: 'location_on' },
            { title: 'Analytics & Reporting', desc: 'Monthly performance reports with actionable insights, ranking tracking, and conversion analysis.', icon: 'analytics' },
        ],
        process: [
            { step: 1, title: 'Discovery', desc: 'We analyze your current rankings, competitors, and market opportunities.' },
            { step: 2, title: 'Strategy', desc: 'Develop a customized SEO roadmap aligned with your business goals.' },
            { step: 3, title: 'Implementation', desc: 'Execute on-page, technical, and off-page optimizations systematically.' },
            { step: 4, title: 'Monitor & Optimize', desc: 'Continuous tracking and refinement to maintain and improve rankings.' },
        ],
        stats: [
            { value: '150%', label: 'Average Traffic Increase' },
            { value: '45+', label: 'First Page Rankings' },
            { value: '3-6 mo', label: 'Results Timeline' },
        ],
        faqs: [
            { q: 'How long does it take to see SEO results?', a: 'Most clients see measurable improvements within 3-6 months. SEO is a long-term strategy, and the best results come after 12+ months of consistent effort.' },
            { q: 'Do you guarantee first page rankings?', a: 'We don\'t make unrealistic guarantees, but our track record shows 85% of our clients achieve first-page rankings for their target keywords within 6 months.' },
            { q: 'What industries do you specialize in?', a: 'We\'ve worked with e-commerce, healthcare, real estate, fintech, and local service businesses across Pakistan and internationally.' },
        ],
        pricing: { starting: 'PKR 50,000', note: 'Custom packages based on scope and competition' },
    },
    'web-development': {
        slug: 'web-development',
        title: 'Web Development',
        tagline: 'Modern Digital Experiences',
        description: 'We build custom websites and web applications that combine stunning design with powerful functionality. From simple landing pages to complex enterprise solutions, we deliver code that performs.',
        icon: 'terminal',
        heroImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200',
        features: [
            { title: 'Custom Web Applications', desc: 'Full-stack development using React, Next.js, Node.js, and modern frameworks tailored to your exact needs.', icon: 'code' },
            { title: 'Responsive Design', desc: 'Mobile-first designs that look perfect on every device, from smartphones to 4K displays.', icon: 'devices' },
            { title: 'E-Commerce Solutions', desc: 'Shopify, WooCommerce, and custom storefronts with secure payment integration and inventory management.', icon: 'shopping_cart' },
            { title: 'CMS Development', desc: 'WordPress, Strapi, and headless CMS implementations for easy content management.', icon: 'edit_document' },
            { title: 'API Development', desc: 'RESTful and GraphQL APIs for seamless integrations with third-party services and mobile apps.', icon: 'api' },
            { title: 'Performance Optimization', desc: 'Lightning-fast load times through code optimization, CDN setup, and caching strategies.', icon: 'speed' },
        ],
        process: [
            { step: 1, title: 'Discovery', desc: 'We understand your requirements, target audience, and business goals.' },
            { step: 2, title: 'Design', desc: 'Create wireframes and high-fidelity mockups for your approval.' },
            { step: 3, title: 'Development', desc: 'Build your solution with clean, maintainable code and regular updates.' },
            { step: 4, title: 'Launch & Support', desc: 'Deploy, train your team, and provide ongoing maintenance.' },
        ],
        stats: [
            { value: '100+', label: 'Websites Launched' },
            { value: '99.9%', label: 'Uptime Guarantee' },
            { value: '<2s', label: 'Average Load Time' },
        ],
        faqs: [
            { q: 'What technologies do you use?', a: 'We specialize in React, Next.js, Node.js, MongoDB, PostgreSQL, and WordPress. We choose the best stack for each project.' },
            { q: 'How long does a website take to build?', a: 'Simple websites take 2-4 weeks. Complex web applications can take 2-6 months depending on features.' },
            { q: 'Do you provide hosting?', a: 'Yes, we offer managed hosting solutions with SSL, daily backups, and 24/7 monitoring.' },
        ],
        pricing: { starting: 'PKR 80,000', note: 'Based on complexity and features' },
    },
    'social-media': {
        slug: 'social-media',
        title: 'Social Media Management',
        tagline: 'Build Your Digital Community',
        description: 'Transform your social presence into a powerful brand-building machine. We create engaging content, grow your following, and turn followers into customers through strategic social media management.',
        icon: 'hub',
        heroImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200',
        features: [
            { title: 'Content Strategy', desc: 'Data-driven content calendars with themes, formats, and posting schedules optimized for your audience.', icon: 'calendar_month' },
            { title: 'Content Creation', desc: 'Professional graphics, videos, reels, and stories that capture attention and drive engagement.', icon: 'draw' },
            { title: 'Community Management', desc: 'Active engagement with your audience, responding to comments, DMs, and building relationships.', icon: 'forum' },
            { title: 'Paid Advertising', desc: 'Meta, TikTok, and LinkedIn ad campaigns with precise targeting and optimized spending.', icon: 'campaign' },
            { title: 'Influencer Marketing', desc: 'Strategic partnerships with relevant influencers to expand your reach authentically.', icon: 'star' },
            { title: 'Analytics & Insights', desc: 'Monthly reports on growth, engagement, reach, and actionable recommendations.', icon: 'insights' },
        ],
        process: [
            { step: 1, title: 'Audit', desc: 'Analyze your current social presence and competitor landscape.' },
            { step: 2, title: 'Strategy', desc: 'Develop a tailored content and growth strategy for each platform.' },
            { step: 3, title: 'Execute', desc: 'Create and publish content, engage with community, run campaigns.' },
            { step: 4, title: 'Optimize', desc: 'Review performance data and refine approach monthly.' },
        ],
        stats: [
            { value: '500K+', label: 'Total Reach Generated' },
            { value: '10x', label: 'Avg Engagement Increase' },
            { value: '50+', label: 'Brands Managed' },
        ],
        faqs: [
            { q: 'Which platforms do you manage?', a: 'We manage Instagram, Facebook, LinkedIn, TikTok, Twitter/X, and YouTube.' },
            { q: 'How many posts per week?', a: 'Typically 3-5 posts per platform per week, plus stories and engagement activities.' },
            { q: 'Do you handle paid ads?', a: 'Yes, we manage complete ad campaigns including creative, targeting, and optimization.' },
        ],
        pricing: { starting: 'PKR 40,000', note: 'Per platform per month' },
    },
    'brand-identity': {
        slug: 'brand-identity',
        title: 'Brand Identity',
        tagline: 'Memorable Brands That Resonate',
        description: 'Your brand is more than a logo—it\'s the entire experience customers have with your business. We craft cohesive visual identities that communicate your values, attract your ideal customers, and stand the test of time.',
        icon: 'palette',
        heroImage: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200',
        features: [
            { title: 'Logo Design', desc: 'Custom logo concepts with multiple variations for different use cases and applications.', icon: 'format_shapes' },
            { title: 'Color Palette', desc: 'Strategic color systems that evoke the right emotions and ensure brand consistency.', icon: 'palette' },
            { title: 'Typography', desc: 'Curated font pairings that complement your brand personality across all materials.', icon: 'text_fields' },
            { title: 'Brand Guidelines', desc: 'Comprehensive style guides ensuring consistent application across all touchpoints.', icon: 'menu_book' },
            { title: 'Marketing Materials', desc: 'Business cards, letterheads, social templates, and presentation decks.', icon: 'content_copy' },
            { title: 'Brand Strategy', desc: 'Positioning, messaging, and voice guidelines that resonate with your target audience.', icon: 'psychology' },
        ],
        process: [
            { step: 1, title: 'Discovery', desc: 'Deep dive into your business, audience, competitors, and aspirations.' },
            { step: 2, title: 'Concepts', desc: 'Present 3-5 creative directions for your brand identity.' },
            { step: 3, title: 'Refinement', desc: 'Iterate on the chosen direction until it\'s perfect.' },
            { step: 4, title: 'Delivery', desc: 'Complete brand package with all files and guidelines.' },
        ],
        stats: [
            { value: '200+', label: 'Brands Created' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '2-4 wk', label: 'Turnaround Time' },
        ],
        faqs: [
            { q: 'How many logo concepts do you provide?', a: 'We provide 3-5 initial concepts, then unlimited revisions on the chosen direction.' },
            { q: 'Do you work with existing brands?', a: 'Yes, we offer brand refresh and evolution services for established businesses.' },
            { q: 'What files do I receive?', a: 'Vector files (AI, SVG, EPS), PNG, JPG, and PDF versions for all use cases.' },
        ],
        pricing: { starting: 'PKR 60,000', note: 'Complete brand identity package' },
    },
    'content-marketing': {
        slug: 'content-marketing',
        title: 'Content Marketing',
        tagline: 'Stories That Sell',
        description: 'Content is the fuel that powers modern marketing. We create compelling blogs, videos, and marketing materials that educate your audience, build trust, and drive conversions at every stage of the funnel.',
        icon: 'edit_note',
        heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
        features: [
            { title: 'Blog Writing', desc: 'SEO-optimized articles that establish thought leadership and drive organic traffic.', icon: 'article' },
            { title: 'Video Production', desc: 'Explainer videos, testimonials, and social content that engages and converts.', icon: 'videocam' },
            { title: 'Email Marketing', desc: 'Newsletters and automated sequences that nurture leads and retain customers.', icon: 'mail' },
            { title: 'Copywriting', desc: 'Persuasive web copy, ad copy, and sales materials that drive action.', icon: 'sell' },
            { title: 'Case Studies', desc: 'Detailed success stories that showcase your expertise and build credibility.', icon: 'fact_check' },
            { title: 'Whitepapers & eBooks', desc: 'In-depth resources that generate leads and demonstrate expertise.', icon: 'description' },
        ],
        process: [
            { step: 1, title: 'Strategy', desc: 'Define content goals, audience personas, and editorial calendar.' },
            { step: 2, title: 'Create', desc: 'Research, write, and produce high-quality content assets.' },
            { step: 3, title: 'Distribute', desc: 'Publish and promote content across relevant channels.' },
            { step: 4, title: 'Measure', desc: 'Track performance and optimize content strategy over time.' },
        ],
        stats: [
            { value: '500+', label: 'Articles Published' },
            { value: '3x', label: 'Avg Lead Increase' },
            { value: '85%', label: 'Organic Traffic Growth' },
        ],
        faqs: [
            { q: 'How often should I publish content?', a: 'We recommend 2-4 blog posts per month for consistent SEO growth.' },
            { q: 'Do you create video content?', a: 'Yes, we offer video scripting, production, and editing services.' },
            { q: 'Can you work with my existing team?', a: 'Absolutely. We complement in-house teams with scalable content production.' },
        ],
        pricing: { starting: 'PKR 30,000', note: 'Per 4 blog articles' },
    },
    'ecommerce': {
        slug: 'ecommerce',
        title: 'E-Commerce Solutions',
        tagline: 'Turn Visitors Into Buyers',
        description: 'Launch and scale your online store with our end-to-end e-commerce solutions. From platform selection to conversion optimization, we help you sell more and grow faster.',
        icon: 'shopping_cart',
        heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1200',
        features: [
            { title: 'Shopify Development', desc: 'Custom Shopify themes and apps tailored to your brand and business needs.', icon: 'storefront' },
            { title: 'WooCommerce', desc: 'WordPress-based stores with full customization and plugin ecosystem.', icon: 'shopping_bag' },
            { title: 'Payment Integration', desc: 'Stripe, PayPal, and local payment gateways configured for seamless checkout.', icon: 'credit_card' },
            { title: 'Inventory Management', desc: 'Automated stock tracking, alerts, and multi-channel synchronization.', icon: 'inventory' },
            { title: 'Conversion Optimization', desc: 'A/B testing, checkout optimization, and UX improvements to boost sales.', icon: 'trending_up' },
            { title: 'Multi-Channel Selling', desc: 'Integration with Amazon, Daraz, Facebook Shops, and other marketplaces.', icon: 'hub' },
        ],
        process: [
            { step: 1, title: 'Planning', desc: 'Define product catalog, features, and platform requirements.' },
            { step: 2, title: 'Design', desc: 'Create a conversion-focused store design aligned with your brand.' },
            { step: 3, title: 'Build', desc: 'Develop, integrate payments, and configure shipping.' },
            { step: 4, title: 'Launch & Grow', desc: 'Go live, train your team, and optimize for growth.' },
        ],
        stats: [
            { value: '50+', label: 'Stores Launched' },
            { value: '35%', label: 'Avg Conversion Lift' },
            { value: '₹10Cr+', label: 'Revenue Generated' },
        ],
        faqs: [
            { q: 'Shopify or WooCommerce?', a: 'Shopify is easier to manage; WooCommerce offers more flexibility. We\'ll recommend based on your needs.' },
            { q: 'Can you migrate my existing store?', a: 'Yes, we handle complete migrations with product, customer, and order history preservation.' },
            { q: 'Do you offer ongoing support?', a: 'We offer maintenance plans including updates, security, and feature additions.' },
        ],
        pricing: { starting: 'PKR 100,000', note: 'Complete store setup' },
    },
};

export default function ServiceDetail() {
    const { slug } = useParams();
    const service = SERVICE_DETAILS[slug];

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    // Find related projects
    const relatedProjects = PROJECTS.filter(p =>
        p.category.toLowerCase().includes(service.title.split(' ')[0].toLowerCase())
    ).slice(0, 3);

    return (
        <div className="flex flex-col gap-16 lg:gap-24">
            <Helmet>
                <title>{service.title} | Geezek - Professional {service.title}</title>
                <meta name="description" content={service.description} />
            </Helmet>

            {/* Hero Section */}
            <section className="relative px-5 lg:px-8 pt-8 lg:pt-16 overflow-hidden max-w-7xl mx-auto w-full">
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-accent/10 dark:bg-teal-accent/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <FadeIn delay={0.1}>
                            <Link to="/services" className="inline-flex items-center gap-2 text-teal-accent text-sm font-bold mb-6 hover:underline">
                                <span className="material-symbols-outlined text-lg">arrow_back</span>
                                All Services
                            </Link>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-soft dark:bg-teal-accent/10 border border-teal-accent/20 dark:border-teal-accent/20 mb-6">
                                <span className="material-symbols-outlined text-teal-accent text-sm">{service.icon}</span>
                                <span className="text-xs font-bold text-teal-accent uppercase tracking-wider">{service.tagline}</span>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <h1 className="text-4xl lg:text-6xl font-extrabold text-navy dark:text-white leading-tight mb-6">
                                {service.title}
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8">
                                {service.description}
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.5}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact" className="bg-navy hover:bg-navy-dark text-white dark:bg-teal-accent dark:text-navy dark:hover:bg-teal-accent/90 px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-navy/20 active:scale-95 hover:-translate-y-1 flex items-center justify-center gap-2">
                                    Get a Free Quote
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </Link>
                                <a href="tel:+923332622962" className="bg-white hover:bg-gray-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-navy dark:text-white px-8 py-4 rounded-xl font-bold transition-all border border-gray-200 dark:border-white/10 flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined">call</span>
                                    0333 2622962
                                </a>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.6}>
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/5">
                                <img
                                    loading="lazy"
                                    src={service.heroImage}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-white/5 card-shadow">
                                <div className="flex items-center gap-4">
                                    {service.stats.map((stat, i) => (
                                        <div key={i} className={`text-center ${i > 0 ? 'border-l border-gray-200 dark:border-white/10 pl-4' : ''}`}>
                                            <p className="text-2xl font-extrabold text-navy dark:text-white">{stat.value}</p>
                                            <p className="text-slate-500 dark:text-slate-400 text-xs">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Features Grid */}
            <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="text-teal-accent font-bold tracking-widest uppercase text-xs">What's Included</span>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-navy dark:text-white mt-2">Our {service.title} Services</h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.features.map((feature, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-100 dark:border-white/5 shadow-soft hover:shadow-lg transition-all hover:-translate-y-1 group h-full">
                                <div className="w-14 h-14 rounded-2xl bg-teal-soft dark:bg-teal-accent/10 flex items-center justify-center mb-5 group-hover:bg-teal-accent/20 transition-colors">
                                    <span className="material-symbols-outlined text-teal-accent text-2xl">{feature.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-navy dark:text-white mb-2">{feature.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full">
                <ScrollReveal>
                    <div className="bg-gradient-to-br from-navy via-navy-dark to-navy dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden border border-white/5">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

                        <div className="text-center mb-12 relative z-10">
                            <span className="text-teal-accent font-bold tracking-widest uppercase text-xs">How We Work</span>
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mt-2">Our Process</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                            {service.process.map((step, i) => (
                                <ScrollReveal key={i} delay={i * 0.1}>
                                    <div className="relative h-full">
                                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 h-full hover:bg-white/20 transition-colors">
                                            <div className="w-12 h-12 rounded-full bg-teal-accent text-navy font-extrabold text-xl flex items-center justify-center mb-4">
                                                {step.step}
                                            </div>
                                            <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                                            <p className="text-white/70 text-sm">{step.desc}</p>
                                        </div>
                                        {i < service.process.length - 1 && (
                                            <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-teal-accent/50"></div>
                                        )}
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* FAQs */}
            <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <FadeIn>
                            <span className="text-teal-accent font-bold tracking-widest uppercase text-xs">FAQ</span>
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-navy dark:text-white mt-2 mb-6">Common Questions</h2>
                            <p className="text-slate-500 dark:text-slate-400 text-lg mb-8">
                                Get answers to the most frequently asked questions about our {service.title.toLowerCase()} services.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="bg-teal-soft dark:bg-slate-800 rounded-2xl p-6 border border-teal-accent/20 dark:border-white/10">
                                <p className="text-navy dark:text-white font-bold mb-2">Starting at</p>
                                <p className="text-3xl font-extrabold text-teal-accent">{service.pricing.starting}</p>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">{service.pricing.note}</p>
                                <Link to="/contact" className="mt-4 w-full bg-navy hover:bg-navy-dark text-white dark:bg-teal-accent dark:text-navy dark:hover:bg-teal-accent/90 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                                    Request a Quote
                                </Link>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="space-y-4">
                        {service.faqs.map((faq, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <details className="group bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-white/5 shadow-soft overflow-hidden">
                                    <summary className="p-6 cursor-pointer flex items-center justify-between font-bold text-navy dark:text-white hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                                        {faq.q}
                                        <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-500 dark:text-slate-400">
                                        {faq.a}
                                    </div>
                                </details>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
                <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <span className="text-teal-accent font-bold tracking-widest uppercase text-xs">Case Studies</span>
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-navy dark:text-white mt-2">Related Projects</h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedProjects.map((project, i) => (
                            <ScrollReveal key={project.id} delay={i * 0.1}>
                                <div className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-white/5">
                                    <div className="aspect-[16/10] overflow-hidden">
                                        <img loading="lazy" src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent flex items-end p-6">
                                        <div>
                                            <p className="text-teal-accent text-xs font-bold uppercase">{project.category}</p>
                                            <h3 className="text-white font-bold text-lg">{project.title}</h3>
                                            <p className="text-white/70 text-sm">{project.stat}</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="px-5 lg:px-8 max-w-7xl mx-auto w-full pb-10">
                <ScrollReveal>
                    <div className="bg-gradient-to-r from-navy to-navy-dark dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden border border-white/5">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">Ready to Get Started?</h2>
                            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                                Let's discuss how our {service.title.toLowerCase()} services can help your business grow.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link to="/contact" className="w-full sm:w-auto bg-teal-accent hover:bg-teal-accent/90 text-navy px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                                    Start Your Project
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </Link>
                                <a href="https://wa.me/923332622962" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white/10 border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined">chat</span>
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}
