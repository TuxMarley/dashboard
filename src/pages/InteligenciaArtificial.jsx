import React from 'react';
import { Calendar, BrainCircuit, CheckCircle2, Presentation, ShieldAlert } from 'lucide-react';

const InteligenciaArtificial = () => {
  return (
    <div className="w-full flex-col gap-6">
      <h2 className="text-2xl font-bold mb-4 font-serif">Inteligencia Artificial</h2>
      <p className="text-muted mb-6">Comunidad GenAI, IA Sessions y herramientas desarrolladas con IA.</p>
      
      <div className="glass-card mb-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-xl">Eventos y Herramientas Presentadas</h3>
          <div className="pill-tag" style={{ background: 'rgba(0, 114, 188, 0.15)', color: 'var(--brand-blue)', borderColor: 'rgba(0, 114, 188, 0.3)' }}>
            <span>Hitos Recientes</span>
          </div>
        </div>

        {/* CAOO Presentation Card */}
        <div className="p-6 rounded-3xl" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--glass-border)' }}>
          <div className="flex gap-6 items-start" style={{ flexWrap: 'wrap-reverse' }}>
            
            {/* Text details */}
            <div className="flex-col" style={{ flex: '2 1 400px' }}>
              <div className="flex items-center gap-2 mb-2 text-sm text-cyan font-semibold">
                <BrainCircuit size={20} />
                <span>AI First Mindset</span>
              </div>
              
              <h4 className="font-serif font-bold text-2xl text-white mb-2">CAOO: Continuous Automated QA Orchestrator</h4>
              
              <div className="flex items-center gap-2 text-sm text-muted mb-4">
                <Calendar size={16} />
                <span>Presentado el Jueves 2 de Julio de 2026</span>
              </div>

              <p className="text-sm text-muted mb-4 leading-relaxed">
                CAOO es una herramienta de orquestación de QA con Inteligencia Artificial que convierte automáticamente 
                las incidencias resueltas en Jira en pruebas Playwright ejecutables, trazables y reutilizables.
              </p>

              <div className="flex-col gap-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-white">
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>Validación automatizada de bugs resueltos por el equipo de desarrollo.</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white mt-1">
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>Elimina el trabajo manual de regresión y verificación de incidencias Jira.</span>
                </div>
              </div>
            </div>

            {/* Meeting Screenshot (Small image in the corner/side) */}
            <div className="flex-col items-center" style={{ flex: '1 1 250px', minWidth: '220px' }}>
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--glass-border)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}>
                <img 
                  src="/caoo_presentation.png" 
                  alt="CAOO Presentation AI First Mindset" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  style={{ display: 'block' }}
                />
              </div>
              <p className="text-xs text-muted text-center mt-2 font-serif italic">Captura de la sesión virtual AI First Mindset</p>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  );
};

export default InteligenciaArtificial;
