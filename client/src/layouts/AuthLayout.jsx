import React from 'react';
import { motion } from 'framer-motion';
import { Milk, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuthLayout = ({ children, title, subtitle, image }) => {
    return (
        <div className="min-h-screen flex bg-white dark:bg-slate-950 font-sans overflow-hidden">
            {/* Left Wall: Split screen branding */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="hidden lg:flex w-1/2 relative overflow-hidden bg-emerald-600"
            >
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 opacity-20"
                >
                    <img
                        src={image}
                        alt="Branding"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800/80 to-teal-900/50"></div>
                </motion.div>

                <div className="relative z-10 w-full flex flex-col justify-between p-16 text-white text-left">
                    <Link to="/" className="flex items-center space-x-2 group w-fit">
                        <motion.div
                            initial={{ rotate: -180, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="p-2 bg-white rounded-xl"
                        >
                            <Milk className="text-emerald-600 w-6 h-6" />
                        </motion.div>
                        <motion.span
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="text-2xl font-bold tracking-tight text-white"
                        >
                            Agri<span className="text-emerald-200">DairyTech</span>
                        </motion.span>
                    </Link>

                    <div className="max-w-md">
                        <motion.h2
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-5xl font-extrabold leading-tight mb-6"
                        >
                            Building the future of <span className="text-emerald-200 underline decoration-emerald-100/30">digital dairy</span>.
                        </motion.h2>
                        <motion.p
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-xl text-emerald-100/80 leading-relaxed"
                        >
                            Join thousands of modern farmers and start tracking your path to success today.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex items-center space-x-4"
                    >
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <img key={i} className="w-10 h-10 rounded-full border-2 border-emerald-600" src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 50}`} alt="user" />
                            ))}
                        </div>
                        <p className="text-sm font-medium text-emerald-100">Trusted by over 10,000+ users</p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Right Wall: Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-12 relative">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="absolute top-8 left-8 lg:hidden"
                >
                    <Link to="/" className="flex items-center space-x-2">
                        <Milk className="text-emerald-600 w-8 h-8" />
                        <span className="text-2xl font-bold text-slate-900 dark:text-white">AgriDairyTech</span>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-md w-full mx-auto"
                >
                    <div className="mb-10 text-left">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link to="/" className="inline-flex items-center text-slate-500 hover:text-emerald-600 transition-colors mb-6 text-sm font-medium group">
                                <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                                Back to Home
                            </Link>
                        </motion.div>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight"
                        >
                            {title}
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-slate-500 dark:text-slate-400"
                        >
                            {subtitle}
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {children}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-8 text-center text-sm text-slate-500"
                    >
                        By signing in, you agree to our <a href="#" className="text-emerald-600 font-semibold underline underline-offset-4">Terms of Service</a> and <a href="#" className="text-emerald-600 font-semibold underline underline-offset-4">Privacy Policy</a>.
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default AuthLayout;

