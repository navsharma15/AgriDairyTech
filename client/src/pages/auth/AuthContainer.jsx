import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Github, Chrome, Milk, ChevronLeft, Zap, Target, Activity } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AuthContainer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(location.pathname === '/login');
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        setIsLogin(location.pathname === '/login');
        setShowSuccess(false);
    }, [location.pathname]);

    const toggleAuth = () => {
        const newPath = isLogin ? '/register' : '/login';
        navigate(newPath);
    };

    const handleAuthSubmit = (e) => {
        e.preventDefault();
        if (!isLogin) {
            // Simulate account creation
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
                navigate('/login');
            }, 2000);
        } else {
            // Simulate login
            navigate('/dashboard');
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-0 lg:p-6 font-sans overflow-hidden">
            {/* Immersive Full-Screen Background Texture */}
            <div className="fixed inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e3a8a_0%,transparent_50%)]"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative w-full max-w-[1200px] h-screen lg:h-[750px] bg-black/60 backdrop-blur-3xl shadow-[0_0_80px_-20px_rgba(59,130,246,0.5)] lg:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row border border-white/5"
            >
                {/* Visual Side: The Cow & Tech Panel */}
                <div className={`relative hidden lg:flex w-[45%] h-full transition-all duration-700 ease-in-out z-20 ${isLogin ? 'order-1' : 'order-2'}`}>
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.img
                            key={isLogin ? 'cow-login' : 'cow-register'}
                            initial={{ scale: 1.1, filter: 'grayscale(100%)' }}
                            animate={{ scale: 1, filter: 'grayscale(0%)' }}
                            transition={{ duration: 1.5 }}
                            src="/images/auth-cow.png"
                            className="w-full h-full object-cover"
                            alt="Agri Tech"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                        <div className={`absolute inset-0 opacity-40 mix-blend-overlay transition-colors duration-700 ${isLogin ? 'bg-emerald-600' : 'bg-cyan-600'}`}></div>
                    </div>

                    {/* Stats Overlays */}
                    <div className="absolute inset-0 p-12 flex flex-col justify-between z-30">
                        <Link to="/" className="flex items-center space-x-3 group w-fit">
                            <div className="p-2 bg-white rounded-xl shadow-2xl">
                                <Milk className="text-emerald-600 w-6 h-6" />
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-white">Agri<span className="text-emerald-400">DairyTech</span></span>
                        </Link>

                        <div className="space-y-8">
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 space-y-4 max-w-xs"
                            >
                                <div className="flex items-center space-x-3 text-emerald-400">
                                    <Activity className="w-5 h-5" />
                                    <span className="text-xs font-bold uppercase tracking-widest">Live Monitoring</span>
                                </div>
                                <h4 className="text-2xl font-bold text-white leading-tight">
                                    {isLogin ? "Welcome Back to the Herd." : "Join the Digital Frontier."}
                                </h4>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    {isLogin
                                        ? "Your dashboard is ready. All sensors are online and syncing."
                                        : "Start automating your farm with AI-driven health and yield tracking."}
                                </p>
                            </motion.div>

                            <div className="flex space-x-4">
                                <FloatingBadge icon={<Zap className="w-4 h-4" />} label="Real-time" />
                                <FloatingBadge icon={<Target className="w-4 h-4" />} label="AI Powered" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <div className={`w-full lg:w-[55%] h-full relative z-10 flex flex-col justify-center px-8 lg:px-20 py-16 transition-all duration-700 ${isLogin ? 'order-2' : 'order-1'} bg-[#0a0a0a]`}>
                    {/* Mobile Branding */}
                    <div className="absolute top-8 left-8 lg:hidden flex items-center space-x-2">
                        <Milk className="text-emerald-500 w-8 h-8" />
                        <span className="text-2xl font-black text-white">Agri<span className="text-emerald-500">Dairy</span></span>
                    </div>

                    <Link to="/" className="hidden lg:flex absolute top-12 right-12 items-center text-slate-500 hover:text-white transition-colors text-sm font-bold group">
                        <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                        EXIT TO HOME
                    </Link>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isLogin ? 'form-login' : 'form-register'}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="w-full max-w-md mx-auto"
                        >
                            <div className="mb-10 text-left space-y-2">
                                <h2 className="text-5xl font-black text-white tracking-tighter">
                                    {isLogin ? (
                                        <>SIGN <span className="text-emerald-500">IN</span></>
                                    ) : (
                                        <>SIGN <span className="text-cyan-500">UP</span></>
                                    )}
                                </h2>
                                <p className="text-slate-500 font-medium">
                                    {isLogin ? "Access your secure farm management portal" : "Create your account and scale your dairy business"}
                                </p>
                            </div>

                            {showSuccess && !isLogin && (
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="mb-8 p-4 bg-green-500/10 border border-green-500/50 rounded-2xl text-green-500 font-bold text-center"
                                >
                                    ACCOUNT CREATED! REDIRECTING TO LOGIN...
                                </motion.div>
                            )}

                            <form className="space-y-6" onSubmit={handleAuthSubmit}>
                                {!isLogin && (
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Identity</label>
                                        <div className="group relative bg-[#111] p-4 rounded-2xl border border-white/5 focus-within:border-cyan-500/50 transition-all">
                                            <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 group-focus-within:text-cyan-500 transition-colors" />
                                            <input type="text" placeholder="FULL NAME" required className="w-full bg-transparent outline-none text-white font-bold placeholder:text-slate-700" />
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-1">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Portal Link</label>
                                    <div className={`group relative bg-[#111] p-4 rounded-2xl border border-white/5 transition-all ${isLogin ? 'focus-within:border-emerald-500/50' : 'focus-within:border-cyan-500/50'}`}>
                                        <Mail className={`absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 transition-colors ${isLogin ? 'group-focus-within:text-emerald-500' : 'group-focus-within:text-cyan-500'}`} />
                                        <input type="email" placeholder="EMAIL ADDRESS" required className="w-full bg-transparent outline-none text-white font-bold placeholder:text-slate-700" />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <div className="flex justify-between items-center ml-1">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Security Key</label>
                                        {isLogin && <a href="#" className="text-[10px] font-black text-emerald-500 hover:text-emerald-400">LOST PASS?</a>}
                                    </div>
                                    <div className={`group relative bg-[#111] p-4 rounded-2xl border border-white/5 transition-all ${isLogin ? 'focus-within:border-emerald-500/50' : 'focus-within:border-cyan-500/50'}`}>
                                        <Lock className={`absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 transition-colors ${isLogin ? 'group-focus-within:text-emerald-500' : 'group-focus-within:text-cyan-500'}`} />
                                        <input type="password" placeholder="PASSWORD" required className="w-full bg-transparent outline-none text-white font-bold placeholder:text-slate-700" />
                                    </div>
                                </div>

                                <button type="submit" className={`w-full py-5 rounded-[1.2rem] font-black text-lg tracking-widest shadow-2xl transition-all active:scale-95 flex items-center justify-center space-x-3 group ${isLogin
                                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/40'
                                    : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-cyan-900/40'
                                    }`}>
                                    <span>{isLogin ? 'AUTHENTICATE' : 'INITIALIZE'}</span>
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </form>

                            <div className="mt-12 text-center">
                                <p className="text-slate-600 font-bold text-sm">
                                    {isLogin ? "NOT PART OF THE NETWORK?" : "ALREADY IN THE CLUSTER?"}
                                    <button
                                        type="button"
                                        onClick={toggleAuth}
                                        className={`ml-2 underline transition-colors ${isLogin ? 'text-emerald-500 hover:text-emerald-400' : 'text-cyan-500 hover:text-cyan-400'}`}
                                    >
                                        {isLogin ? "JOIN NOW" : "LOGIN INSTEAD"}
                                    </button>
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

const FloatingBadge = ({ icon, label }) => (
    <div className="flex items-center space-x-2 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
        <div className="text-emerald-400">{icon}</div>
        <span>{label}</span>
    </div>
);

export default AuthContainer;

