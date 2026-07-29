import React from 'react';
import { Bot, Calendar, CheckCircle2, Clock, BookOpen, User } from 'lucide-react';

const StudioQA = () => {
  return (
    <div className="w-full flex-col gap-6">
      <h2 className="text-2xl font-bold mb-4 font-serif">Studio QA</h2>
      <p className="text-muted mb-6">Formaciones y asesorías para nuevos proyectos de automatización e IA.</p>
      
      <div className="glass-card mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-xl">Formación Argus</h3>
          <div className="pill-tag" style={{ background: 'rgba(74, 222, 128, 0.12)', color: '#8ee6b0', borderColor: 'rgba(74, 222, 128, 0.3)' }}>
            <span>En curso</span>
          </div>
        </div>

        {/* Training Card */}
        <div className="p-5 rounded-3xl" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--glass-border)' }}>
          <div className="flex gap-6 items-start" style={{ flexWrap: 'wrap-reverse' }}>
            <div className="p-3 rounded-full" style={{ background: 'var(--brand-blue)', height: 'fit-content' }}>
              <Bot size={24} color="#fff" />
            </div>
            
            <div className="flex-col" style={{ flex: '2 1 400px' }}>
              <h4 className="font-bold text-lg text-white mb-2">Argus: automatización con agentes de Inteligencia Artificial</h4>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted">
                  <Calendar size={16} className="text-cyan" />
                  <span>Miércoles 29 y Jueves 30 de Julio de 2026</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <Clock size={16} className="text-cyan" />
                  <span>Teoría hoy · Práctica mañana</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <User size={16} className="text-cyan" />
                  <span>Instructor: Jimmy Cuevas</span>
                </div>
              </div>
              
              <div className="p-4 rounded-2xl" style={{ background: 'rgba(0, 114, 188, 0.1)', border: '1px solid rgba(0, 114, 188, 0.2)' }}>
                <div className="flex items-start gap-3">
                  <BookOpen size={20} className="text-cyan mt-1 flex-shrink-0" />
                  <p className="text-sm" style={{ color: '#cfd8fc' }}>
                    <strong className="text-white">Argus:</strong> Framework de automatización propietario desarrollado en <strong>Playwright</strong>. 
                    Su estructura permite un trabajo fluido con agentes de Inteligencia Artificial mediante <strong>Access Plugin</strong>, <strong>Codex</strong> o <strong>GitHub Copilot</strong>.
                  </p>
                </div>
              </div>

              <div className="flex-col gap-2 mt-4">
                <div className="flex items-center gap-2 text-sm" style={{ color: '#8ee6b0' }}>
                  <CheckCircle2 size={18} />
                  <span className="font-semibold">Parte teórica realizada hoy</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <Clock size={18} className="text-purple" />
                  <span>Parte práctica programada para mañana.</span>
                </div>
              </div>

            </div>

            <div className="flex-col items-center" style={{ flex: '1.2 1 300px', minWidth: '280px' }}>
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--glass-border)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}>
                <img
                  src="/argus_training_july_29.png"
                  alt="Formación teórica de Argus sobre agentes de inteligencia artificial para automatización"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  style={{ display: 'block' }}
                />
              </div>
              <p className="text-xs text-muted text-center mt-2 font-serif italic">Evidencia de la sesión teórica de formación Argus</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default StudioQA;
