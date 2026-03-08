import React, { useState } from 'react';
import {
    LayoutDashboard,
    Users,
    Milk,
    TrendingUp,
    Settings,
    Bell,
    Search,
    LogOut,
    ChevronLeft,
    Menu
} from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const SidebarLink = ({ to, icon, label, active, collapsed }) => (
    <Link
        to={to}
        className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${active
            ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30'
            : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-600'
            }`}
    >
        <div className={`transition-transform duration-200 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>
            {icon}
        </div>
        {!collapsed && <span className="font-semibold">{label}</span>}
    </Link>
);

const DashboardLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const links = [
        { to: '/dashboard', label: 'Overview', icon: <LayoutDashboard className="w-5 h-5" /> },
        { to: '/dashboard/cows', label: 'Cattle', icon: <Milk className="w-5 h-5" /> },
        { to: '/dashboard/farmers', label: 'Farmers', icon: <Users className="w-5 h-5" /> },
        { to: '/dashboard/analytics', label: 'Analytics', icon: <TrendingUp className="w-5 h-5" /> },
        { to: '/dashboard/settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex transition-colors duration-300">
            {/* Sidebar */}
            <aside
                className={`bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-all duration-300 flex flex-col fixed h-full z-40 ${collapsed ? 'w-20' : 'w-64'
                    }`}
            >
                <div className="p-6 flex items-center justify-between">
                    {!collapsed && (
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="p-1.5 bg-emerald-600 rounded-lg">
                                <Milk className="text-white w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold dark:text-white">AgriDairyTech</span>
                        </Link>
                    )}
                    {collapsed && (
                        <div className="p-1.5 bg-emerald-600 rounded-lg mx-auto">
                            <Milk className="text-white w-5 h-5" />
                        </div>
                    )}
                </div>

                <nav className="flex-1 px-4 py-4 space-y-2">
                    {links.map((link) => (
                        <SidebarLink
                            key={link.to}
                            {...link}
                            active={location.pathname === link.to}
                            collapsed={collapsed}
                        />
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all group"
                    >
                        <ChevronLeft className={`w-5 h-5 transition-transform duration-300 ${collapsed ? 'rotate-180 mx-auto' : ''}`} />
                        {!collapsed && <span className="font-semibold text-sm">Collapse Menu</span>}
                    </button>

                    <button
                        onClick={() => navigate('/')}
                        className="w-full flex items-center space-x-3 px-4 py-3 mt-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-xl transition-all group"
                    >
                        <LogOut className={`w-5 h-5 ${collapsed ? 'mx-auto' : ''}`} />
                        {!collapsed && <span className="font-semibold text-sm">Sign Out</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`flex-1 transition-all duration-300 ${collapsed ? 'ml-20' : 'ml-64'}`}>
                {/* Header */}
                <header className="h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30 px-8 flex items-center justify-between">
                    <div className="flex items-center flex-1 max-w-md">
                        <div className="relative w-full group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search analytics, farmers, or cattle..."
                                className="w-full pl-12 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all dark:text-white"
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="p-2.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl relative">
                            <Bell className="w-6 h-6" />
                            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                        </button>
                        <div className="h-10 w-px bg-slate-200 dark:border-slate-800 mx-2"></div>
                        <div className="flex items-center space-x-3 pl-2">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold dark:text-white">Admin User</p>
                                <p className="text-xs text-slate-500">Super Admin</p>
                            </div>
                            <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"
                                alt="Avatar"
                                className="w-10 h-10 rounded-xl bg-emerald-100 p-0.5 border-2 border-slate-100 dark:border-slate-700 h-10 w-10 flex-shrink-0"
                            />
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <div className="p-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-8">
                            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Dashboard Overview</h1>
                            <p className="text-slate-500">Welcome back! Here's what's happening on your farm today.</p>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {[
                                { label: "Total Milk Yield", value: "4,250L", change: "+12.5%", icon: <Milk className="text-emerald-600" />, color: "bg-emerald-50" },
                                { label: "Active Cows", value: "142", change: "+2", icon: <LayoutDashboard className="text-emerald-600" />, color: "bg-emerald-50" },
                                { label: "Pending Payments", value: "$1,240", change: "-5%", icon: <TrendingUp className="text-amber-600" />, color: "bg-amber-50" },
                                { label: "Health Alerts", value: "2", active: true, icon: <Bell className="text-rose-600" />, color: "bg-rose-50" }
                            ].map((stat, i) => (
                                <div key={i} className="glass-card p-6 rounded-2xl flex items-center space-x-4">
                                    <div className={`p-4 rounded-xl ${stat.color} dark:bg-opacity-10`}>
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                                        <div className="flex items-baseline space-x-2">
                                            <h4 className="text-2xl font-bold dark:text-white">{stat.value}</h4>
                                            {stat.change && <span className={`text-xs font-bold ${stat.change.startsWith('+') ? 'text-green-500' : 'text-rose-500'}`}>{stat.change}</span>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Placeholder for real content */}
                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 glass-card rounded-[2rem] p-8 h-96 flex items-center justify-center text-slate-400 italic">
                                Dynamic Charts & Yield Analytics Visualization (Coming Soon)
                            </div>
                            <div className="glass-card rounded-[2rem] p-8 h-96 flex flex-col">
                                <h3 className="text-lg font-bold mb-6 dark:text-white">Recent Activity</h3>
                                <div className="space-y-6">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="flex items-start space-x-4">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                                            <div>
                                                <p className="text-sm font-semibold dark:text-white">Milk batch #42{i} verified</p>
                                                <p className="text-xs text-slate-500">10 minutes ago</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;

