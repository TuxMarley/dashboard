import React from 'react';
import { Calendar, Clock, BookOpen, User, Rocket } from 'lucide-react';

const StudioQA = () => {
  return (
    <div className="w-full flex-col gap-6">
      <h2 className="text-2xl font-bold mb-4 font-serif">Studio QA</h2>
      <p className="text-muted mb-6">Formaciones y asesorías para nuevos proyectos de automatización e IA.</p>
      
      <div className="glass-card mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-xl">Próximas Formaciones</h3>
          <div className="pill-tag" style={{ background: 'rgba(230, 182, 0, 0.15)', color: 'var(--brand-gold)', borderColor: 'rgba(230, 182, 0, 0.3)' }}>
            <span>Esta Semana</span>
          </div>
        </div>

        {/* Training Card */}
        <div className="p-5 rounded-3xl" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--glass-border)' }}>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full" style={{ background: 'var(--brand-blue)' }}>
              <Rocket size={24} color="#fff" />
            </div>
            
            <div className="flex-col w-full">
              <h4 className="font-bold text-lg text-white mb-2">Automatización Web con Argus y Agentes IA</h4>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted">
                  <Calendar size={16} className="text-cyan" />
                  <span>Miércoles 29 y Jueves 30 de Julio</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <Clock size={16} className="text-cyan" />
                  <span>2 Sesiones de 1.5 horas c/u</span>
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
                    Su estructura ha sido diseñada específicamente para lograr una integración ideal y un trabajo fluido 
                    con herramientas de Inteligencia Artificial.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default StudioQA;
