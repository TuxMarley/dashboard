import React from 'react';
import { Calendar, Users, Lightbulb, ShieldAlert, Clock, AlertTriangle } from 'lucide-react';

const Innovacion = () => {
  return (
    <div className="w-full flex-col gap-6">
      <h2 className="text-2xl font-bold mb-4 font-serif">Innovación y PoCs</h2>
      <p className="text-muted mb-6">Pruebas de concepto y pilotos de Inteligencia Artificial para el equipo QA.</p>
      
      <div className="glass-card mb-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-xl">Actividades de Consultoría e Innovación</h3>
          <div className="pill-tag" style={{ background: 'rgba(230, 182, 0, 0.15)', color: 'var(--brand-gold)', borderColor: 'rgba(230, 182, 0, 0.3)' }}>
            <span>Pendiente de Impl.</span>
          </div>
        </div>

        {/* Kosin Project Card */}
        <div className="p-6 rounded-3xl" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--glass-border)' }}>
          <div className="flex gap-6 items-start" style={{ flexWrap: 'wrap-reverse' }}>
            
            {/* Project Details */}
            <div className="flex-col" style={{ flex: '2 1 400px' }}>
              <div className="flex items-center gap-2 mb-2 text-sm text-purple font-semibold">
                <Lightbulb size={20} />
                <span>Asesoría de Automatización con IA</span>
              </div>
              
              <h4 className="font-serif font-bold text-2xl text-white mb-2">Proyecto KOSIN: Planes de Prueba Automatizados</h4>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted">
                  <Calendar size={16} className="text-cyan" />
                  <span>Lunes 13 de Julio de 2026</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <Users size={16} className="text-cyan" />
                  <span>Participantes: Anthony Rangel, Guillermo Ríos</span>
                </div>
              </div>

              <p className="text-sm text-muted mb-4 leading-relaxed">
                Asesoría técnica para el diseño e implementación de un flujo de trabajo automatizado que permita la 
                creación de planes de prueba optimizados mediante Inteligencia Artificial.
              </p>

              {/* Security and Implementation Note */}
              <div className="flex-col gap-3 p-4 rounded-2xl mb-4" style={{ background: 'rgba(230, 182, 0, 0.05)', border: '1px solid rgba(230, 182, 0, 0.15)' }}>
                <div className="flex items-start gap-3">
                  <AlertTriangle size={20} className="text-purple mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-white font-semibold mb-1">Evaluación de TestCraft</p>
                    <p className="text-muted">
                      Se planteó el uso de la herramienta <strong className="text-white">TestCraft</strong> adaptándola 
                      con variaciones de seguridad para ajustarse a las políticas y privacidad del proyecto KOSIN.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-purple font-semibold mt-2">
                <Clock size={14} />
                <span>Estado: Pendiente de implementación futura</span>
              </div>
            </div>

            {/* Screenshots */}
            <div className="flex-col items-center" style={{ flex: '1.2 1 300px', minWidth: '280px' }}>
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--glass-border)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}>
                <img 
                  src="/kosin_consultation.png" 
                  alt="KOSIN Jira Ticket & Consultation Screenshot" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  style={{ display: 'block' }}
                />
              </div>
              <p className="text-xs text-muted text-center mt-2 font-serif italic">Seguimiento en Jira KOSIN con Anthony Rangel</p>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Innovacion;
