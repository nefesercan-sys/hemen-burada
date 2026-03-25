'use client';
import { useState } from 'react';

export default function IlanVer() {
  const [formData, setFormData] = useState({ title: '', price: '', description: '' });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 cyber-card">
      <h1 className="text-2xl font-bold text-neon-blue mb-6">Yeni İlan Oluştur</h1>
      <form className="space-y-4">
        <input 
          className="w-full bg-slate-800 p-3 rounded border border-slate-700 focus:border-neon-blue outline-none"
          placeholder="Eşya veya Yetenek Adı"
          onChange={(e) => setFormData({...formData, title: e.target.value})}
        />
        <input 
          type="number"
          className="w-full bg-slate-800 p-3 rounded border border-slate-700 focus:border-neon-blue outline-none"
          placeholder="Saatlik Ücret (TL)"
          onChange={(e) => setFormData({...formData, price: e.target.value})}
        />
        <textarea 
          className="w-full bg-slate-800 p-3 rounded border border-slate-700 focus:border-neon-blue outline-none"
          placeholder="Detaylı açıklama..."
          rows={4}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
        <button className="w-full bg-neon-blue hover:bg-sky-500 text-black font-bold py-3 rounded-lg transition-all shadow-neon-glow">
          İlanı Yayınla
        </button>
      </form>
    </div>
  );
}
