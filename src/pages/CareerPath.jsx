import React, { useState } from 'react';
import { Target, Star, Award, TrendingUp, Users, Code, CheckCircle, Zap, Shield, BookOpen, Lightbulb, Activity, ArrowRight, Flag, User, Briefcase, Rocket } from 'lucide-react';

const CareerPath = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="w-full flex-col gap-6">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-3xl font-bold font-serif mb-2">Mi Rol Actual y Proyección en QA</h2>
          <p className="text-muted text-lg">Análisis del Job Role: Senior Technical Software Quality</p>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-2xl glass-card text-sm border-l-4 border-cyan bg-[rgba(0,114,188,0.1)]">
          <Target className="text-cyan" size={20} />
          <span className="text-white">Objetivo: Entender qué cumplo hoy, qué hago del siguiente rol y qué necesito para seguir avanzando.</span>
        </div>
      </div>

      {/* Progression Path (Always visible) */}
      <div className="glass-card mb-6">
        <h3 className="text-xs text-muted font-bold uppercase mb-4 tracking-wider flex items-center gap-2">
          <TrendingUp size={16} className="text-cyan" /> Ruta de Progresión en QA
        </h3>
        <div className="flex items-center justify-between w-full overflow-x-auto pb-2">
          {[
            { role: 'Software Quality Analyst', type: 'entry' },
            { role: 'Technical Software Quality', type: 'entry' },
            { role: 'Senior Technical Software Quality', type: 'current' },
            { role: 'Lead Technical Software Quality', type: 'next' },
            { role: 'Expert Technical Software Quality', type: 'next' },
          ].map((item, index, arr) => (
            <React.Fragment key={index}>
              <div 
                className={`flex-col items-center justify-center p-4 rounded-xl text-center min-w-[160px] transition-all duration-300 ${
                  item.type === 'current' 
                    ? 'bg-gradient-to-br from-blue-600 to-blue-800 border border-blue-400 shadow-[0_0_15px_rgba(0,114,188,0.5)] text-white transform scale-105' 
                    : item.type === 'next'
                      ? 'bg-[rgba(168,85,247,0.1)] border border-[rgba(168,85,247,0.3)] text-[rgba(255,255,255,0.8)]'
                      : 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] text-muted'
                }`}
              >
                {item.type === 'current' && <Star className="text-gold mb-2 mx-auto drop-shadow-md" size={24} fill="currentColor" />}
                {item.type === 'next' && (index === 3 ? <Users className="text-purple-400 mb-2 mx-auto" size={20} /> : <Award className="text-purple-400 mb-2 mx-auto" size={20} />)}
                {item.type === 'entry' && <Code className="mb-2 mx-auto" size={20} />}
                <p className="font-bold text-sm leading-tight">{item.role}</p>
                {item.type === 'current' && <span className="text-[10px] font-black text-bg-dark bg-gold px-2 py-0.5 rounded-full mt-2 inline-block uppercase tracking-wider">MI ROL ACTUAL</span>}
              </div>
              {index < arr.length - 1 && (
                <div className="flex-shrink-0 mx-2 text-[rgba(255,255,255,0.2)]">
                  <ArrowRight size={20} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex space-x-2 border-b border-[rgba(255,255,255,0.1)] mb-6 overflow-x-auto pb-px">
        <button
          onClick={() => setActiveTab('profile')}
          className={`flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-200 border-b-2 whitespace-nowrap ${
            activeTab === 'profile' 
              ? 'text-cyan border-cyan bg-[rgba(0,114,188,0.1)] rounded-t-lg' 
              : 'text-muted border-transparent hover:text-white hover:bg-[rgba(255,255,255,0.02)] rounded-t-lg'
          }`}
        >
          <User size={18} />
          Perfil Actual
        </button>
        <button
          onClick={() => setActiveTab('achievements')}
          className={`flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-200 border-b-2 whitespace-nowrap ${
            activeTab === 'achievements' 
              ? 'text-teal-400 border-teal-400 bg-[rgba(45,212,191,0.1)] rounded-t-lg' 
              : 'text-muted border-transparent hover:text-white hover:bg-[rgba(255,255,255,0.02)] rounded-t-lg'
          }`}
        >
          <Briefcase size={18} />
          Logros y Cumplimiento
        </button>
        <button
          onClick={() => setActiveTab('nextSteps')}
          className={`flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-200 border-b-2 whitespace-nowrap ${
            activeTab === 'nextSteps' 
              ? 'text-purple-400 border-purple-400 bg-[rgba(168,85,247,0.1)] rounded-t-lg' 
              : 'text-muted border-transparent hover:text-white hover:bg-[rgba(255,255,255,0.02)] rounded-t-lg'
          }`}
        >
          <Rocket size={18} />
          Proyección y Próximos Pasos
        </button>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        
        {/* TAB 1: PERFIL ACTUAL */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            <div className="glass-card flex-col gap-6">
              <div className="flex items-center gap-4 border-b border-[rgba(255,255,255,0.1)] pb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan flex items-center justify-center text-white font-black text-2xl shadow-[0_0_20px_rgba(0,114,188,0.4)] border border-white/20">
                  JC
                </div>
                <div>
                  <p className="text-xs text-cyan font-bold uppercase tracking-wider mb-1">Mi Perfil Actual</p>
                  <h3 className="font-bold text-2xl text-white leading-tight">Senior Technical <br/>Software Quality</h3>
                </div>
              </div>
              
              <div className="bg-[rgba(0,114,188,0.05)] p-4 rounded-xl border border-[rgba(0,114,188,0.2)]">
                <p className="text-sm text-[rgba(255,255,255,0.85)] leading-relaxed">
                  Analiza, diseña y ejecuta prácticas de calidad complejas, garantizando cobertura integral y fomentando la automatización. 
                  Actúa como <strong className="text-cyan font-semibold">referente técnico</strong>, consolidando y difundiendo las mejores prácticas de pruebas y asegurando eficiencia, fiabilidad y valor de las soluciones.
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-xs text-white font-bold uppercase mb-4 tracking-wider">
                  <Activity size={16} className="text-cyan" /> Responsabilidades
                </h4>
                <ul className="flex-col gap-3">
                  {[
                    'Diseñar y ejecutar prácticas de pruebas técnicas y automatización.',
                    'Generar informes y métricas de pruebas para la toma de decisiones.',
                    'Proponer mejoras, metodologías y herramientas para aumentar eficiencia y calidad.',
                    'Compartir conocimiento y formar al equipo en buenas prácticas.',
                    'Asegurar el cumplimiento del plan de calidad y uso responsable de IA.'
                  ].map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 bg-[rgba(255,255,255,0.02)] p-3 rounded-lg border border-[rgba(255,255,255,0.05)]">
                      <CheckCircle size={16} className="text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-muted">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glass-card flex-col justify-start">
              <h4 className="flex items-center gap-2 text-sm text-white font-bold uppercase mb-6 tracking-wider border-b border-[rgba(255,255,255,0.1)] pb-4">
                <Star size={18} className="text-gold" /> Competencias Clave
              </h4>
              <div className="flex-col gap-5">
                {[
                  { name: 'Assurance & Testing', level: 3 },
                  { name: 'Orientación a la calidad', level: 3 },
                  { name: 'Pensamiento analítico', level: 3 },
                  { name: 'Pensamiento sistémico', level: 3 },
                  { name: 'Orientación al resultado', level: 3 },
                ].map((comp, i) => (
                  <div key={i} className="flex-col bg-[rgba(255,255,255,0.02)] p-4 rounded-xl border border-[rgba(255,255,255,0.05)]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-white font-semibold">{comp.name}</span>
                      <span className="text-xs font-black text-bg-dark bg-cyan px-2 py-0.5 rounded-full">{comp.level}/4</span>
                    </div>
                    <div className="w-full h-2 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-cyan shadow-[0_0_10px_rgba(0,114,188,0.5)]" style={{ width: `${(comp.level / 4) * 100}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: LOGROS Y CUMPLIMIENTO */}
        {activeTab === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {/* Senior Fulfillments */}
            <div className="glass-card border-t-4 border-t-teal-400 flex-col">
              <div className="flex items-center gap-3 mb-6 bg-[rgba(45,212,191,0.1)] p-4 rounded-xl border border-[rgba(45,212,191,0.2)]">
                <CheckCircle className="text-teal-400" size={28} />
                <div>
                  <h3 className="font-bold text-white text-base uppercase tracking-wide">Lo que ya cumplo</h3>
                  <p className="text-xs text-teal-400 font-semibold">Como Senior Technical QA</p>
                </div>
              </div>
              <div className="flex-col gap-4">
                {[
                  { title: 'Diseño y ejecución de prácticas', desc: 'Implementación de soluciones de automatización para pruebas Mobile y Web.', icon: <Code size={20} className="text-teal-400"/> },
                  { title: 'IA para calidad y eficiencia', desc: 'Integración de IA en procesos y proyectos nuevos.', icon: <Lightbulb size={20} className="text-teal-400"/> },
                  { title: 'Mejora continua de metodologías', desc: 'Creación de frameworks y herramientas QA con IA.', icon: <Shield size={20} className="text-teal-400"/> },
                  { title: 'Difusión de buenas prácticas', desc: 'Formaciones en automatización, IA e integración continua.', icon: <BookOpen size={20} className="text-teal-400"/> },
                  { title: 'Rol de referente técnico', desc: 'Guía para el equipo en el uso de herramientas e IA.', icon: <Award size={20} className="text-teal-400"/> },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:bg-[rgba(45,212,191,0.05)] hover:border-[rgba(45,212,191,0.2)] transition-all">
                    <div className="p-2 rounded-lg bg-[rgba(45,212,191,0.1)] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lead Fulfillments */}
            <div className="glass-card border-t-4 border-t-purple-500 flex-col">
              <div className="flex items-center gap-3 mb-6 bg-[rgba(168,85,247,0.1)] p-4 rounded-xl border border-[rgba(168,85,247,0.2)]">
                <Star className="text-purple-400" size={28} />
                <div>
                  <h3 className="font-bold text-white text-base uppercase tracking-wide">Lo que ya cumplo</h3>
                  <p className="text-xs text-purple-400 font-semibold">Del Rol Lead Technical QA</p>
                </div>
              </div>
              <div className="flex-col gap-4">
                {[
                  { title: 'Liderar soluciones automatizadas', desc: 'Diseño e implementación Web y Mobile para distintos proyectos.', icon: <Target size={20} className="text-purple-400"/> },
                  { title: 'Definir marcos y herramientas', desc: 'Creación de un framework adoptado por todo el estudio.', icon: <Activity size={20} className="text-purple-400"/> },
                  { title: 'Incorporar IA como diferenciador', desc: 'Integración en proyectos y creación de herramientas QA con IA.', icon: <Zap size={20} className="text-purple-400"/> },
                  { title: 'Transferir y desarrollar talento', desc: 'Formación de practicantes y equipo en QA, automatización e IA.', icon: <Users size={20} className="text-purple-400"/> },
                  { title: 'Apoyo a clientes y propuestas', desc: 'Realización de POCs de automatización e IA para clientes.', icon: <TrendingUp size={20} className="text-purple-400"/> },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:bg-[rgba(168,85,247,0.05)] hover:border-[rgba(168,85,247,0.2)] transition-all">
                    <div className="p-2 rounded-lg bg-[rgba(168,85,247,0.1)] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PROYECCIÓN Y PRÓXIMOS PASOS */}
        {activeTab === 'nextSteps' && (
          <div className="flex-col gap-6 animate-fade-in">
            {/* Needs for Next Level */}
            <div className="glass-card border-t-4 border-t-blue-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[rgba(59,130,246,0.1)]">
                  <Flag className="text-blue-400" size={24} />
                </div>
                <h3 className="font-bold text-white text-xl uppercase tracking-wide">¿Qué necesito para avanzar a Lead?</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {[
                  { num: '01', title: 'Impacto y adopción', desc: 'Evidenciar que los frameworks y prácticas son adoptados transversalmente.' },
                  { num: '02', title: 'Medir y comunicar', desc: 'Mostrar métricas: cobertura, tiempos, eficiencia, ahorro.' },
                  { num: '03', title: 'Liderazgo técnico', desc: 'Definir estándares, revisar soluciones, mentorear al equipo.' },
                  { num: '04', title: 'Visión estratégica', desc: 'Alinear las soluciones QA/IA con la estrategia del negocio.' },
                  { num: '05', title: 'Visibilidad', desc: 'Participar en comunidades técnicas y compartir conocimiento.' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col p-5 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(59,130,246,0.4)] hover:bg-[rgba(59,130,246,0.05)] transition-all">
                    <div className="flex justify-between items-start mb-3">
                      <span className="font-black text-3xl text-[rgba(59,130,246,0.2)]">{item.num}</span>
                    </div>
                    <h4 className="font-bold text-white text-sm mb-2">{item.title}</h4>
                    <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* Impact Generated */}
              <div className="glass-card flex-col">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[rgba(255,255,255,0.1)]">
                  <TrendingUp className="text-cyan" size={24} />
                  <h3 className="font-bold text-white text-lg">Impacto Actual Generado</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="flex-col items-center text-center p-4 rounded-xl bg-[rgba(45,212,191,0.05)] border border-[rgba(45,212,191,0.2)]">
                    <h4 className="font-black text-3xl text-white mb-1">+25</h4>
                    <p className="text-xs text-teal-400 font-bold mb-1 uppercase">Personas formadas</p>
                    <p className="text-[10px] text-muted">Automatización, IA y CI.</p>
                  </div>
                  <div className="flex-col items-center text-center p-4 rounded-xl bg-[rgba(59,130,246,0.05)] border border-[rgba(59,130,246,0.2)]">
                    <h4 className="font-black text-3xl text-white mb-1">1</h4>
                    <p className="text-xs text-blue-400 font-bold mb-1 uppercase">Framework</p>
                    <p className="text-[10px] text-muted">Adoptado por todo el estudio.</p>
                  </div>
                  <div className="flex-col items-center text-center p-4 rounded-xl bg-[rgba(245,158,11,0.05)] border border-[rgba(245,158,11,0.2)]">
                    <h4 className="font-black text-3xl text-white mb-1">2</h4>
                    <p className="text-xs text-amber-400 font-bold mb-1 uppercase">Herramientas QA IA</p>
                    <p className="text-[10px] text-muted">Desarrolladas in-house.</p>
                  </div>
                  <div className="flex-col items-center text-center p-4 rounded-xl bg-[rgba(168,85,247,0.05)] border border-[rgba(168,85,247,0.2)]">
                    <h4 className="font-black text-3xl text-white mb-1">+10</h4>
                    <p className="text-xs text-purple-400 font-bold mb-1 uppercase">POCs realizados</p>
                    <p className="text-[10px] text-muted">Para clientes en automatización.</p>
                  </div>
                  <div className="col-span-2 sm:col-span-2 flex items-center justify-center text-center p-4 rounded-xl bg-[rgba(16,185,129,0.05)] border border-[rgba(16,185,129,0.2)]">
                    <div>
                      <h4 className="font-black text-xl text-emerald-400 mb-1 uppercase tracking-wider">Impacto Medible</h4>
                      <p className="text-xs text-muted">Mejora en cobertura, reducción de tiempos y aumento de calidad.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Steps Timeline */}
              <div className="glass-card flex-col">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[rgba(255,255,255,0.1)]">
                  <Rocket className="text-purple-400" size={24} />
                  <h3 className="font-bold text-white text-lg">Próximos Pasos en mi Carrera</h3>
                </div>
                
                <div className="flex-col gap-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:via-blue-500 before:to-[rgba(255,255,255,0.1)]">
                  
                  {/* Corto Plazo */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-bg-dark bg-purple-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(168,85,247,0.6)] z-10">
                      <Target size={16} className="text-white" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)]">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-white text-sm">Corto Plazo</h4>
                        <span className="text-[10px] font-bold text-bg-dark bg-purple-400 px-2 py-0.5 rounded-full">0-6 MESES</span>
                      </div>
                      <p className="text-xs text-muted">Consolidar evidencias de impacto y adopción. Ampliar formación en IA aplicada a QA.</p>
                    </div>
                  </div>

                  {/* Mediano Plazo */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-bg-dark bg-blue-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <Activity size={16} className="text-white" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)]">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-white text-sm">Mediano Plazo</h4>
                        <span className="text-[10px] font-bold text-bg-dark bg-blue-400 px-2 py-0.5 rounded-full">6-12 MESES</span>
                      </div>
                      <p className="text-xs text-muted">Asumir liderazgo técnico en más iniciativas. Definir estándares y directrices de QA/IA.</p>
                    </div>
                  </div>

                  {/* Largo Plazo */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-bg-dark bg-[rgba(255,255,255,0.1)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <Award size={16} className="text-muted" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)]">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-white text-sm">Largo Plazo</h4>
                        <span className="text-[10px] font-bold text-white bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] px-2 py-0.5 rounded-full">12+ MESES</span>
                      </div>
                      <p className="text-xs text-muted">Proyectarme a Expert Technical Software Quality, ampliando impacto estratégico y visibilidad.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CareerPath;
