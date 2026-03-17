import React from 'react';
import { LayoutDashboard, TrendingUp, Milk, Bell } from 'lucide-react';

const DashboardOverview = () => {
    return (
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
    );
};

export default DashboardOverview;
