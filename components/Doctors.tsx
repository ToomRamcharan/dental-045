'use client';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { doctors } from '@/lib/data';

export default function Doctors() {
  return (
    <section id="doctors" className="py-20 md:py-28" style={{background: '#ffffff'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4" style={{color: '#0f172a'}}>Meet Our <span className="gradient-text">Doctors</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((d, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" style={{background: '#ffffff', boxShadow: '0 4px 20px rgba(0,0,0,0.05)'}}>
              <div className="h-48 flex items-center justify-center" style={{background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #3b82f6 100%)'}}>
                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white text-3xl font-heading font-bold">
                  {d.name.split(' ').slice(-1)[0][0]}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl mb-1" style={{color: '#0f172a'}}>{d.name}</h3>
                <p className="text-sm font-medium mb-2" style={{color: '#2563eb'}}>{d.specialty}</p>
                <div className="flex items-center gap-2 text-sm" style={{color: '#64748b'}}>
                  <Award size={14} /> {d.qualifications} | {d.experience}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
