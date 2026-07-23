import React from 'react';
import { Calendar, CheckCircle2, Clock, BookOpen, Code2, User, Rocket } from 'lucide-react';

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

      <div className="glass-card mb-6 flex-col gap-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-xl">Asesorías QA</h3>
          <div className="pill-tag" style={{ background: 'rgba(0, 114, 188, 0.15)', color: 'var(--brand-blue)', borderColor: 'rgba(0, 114, 188, 0.3)' }}>
            <span>Framework BHP</span>
          </div>
        </div>

        {/* ArgusPy framework card */}
        <div className="p-6 rounded-3xl" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--glass-border)' }}>
          <div className="flex-col gap-6">
            <div className="flex-col">
              <div className="flex items-center gap-2 mb-2 text-sm text-cyan font-semibold">
                <Code2 size={20} />
                <span>Automatización web con IA</span>
              </div>

              <h4 className="font-serif font-bold text-2xl text-white mb-2">ArgusPy: framework Python para BHP</h4>

              <p className="text-sm text-muted mb-4 leading-relaxed">
                Creación de ArgusPy, el framework que utilizará BHP para automatizar pruebas web con Python e inteligencia artificial. La solución entrega una base profesional, reutilizable y preparada para acelerar el diseño, mantenimiento y ejecución de pruebas automatizadas.
              </p>

              <div className="flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-white">
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>Arquitectura con Python 3.10+, pytest, Playwright y Page Object Model reutilizable.</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white mt-1">
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>Configuración multiambiente, localizadores accesibles y reportes compatibles con Allure.</span>
                </div>
              </div>
            </div>

            <div className="flex-col items-center" style={{ width: '100%', maxWidth: '920px', alignSelf: 'center' }}>
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--glass-border)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}>
                <img
                  src="/arguspy_framework.png"
                  alt="Documentación del framework ArgusPy para automatización web con Python"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  style={{ display: 'block' }}
                />
              </div>
              <p className="text-xs text-muted text-center mt-2 font-serif italic">Evidencia de la estructura y características del framework ArgusPy</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default StudioQA;
