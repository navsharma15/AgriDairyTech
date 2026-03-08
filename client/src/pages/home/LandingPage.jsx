import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    TrendingUp,
    ShieldCheck,
    MapPin,
    Zap,
    HeartPulse,
    ArrowRight,
    CheckCircle2,
    ChevronRight,
    Star,
    Quote,
    Milk
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const fadeInUp = {
        initial: { y: 60, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const features = [
        {
            title: "Smart Cow Tracking",
            desc: "Real-time RFID & GPS integration to monitor cattle movement and behavior patterns.",
            icon: <MapPin className="w-6 h-6 text-emerald-600" />,
            color: "emerald"
        },
        {
            title: "Milk Analytics Dashboard",
            desc: "Get deep insights into yield trends, fat content, and quality metrics with AI predictions.",
            icon: <TrendingUp className="w-6 h-6 text-teal-600" />,
            color: "teal"
        },
        {
            title: "Farmer Performance",
            desc: "Comprehensive tools to track productivity, attendance, and incentive payouts.",
            icon: <Users className="w-6 h-6 text-purple-600" />,
            color: "purple"
        },
        {
            title: "Automated Payments",
            desc: "Direct-to-bank settlements for farmers and digital invoicing for bulk distributors.",
            icon: <Zap className="w-6 h-6 text-orange-600" />,
            color: "orange"
        },
        {
            title: "Delivery Tracking",
            desc: "Real-time fleet management with optimized routing for fresh milk distribution.",
            icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
            color: "emerald"
        },
        {
            title: "AI Health Monitoring",
            desc: "Predictive health alerts using biometrics to prevent diseases before they spread.",
            icon: <HeartPulse className="w-6 h-6 text-rose-600" />,
            color: "rose"
        }
    ];

    const stats = [
        { label: "Farms Empowered", value: "500+", suffix: "" },
        { label: "Cows Managed", value: "10", suffix: "K+" },
        { label: "Liters Tracked", value: "1", suffix: "M+" }
    ];

    const testimonials = [
        {
            name: "Rajesh Kumar",
            role: "Owner, GreenPastures Dairy",
            text: "AgriDairyTech transformed our operations. We've seen a 25% increase in yield efficiency in just 6 months.",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh"
        },
        {
            name: "Sneha Patil",
            role: "Operations Manager, PureMilk Co.",
            text: "The AI health monitoring is a lifesaver. We identified potential issues weeks before they became critical.",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha"
        }
    ];

    return (
        <div className="bg-slate-50 dark:bg-slate-950 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-400/20 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-400/10 blur-[120px] rounded-full"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-bold tracking-wide uppercase">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span>The Future of Dairy is Here</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1]">
                                Smart Dairy <br />
                                <span className="gradient-text">Management</span> <br />
                                for the Next Gen.
                            </h1>

                            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                                Empower your farm with AI-driven insights, automated milk tracking,
                                and comprehensive cattle health monitoring. Scale your dairy business with ease.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link to="/register" className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-4">
                                    <span>Get Started Free</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link to="/login" className="btn-secondary flex items-center justify-center space-x-2 text-lg px-8 py-4">
                                    <span>View Live Demo</span>
                                </Link>
                            </div>

                            <div className="flex items-center space-x-6 pt-8">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <img key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900" src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="user" />
                                    ))}
                                </div>
                                <div className="text-sm">
                                    <div className="flex text-amber-500 mb-1">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400">Trusted by <span className="font-bold text-slate-900 dark:text-white">500+</span> farmers worldwide</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative z-10 glass-card p-4 rounded-[2rem] shadow-2xl overflow-hidden animate-float">
                                <img
                                    src="/hero-dairy.png"
                                    alt="Modern Dairy Management"
                                    className="rounded-2xl w-full object-cover"
                                />
                            </div>
                            {/* Floating elements */}
                            <div className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl animate-bounce shadow-xl z-20">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-green-100 rounded-lg text-green-600">
                                        <TrendingUp className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500">Yield Increase</p>
                                        <p className="text-sm font-bold">+24.5%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-8 -left-8 glass-card p-4 rounded-2xl shadow-xl z-20">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-rose-100 rounded-lg text-rose-600">
                                        <HeartPulse className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500">Health Status</p>
                                        <p className="text-sm font-bold text-green-600">All Optimal</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-emerald-600 relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-20 transform translate-x-1/3 -translate-y-1/3">
                    <Milk className="w-96 h-96 text-white" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="space-y-2"
                            >
                                <h3 className="text-5xl font-extrabold text-white leading-none">
                                    {stat.value}<span className="text-emerald-200">{stat.suffix}</span>
                                </h3>
                                <p className="text-emerald-100 text-lg font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-600/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-widest">Premium Features</h2>
                        <p className="text-4xl lg:text-5xl font-extrabold text-white">
                            Everything you need to <span className="gradient-text">automate</span> your dairy farm.
                        </p>
                        <p className="text-lg text-slate-400">
                            One platform, endless possibilities. Built with cutting-edge technology to give you absolute control.
                        </p>
                    </div>

                    <motion.div
                        variants={stagger}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="bg-slate-900/50 backdrop-blur-xl border border-white/5 group p-8 rounded-[2rem] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-b-4 border-transparent hover:border-emerald-600"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-${feature.color}-900/20 flex items-center justify-center mb-6 ring-8 ring-transparent group-hover:scale-110 transition-transform`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    {feature.desc}
                                </p>
                                <Link to="/features" className="inline-flex items-center text-emerald-400 font-semibold text-sm group/btn">
                                    Explore More <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 lg:py-32 bg-slate-100 dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-[2.5rem] overflow-hidden group shadow-2xl"
                        >
                            <img src="/images/hf-cow-about.png" alt="HF Cow with Calf" className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent flex flex-col justify-end p-12">
                                <div className="glass-card p-6 rounded-2xl max-w-sm border-emerald-400/30">
                                    <p className="text-white font-medium italic">"Tradition meets technology. AgriDairyTech is not just an app, it's a movement to digitize the heart of our economy."</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Our Vision</h2>
                            <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                                Empowering <span className="text-emerald-600 underline decoration-emerald-200 decoration-8 underline-offset-4">Farmers</span> with <br /> Intelligent Automation.
                            </h3>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                AgriDairyTech was born out of a simple need: to bring world-class data management to the dairy industry.
                                We believe that every liter of milk tells a story of hard work, and every cow's health is paramount.
                            </p>

                            <div className="space-y-4 pt-4">
                                {[
                                    "Eliminate manual ledger entries forever",
                                    "Gain full transparency in the supply chain",
                                    "AI-driven predictions for better ROI",
                                    "Scalable solution from 1 to 10,000 cows"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start space-x-3">
                                        <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6">
                                <button className="btn-primary">Learn Our Story</button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-24 lg:py-32 bg-slate-900 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative z-10">
                    <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-4">Wall of Fame</h2>
                    <p className="text-4xl font-extrabold text-white">Trusted by Industry Experts</p>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 relative z-10">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-950/40 backdrop-blur-xl border border-white/5 p-10 rounded-[2.5rem] relative group"
                        >
                            <Quote className="absolute top-10 right-10 w-12 h-12 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors" />
                            <div className="flex items-center space-x-4 mb-6">
                                <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-4 border-slate-800" />
                                <div className="text-left">
                                    <h4 className="text-xl font-bold text-white uppercase">{t.name}</h4>
                                    <p className="text-emerald-400 text-sm font-medium uppercase">{t.role}</p>
                                </div>
                            </div>
                            <p className="text-xl text-slate-300 italic leading-relaxed">
                                "{t.text}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto bg-emerald-600 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden text-center shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_-20%,rgba(255,255,255,0.2),transparent)]"></div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative z-10 space-y-8"
                    >
                        <h2 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
                            Ready to modernize <br /> your dairy farm?
                        </h2>
                        <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
                            Join 500+ successful farms using AgriDairyTech to scale their operations and increase revenue.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                            <Link to="/register" className="bg-white text-emerald-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-emerald-50 transition-all shadow-xl">
                                Start Your 30-Day Free Trial
                            </Link>
                            <button className="bg-emerald-700 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-emerald-800 transition-all border border-emerald-500/30">
                                Contact Sales
                            </button>
                        </div>
                        <p className="text-emerald-200 text-sm">No credit card required. Cancel anytime.</p>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-300 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-4 gap-16">
                    <div className="col-span-2 space-y-6">
                        <Link to="/" className="flex items-center space-x-2 group">
                            <div className="p-2 bg-emerald-600 rounded-xl">
                                <Milk className="text-white w-6 h-6" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">
                                Agri<span className="text-emerald-500">DairyTech</span>
                            </span>
                        </Link>
                        <p className="text-lg max-w-md">
                            Leading the digital transformation of the dairy industry with AI and automation.
                            Smart farms, healthy cattle, and pure milk for everyone.
                        </p>
                        <div className="flex space-x-6">
                            {['twitter', 'facebook', 'linkedin', 'instagram'].map(s => (
                                <a key={s} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                                    <span className="capitalize">{s[0]}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Product</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">Case Studies</a></li>
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">API Docs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-8 border-t border-slate-800 text-sm text-center">
                    © {new Date().getFullYear()} AgriDairyTech Technologies Inc. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;

