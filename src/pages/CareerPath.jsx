import React, { useState } from 'react';
import { Target, Star, Award, TrendingUp, Users, Code, CheckCircle, Zap, Shield, BookOpen, Lightbulb, Activity, ArrowRight, Flag, Circle, Check } from 'lucide-react';

const evaluationTasks = [
  { id: 1, title: 'Consolidar y subir evidencias de frameworks al portal de GDNe', completed: false },
  { id: 2, title: 'Generar reporte de métricas de adopción de IA en el equipo', completed: false },
  { id: 3, title: 'Realizar sesión técnica de transferencia de conocimiento al estudio QA', completed: false },
  { id: 4, title: 'Revisión trimestral de objetivos de carrera con mánager', completed: false },
  { id: 5, title: 'Completar certificaciones pendientes de arquitectura Cloud/IA', completed: false },
];

const CareerPath = () => {
  const [tasks, setTasks] = useState(evaluationTasks);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const progressPercent = Math.round((completedCount / tasks.length) * 100);

  return (
    <div className="w-full flex-col gap-6">
      
      {/* Header with Background Image Banner */}
      <div className="relative rounded-3xl overflow-hidden mb-6 border border-[rgba(255,255,255,0.1)] shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("/talent_map.jpg")', filter: 'blur(3px)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-dark)] via-[rgba(7,15,38,0.8)] to-transparent"></div>
        
        <div className="relative z-10 p-8 flex justify-between items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold font-serif mb-2 text-white">Mi Rol Actual y Proyección en QA</h2>
            <p className="text-cyan text-lg font-semibold mb-4">Análisis del Job Role: Senior Technical Software Quality</p>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[rgba(0,114,188,0.2)] border border-[rgba(0,114,188,0.4)] backdrop-blur-sm">
              <Target className="text-cyan" size={24} />
              <span className="text-white text-sm">Objetivo: Entender qué cumplo hoy, qué hago del siguiente rol y qué necesito para avanzar en NTT DATA.</span>
            </div>
          </div>
          <div className="hidden lg:block w-1/3 rounded-xl overflow-hidden border-2 border-[rgba(255,255,255,0.1)] shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img src="/talent_map.jpg" alt="Talent Map Original" className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Progression Path */}
      <div className="glass-card mb-6 overflow-hidden">
        <h3 className="text-xs text-muted font-bold uppercase mb-6 tracking-wider">Ruta de Progresión en Familia QA</h3>
        <div className="flex items-center justify-between w-full overflow-x-auto pb-4">
          {[
            { role: 'Software Quality Analyst', type: 'entry' },
            { role: 'Technical Software Quality', type: 'entry' },
            { role: 'Senior Technical Software Quality', type: 'current' },
            { role: 'Lead Technical Software Quality', type: 'next' },
            { role: 'Expert Technical Software Quality', type: 'next' },
          ].map((item, index, arr) => (
            <React.Fragment key={index}>
              <div 
                className={`relative flex-col items-center justify-center p-5 rounded-2xl text-center min-w-[170px] transform hover:-translate-y-1 transition-all duration-300 ${
                  item.type === 'current' 
                    ? 'bg-gradient-to-br from-blue-600 to-blue-800 border-2 border-cyan shadow-[0_10px_30px_rgba(0,114,188,0.5)] text-white z-10 scale-105' 
                    : item.type === 'next'
                      ? 'bg-gradient-to-br from-[rgba(168,85,247,0.1)] to-[rgba(168,85,247,0.2)] border border-[rgba(168,85,247,0.4)] text-white hover:shadow-[0_5px_20px_rgba(168,85,247,0.3)]'
                      : 'bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] text-muted'
                }`}
              >
                {item.type === 'current' && <Star className="text-gold mb-3 mx-auto drop-shadow-md" size={32} fill="currentColor" />}
                {item.type === 'next' && (index === 3 ? <Users className="text-purple-400 mb-3 mx-auto" size={24} /> : <Award className="text-purple-400 mb-3 mx-auto" size={24} />)}
                {item.type === 'entry' && <Code className="text-muted mb-3 mx-auto" size={24} />}
                <p className="font-bold text-sm leading-tight">{item.role}</p>
                {item.type === 'current' && <span className="absolute -top-3 bg-gold text-bg-dark text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">MI ROL ACTUAL</span>}
              </div>
              {index < arr.length - 1 && (
                <div className="flex-shrink-0 mx-1 text-[rgba(255,255,255,0.2)]">
                  <ArrowRight size={24} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        
        {/* Left Column: Interactive Checklist & Core Skills */}
        <div className="flex-col gap-6 xl:col-span-1">
          {/* Dynamic Evaluation Checklist */}
          <div className="glass-card flex-col border-t-4 border-t-cyan">
            <div className="flex justify-between items-end mb-4">
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Checklist de Evaluación</h3>
                <p className="text-xs text-cyan">Tareas anuales para promoción</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-white">{progressPercent}%</span>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full h-2 bg-[rgba(255,255,255,0.1)] rounded-full mb-6 overflow-hidden">
              <div className="h-full bg-cyan transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
            </div>

            <div className="flex-col gap-2">
              {tasks.map(task => (
                <div 
                  key={task.id} 
                  onClick={() => toggleTask(task.id)}
                  className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer border transition-all duration-200 ${
                    task.completed 
                      ? 'bg-[rgba(45,212,191,0.1)] border-[rgba(45,212,191,0.3)]' 
                      : 'bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.05)]'
                  }`}
                >
                  <div className="mt-0.5">
                    {task.completed ? <CheckCircle className="text-teal-400" size={18} /> : <Circle className="text-muted" size={18} />}
                  </div>
                  <p className={`text-sm ${task.completed ? 'text-teal-100 line-through opacity-70' : 'text-white'}`}>
                    {task.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card">
            <h4 className="text-xs text-muted font-bold uppercase mb-4 tracking-wider">Competencias Clave (Nivel Requerido 3/4)</h4>
            <div className="flex-col gap-4">
              {[
                { name: 'Assurance & Testing', level: 3 },
                { name: 'Orientación a la calidad', level: 3 },
                { name: 'Pensamiento analítico', level: 3 },
                { name: 'Pensamiento sistémico', level: 3 },
                { name: 'Orientación al resultado', level: 3 },
              ].map((comp, i) => (
                <div key={i} className="flex-col">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-white font-semibold">{comp.name}</span>
                    <span className="text-xs font-bold text-cyan">{comp.level}/4</span>
                  </div>
                  <div className="w-full h-1.5 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan" style={{ width: `${(comp.level / 4) * 100}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle & Right Columns: Matrices */}
        <div className="xl:col-span-2 flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Senior Fulfillments */}
            <div className="glass-card flex-col hover:shadow-[0_8px_30px_rgba(45,212,191,0.15)] transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6 bg-gradient-to-r from-[rgba(45,212,191,0.15)] to-transparent p-3 rounded-xl border-l-4 border-teal-400">
                <CheckCircle className="text-teal-400" size={24} />
                <h3 className="font-bold text-white text-sm uppercase tracking-wide">Lo que ya cumplo como Senior</h3>
              </div>
              <div className="flex-col gap-5">
                {[
                  { title: 'Diseño de prácticas complejas', desc: 'Soluciones de automatización Mobile y Web.', icon: <Code size={18} className="text-teal-400"/> },
                  { title: 'IA para mejorar calidad', desc: 'Integración de IA en proyectos nuevos.', icon: <Lightbulb size={18} className="text-teal-400"/> },
                  { title: 'Mejora continua', desc: 'Frameworks QA con IA para todo el estudio.', icon: <Shield size={18} className="text-teal-400"/> },
                  { title: 'Referente técnico', desc: 'Guía en el uso de IA dentro de la empresa.', icon: <Award size={18} className="text-teal-400"/> },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center p-2 rounded-lg hover:bg-[rgba(255,255,255,0.03)] transition-colors">
                    <div className="p-2.5 rounded-full bg-[rgba(45,212,191,0.1)] shadow-[0_0_10px_rgba(45,212,191,0.2)]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-muted mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lead Fulfillments */}
            <div className="glass-card flex-col hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)] transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6 bg-gradient-to-r from-[rgba(168,85,247,0.15)] to-transparent p-3 rounded-xl border-l-4 border-purple-400">
                <Star className="text-purple-400" size={24} />
                <h3 className="font-bold text-white text-sm uppercase tracking-wide">Lo que ya cumplo como Lead</h3>
              </div>
              <div className="flex-col gap-5">
                {[
                  { title: 'Liderar soluciones', desc: 'Implementación Web/Mobile multi-proyecto.', icon: <Target size={18} className="text-purple-400"/> },
                  { title: 'Definir metodologías', desc: 'Framework adoptado por todo el estudio.', icon: <Activity size={18} className="text-purple-400"/> },
                  { title: 'IA como diferenciador', desc: 'Herramientas y POCs de IA para QA.', icon: <Zap size={18} className="text-purple-400"/> },
                  { title: 'Transferir talento', desc: 'Formación de equipo en nuevas prácticas.', icon: <Users size={18} className="text-purple-400"/> },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center p-2 rounded-lg hover:bg-[rgba(255,255,255,0.03)] transition-colors">
                    <div className="p-2.5 rounded-full bg-[rgba(168,85,247,0.1)] shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-muted mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Next Level Requirements (Horizontal layout) */}
          <div className="glass-card border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-full bg-blue-500/20">
                <Flag className="text-blue-400" size={20} />
              </div>
              <h3 className="font-bold text-white text-lg">¿Qué necesito para avanzar a Lead?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { num: '01', title: 'Adopción', desc: 'Evidenciar uso de frameworks en múltiples equipos.' },
                { num: '02', title: 'Medir Valor', desc: 'Métricas de ahorro y eficiencia.' },
                { num: '03', title: 'Liderazgo', desc: 'Mentorear y definir estándares técnicos.' },
                { num: '04', title: 'Estrategia', desc: 'Alinear QA/IA con negocio.' },
                { num: '05', title: 'Visibilidad', desc: 'Comunidades técnicas e iniciativas internas.' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col p-4 rounded-xl bg-[rgba(59,130,246,0.05)] border border-[rgba(59,130,246,0.1)] hover:bg-[rgba(59,130,246,0.1)] transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-white text-sm">{item.title}</h4>
                    <span className="font-black text-xl text-blue-500/30">{item.num}</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CareerPath;
