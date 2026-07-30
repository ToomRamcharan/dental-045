'use client';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Star } from 'lucide-react';
import { clinicData } from '@/lib/data';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{background: 'linear-gradient(160deg, #ffffff 0%, #dbeafe 50%, #2563eb 100%)'}}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl" style={{background: '#1d4ed8'}}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl" style={{background: '#2563eb'}}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (<Star key={i} size={18} fill="gold" stroke="gold" />))}
              <span className="text-sm ml-2" style={{color: '#1d4ed8'}}>4.8 on Google</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{color: '#0f172a'}}>
              Your Smile is Our <span className="gradient-text">Passion</span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed" style={{color: '#64748b'}}>
              Experience world-class dental care at Kavitha Reddy Dental Hospital. Expert dentists, modern technology, and compassionate care.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${clinicData.phone}`} className="flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl" style={{background: '#2563eb'}}>
                <Phone size={20} /> Call Now
              </a>
              <a href={`https://wa.me/${clinicData.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg glass transition-all hover:scale-105" style={{color: '#fff'}}>
                <MessageCircle size={20} /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
