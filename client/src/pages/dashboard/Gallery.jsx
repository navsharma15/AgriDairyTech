import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Upload, Milk, Trash2, X } from 'lucide-react';

const Gallery = () => {
    const [activeTab, setActiveTab] = useState('farm');
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    
    const [images, setImages] = useState({
        farm: [
            { id: 1, url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80', title: 'Farm Landscape' },
            { id: 2, url: 'https://images.unsplash.com/photo-1595841697277-2fe654d6faef?w=800&q=80', title: 'Barn' },
        ],
        cows: [
            { id: 3, url: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&q=80', title: 'Dairy Cow' },
            { id: 4, url: 'https://images.unsplash.com/photo-1596733430284-f743727520f9?w=800&q=80', title: 'Calf' },
            { id: 5, url: 'https://images.unsplash.com/photo-1543877087-ebf71fde2be1?w=800&q=80', title: 'Herd' }
        ],
        milk: [
            { id: 6, url: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&q=80', title: 'Milk Collection' },
            { id: 7, url: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&q=80', title: 'Milk Bottles' }
        ]
    });

    const [uploadData, setUploadData] = useState({
        category: 'farm',
        title: '',
        url: ''
    });

    const tabs = [
        { id: 'farm', label: 'Farm Photos', icon: <Camera className="w-4 h-4" /> },
        { id: 'cows', label: 'Cow Images', icon: <ImageIcon className="w-4 h-4" /> },
        { id: 'milk', label: 'Milk Collection', icon: <Milk className="w-4 h-4" /> }
    ];

    const handleDelete = (id, category) => {
        setImages(prev => ({
            ...prev,
            [category]: prev[category].filter(img => img.id !== id)
        }));
    };

    const handleUpload = (e) => {
        e.preventDefault();
        const newImage = {
            id: Date.now(),
            url: uploadData.url,
            title: uploadData.title
        };
        
        setImages(prev => ({
            ...prev,
            [uploadData.category]: [...prev[uploadData.category], newImage]
        }));
        
        setIsUploadModalOpen(false);
        setUploadData({ category: 'farm', title: '', url: '' });
    };

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
                        <ImageIcon className="w-8 h-8 text-emerald-600" />
                        Gallery
                    </h1>
                    <p className="text-slate-500 mt-2">Manage farm photos, cow images, and milk collection records.</p>
                </div>
                
                <button 
                    onClick={() => setIsUploadModalOpen(true)}
                    className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-emerald-500/30 font-semibold"
                >
                    <Upload className="w-5 h-5" />
                    <span>Upload Image</span>
                </button>
            </div>

            {/* Tabs */}
            <div className="glass-card rounded-[2rem] p-2 mb-8 inline-flex flex-wrap gap-2">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                            activeTab === tab.id
                                ? 'bg-emerald-600 text-white shadow-md'
                                : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                    >
                        {tab.icon}
                        <span>{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images[activeTab].map((image) => (
                    <div key={image.id} className="group relative rounded-2xl overflow-hidden glass-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/20">
                        <div className="aspect-[4/3] w-full bg-slate-100 dark:bg-slate-800 relative">
                            <img 
                                src={image.url} 
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1595841697277-2fe654d6faef?w=800&q=80"; // Fallback farm image
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                            <button 
                                onClick={() => handleDelete(image.id, activeTab)}
                                className="flex items-center space-x-1 text-rose-400 hover:text-rose-300 text-sm font-semibold transition-colors"
                            >
                                <Trash2 className="w-4 h-4" />
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                ))}
                
                {images[activeTab].length === 0 && (
                    <div className="col-span-full py-16 flex flex-col items-center justify-center text-slate-400 glass-card rounded-3xl border-dashed border-2 border-slate-300 dark:border-slate-700">
                        <ImageIcon className="w-16 h-16 mb-4 opacity-50" />
                        <p className="text-lg font-medium">No images found in this category.</p>
                        <p className="text-sm mt-1">Upload an image to get started.</p>
                    </div>
                )}
            </div>

            {/* Upload Modal */}
            {isUploadModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/60 backdrop-blur-sm transition-all">
                    <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 max-w-md w-full shadow-2xl relative border border-slate-200 dark:border-slate-800 transform transition-all scale-100 animate-in zoom-in-95">
                        <button 
                            onClick={() => setIsUploadModalOpen(false)}
                            className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Upload Image</h2>
                        
                        <form onSubmit={handleUpload} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Category</label>
                                <select 
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-emerald-500 dark:text-white"
                                    value={uploadData.category}
                                    onChange={(e) => setUploadData({...uploadData, category: e.target.value})}
                                >
                                    <option value="farm">Farm Photos</option>
                                    <option value="cows">Cow Images</option>
                                    <option value="milk">Milk Collection</option>
                                </select>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Image Title</label>
                                <input 
                                    type="text" 
                                    required
                                    placeholder="Enter image title"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-emerald-500 dark:text-white"
                                    value={uploadData.title}
                                    onChange={(e) => setUploadData({...uploadData, title: e.target.value})}
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Image URL</label>
                                <input 
                                    type="url" 
                                    required
                                    placeholder="https://example.com/image.jpg"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-emerald-500 dark:text-white"
                                    value={uploadData.url}
                                    onChange={(e) => setUploadData({...uploadData, url: e.target.value})}
                                />
                                <p className="text-xs text-slate-500 mt-2">For this demo, please paste a direct image URL.</p>
                            </div>
                            
                            <button 
                                type="submit"
                                className="w-full py-3.5 mt-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-emerald-500/30"
                            >
                                Upload Photo
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
