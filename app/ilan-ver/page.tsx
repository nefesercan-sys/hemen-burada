'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function IlanVer() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ 
    title: '', 
    price: '', 
    description: '',
    category: 'item' // Varsayılan kategori
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/assets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Sisteme giriş yapıldı! İlan yayında. 🚀');
        router.push('/'); // Ana sayfaya yönlendir
      } else {
        alert('Bir hata oluştu, veritabanı bağlantısını kontrol et.');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 cyber-card">
      <h1 className="text-2xl font-bold text-neon-blue mb-6">Yeni İlan Oluştur</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Kategori Seçimi */}
        <select 
          className="w-full bg-slate-800 p-3 rounded border border-slate-700 text-gray-300 focus:border-neon-blue outline-none"
          onChange={(e) => setFormData({...formData, category: e.target.value})}
        >
          <option value="item">Eşya Kiralama</option>
          <option value="skill">Yetenek/Hizmet</option>
          <option value="service">Genel Yardım</option>
        </select>

        <input 
          required
          className="w-full bg-slate-800 p-3 rounded border border-slate-700 focus:border-neon-blue outline-none"
          placeholder="Eşya veya Yetenek Adı"
          onChange={(e) => setFormData({...formData, title: e.target.value})}
        />
        
        <input 
          required
          type="number"
          className="w-full bg-slate-800 p-3 rounded border border-slate-700 focus:border-neon-blue outline-none"
          placeholder="Saatlik Ücret (TL)"
          onChange={(e) => setFormData({...formData, price: e.target.value})}
        />
        
        <textarea 
          required
          className="w-full bg-slate-800 p-3 rounded border border-slate-700 focus:border-neon-blue outline-none"
          placeholder="Detaylı açıklama..."
          rows={4}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
        
        <button 
          disabled={loading}
          type="submit"
          className={`w-full ${loading ? 'bg-gray-600' : 'bg-neon-blue hover:bg-sky-500'} text-black font-bold py-3 rounded-lg transition-all shadow-neon-glow`}
        >
          {loading ? 'Sisteme İşleniyor...' : 'İlanı Yayınla'}
        </button>
      </form>
    </div>
  );
}
