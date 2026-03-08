import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight, Github, Chrome, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';
import { motion } from 'framer-motion';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        agreed: false
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.6
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <AuthLayout
            title="Create Account"
            subtitle="Start your 30-day free trial today"
            image="https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=1974&auto=format&fit=crop"
        >
            <motion.form
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
                onSubmit={(e) => e.preventDefault()}
            >
                <motion.div variants={itemVariants} className="space-y-1">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-600 transition-colors">
                            <User className="w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 outline-none transition-all text-slate-900 dark:text-white"
                            placeholder="John Doe"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        />
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-1">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-600 transition-colors">
                            <Mail className="w-5 h-5" />
                        </div>
                        <input
                            type="email"
                            className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 outline-none transition-all text-slate-900 dark:text-white"
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-1">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Password</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-600 transition-colors">
                            <Lock className="w-5 h-5" />
                        </div>
                        <input
                            type="password"
                            className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 outline-none transition-all text-slate-900 dark:text-white"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center space-x-2 px-1 py-2">
                    <input
                        type="checkbox"
                        id="terms"
                        className="w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 transition-all cursor-pointer"
                        checked={formData.agreed}
                        onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                    />
                    <label htmlFor="terms" className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
                        I agree to the <span className="text-emerald-600 font-bold">Terms of Service</span>
                    </label>
                </motion.div>

                <motion.button variants={itemVariants} className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-emerald-500/20 transform active:scale-95 transition-all flex items-center justify-center space-x-2 mt-2 group">
                    <span>Create Account</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.div variants={itemVariants} className="relative my-6">
                    <div className="absolute inset-0 flex items-center text-slate-300">
                        <span className="w-full border-t"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white dark:bg-slate-950 px-2 text-slate-500 font-bold">Or register with</span>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center space-x-2 py-3 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                        <Chrome className="w-5 h-5" />
                        <span className="font-bold">Google</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 py-3 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                        <Github className="w-5 h-5" />
                        <span className="font-bold">GitHub</span>
                    </button>
                </motion.div>

                <motion.div variants={itemVariants} className="pt-4 text-center">
                    <p className="text-slate-500">
                        Already have an account? <Link to="/login" className="text-emerald-600 font-bold hover:underline">Sign In</Link>
                    </p>
                </motion.div>
            </motion.form>
        </AuthLayout>
    );
};

export default RegisterPage;

