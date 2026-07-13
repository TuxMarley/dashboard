import React from 'react';
import { Target, Star, Award, TrendingUp, Users, Code, CheckCircle, Zap, Shield, BookOpen, Lightbulb, Activity, ArrowRight, Flag } from 'lucide-react';

const CareerPath = () => {
  return (
    <div className="w-full flex-col gap-6">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-3xl font-bold font-serif mb-2">Mi Rol Actual y Proyección en QA</h2>
          <p className="text-muted text-lg">Análisis del Job Role: Senior Technical Software Quality</p>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-2xl glass-card text-sm">
          <Target className="text-cyan" size={20} />
          <span className="text-white">Objetivo: Entender qué cumplo hoy, qué hago del siguiente rol y qué necesito para seguir avanzando.</span>
        </div>
      </div>

      {/* Progression Path */}
      <div className="glass-card mb-6">
        <h3 className="text-xs text-muted font-bold uppercase mb-4 tracking-wider">Ruta de Progresión en QA</h3>
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
                className={`flex-col items-center justify-center p-4 rounded-xl text-center min-w-[160px] ${
                  item.type === 'current' 
                    ? 'bg-gradient-to-br from-blue-600 to-blue-800 border-2 border-blue-400 shadow-[0_0_15px_rgba(0,114,188,0.5)] text-white' 
                    : item.type === 'next'
                      ? 'bg-[rgba(100,50,200,0.2)] border border-[rgba(100,50,200,0.4)] text-[rgba(255,255,255,0.7)]'
                      : 'bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-muted'
                }`}
              >
                {item.type === 'current' && <Star className="text-gold mb-2 mx-auto" size={24} fill="currentColor" />}
                {item.type === 'next' && (index === 3 ? <Users className="mb-2 mx-auto" size={20} /> : <Award className="mb-2 mx-auto" size={20} />)}
                {item.type === 'entry' && <Code className="mb-2 mx-auto" size={20} />}
                <p className="font-bold text-sm leading-tight">{item.role}</p>
                {item.type === 'current' && <span className="text-xs font-bold text-gold mt-2 block">MI ROL ACTUAL</span>}
              </div>
              {index < arr.length - 1 && (
                <div className="flex-shrink-0 mx-2 text-muted">
                  <ArrowRight size={24} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mb-6">
        
        {/* Left Column: Current Profile */}
        <div className="flex-col gap-6 xl:col-span-1">
          <div className="glass-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                JC
              </div>
              <div>
                <p className="text-xs text-muted font-bold uppercase tracking-wider">Mi Perfil Actual</p>
                <h3 className="font-bold text-lg text-white leading-tight">Senior Technical Software Quality</h3>
              </div>
            </div>
            <p className="text-sm text-muted mb-6">
              Analiza, diseña y ejecuta prácticas de calidad complejas, garantizando cobertura integral y fomentando la automatización. 
              Actúa como referente técnico, consolidando y difundiendo las mejores prácticas de pruebas y asegurando eficiencia, fiabilidad y valor de las soluciones.
            </p>
            
            <div className="mb-6">
              <h4 className="text-xs text-white font-bold uppercase mb-3 border-b border-[rgba(255,255,255,0.1)] pb-1">Competencias Clave</h4>
              <div className="flex-col gap-3">
                {[
                  { name: 'Assurance & Testing', level: 3 },
                  { name: 'Orientación a la calidad', level: 3 },
                  { name: 'Pensamiento analítico', level: 3 },
                  { name: 'Pensamiento sistémico', level: 3 },
                  { name: 'Orientación al resultado', level: 3 },
                ].map((comp, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-xs text-muted">{comp.name}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1.5 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500" style={{ width: `${(comp.level / 4) * 100}%` }}></div>
                      </div>
                      <span className="text-xs font-bold text-white">{comp.level}/4</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs text-white font-bold uppercase mb-3 border-b border-[rgba(255,255,255,0.1)] pb-1">Responsabilidades</h4>
              <ul className="text-xs text-muted flex-col gap-2 list-disc pl-4">
                <li>Diseñar y ejecutar prácticas de pruebas técnicas y automatización.</li>
                <li>Generar informes y métricas de pruebas para la toma de decisiones.</li>
                <li>Proponer mejoras, metodologías y herramientas para aumentar eficiencia y calidad.</li>
                <li>Compartir conocimiento y formar al equipo en buenas prácticas.</li>
                <li>Asegurar el cumplimiento del plan de calidad y uso responsable de IA.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Columns: What I already fulfill */}
        <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Senior Fulfillments */}
          <div className="glass-card border-t-4 border-t-teal-400 flex-col">
            <div className="flex items-center gap-3 mb-6 bg-[rgba(45,212,191,0.1)] p-3 rounded-xl border border-[rgba(45,212,191,0.2)]">
              <CheckCircle className="text-teal-400" size={24} />
              <h3 className="font-bold text-white text-sm uppercase tracking-wide">Lo que ya cumplo como Senior</h3>
            </div>
            <div className="flex-col gap-4">
              {[
                { title: 'Diseño y ejecución de prácticas complejas', desc: 'Diseño e implementación de soluciones de automatización para pruebas Mobile y Web.', icon: <Code size={18} className="text-teal-400"/> },
                { title: 'Uso de IA para mejorar calidad y eficiencia', desc: 'Diseño e implementación de procesos de integración de IA en proyectos nuevos.', icon: <Lightbulb size={18} className="text-teal-400"/> },
                { title: 'Mejora continua de metodologías y herramientas', desc: 'Creación de frameworks y herramientas QA con IA para todo el estudio.', icon: <Shield size={18} className="text-teal-400"/> },
                { title: 'Difusión de buenas prácticas', desc: 'Realización de formaciones en automatización, IA e integración continua.', icon: <BookOpen size={18} className="text-teal-400"/> },
                { title: 'Rol de referente técnico', desc: 'Referente en el uso de IA dentro de la empresa y guía para el equipo.', icon: <Award size={18} className="text-teal-400"/> },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="mt-1 p-1.5 rounded-full bg-[rgba(45,212,191,0.1)]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{item.title}</h4>
                    <p className="text-xs text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Fulfillments */}
          <div className="glass-card border-t-4 border-t-purple-500 flex-col">
            <div className="flex items-center gap-3 mb-6 bg-[rgba(168,85,247,0.1)] p-3 rounded-xl border border-[rgba(168,85,247,0.2)]">
              <Star className="text-purple-400" size={24} />
              <h3 className="font-bold text-white text-sm uppercase tracking-wide">Lo que ya cumplo como Lead</h3>
            </div>
            <div className="flex-col gap-4">
              {[
                { title: 'Liderar soluciones de prueba automatizadas', desc: 'Diseño e implementación de automatización Web y Mobile para distintos proyectos.', icon: <Target size={18} className="text-purple-400"/> },
                { title: 'Definir marcos, metodologías y herramientas', desc: 'Creación de un framework de automatización adoptado por todo el estudio.', icon: <Activity size={18} className="text-purple-400"/> },
                { title: 'Incorporar IA como diferenciador', desc: 'Integración de IA en proyectos y creación de herramientas QA con IA.', icon: <Zap size={18} className="text-purple-400"/> },
                { title: 'Transferir y desarrollar talento', desc: 'Formación de practicantes y del equipo en nuevas prácticas de QA, automatización e IA.', icon: <Users size={18} className="text-purple-400"/> },
                { title: 'Apoyo a clientes y propuestas técnicas', desc: 'Realización de POCs de automatización e IA para clientes.', icon: <TrendingUp size={18} className="text-purple-400"/> },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="mt-1 p-1.5 rounded-full bg-[rgba(168,85,247,0.1)]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{item.title}</h4>
                    <p className="text-xs text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Needs for Next Level */}
        <div className="xl:col-span-1 glass-card border-t-4 border-t-blue-500 flex-col">
          <div className="flex items-center gap-3 mb-6">
            <Flag className="text-blue-400" size={24} />
            <h3 className="font-bold text-white text-sm uppercase tracking-wide">¿Qué necesito para avanzar a Lead?</h3>
          </div>
          <div className="flex-col gap-4">
            {[
              { num: '01', title: 'Demostrar impacto y adopción', desc: 'Evidenciar que los frameworks, herramientas y prácticas son adoptados por múltiples equipos/proyectos.' },
              { num: '02', title: 'Medir y comunicar valor', desc: 'Mostrar métricas de impacto: cobertura, reducción de tiempos, eficiencia, calidad, ahorro y satisfacción.' },
              { num: '03', title: 'Liderazgo técnico formal', desc: 'Definir estándares, revisar soluciones, mentorear, guiar decisiones técnicas y asegurar calidad en el equipo.' },
              { num: '04', title: 'Pensamiento estratégico', desc: 'Alinear las soluciones de QA e IA con la estrategia del negocio y objetivos del cliente.' },
              { num: '05', title: 'Visibilidad y colaboración', desc: 'Participar activamente en comunidades técnicas, iniciativas internas y compartir conocimiento a nivel transversal.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start bg-[rgba(255,255,255,0.03)] p-3 rounded-xl border border-[rgba(255,255,255,0.05)]">
                <div className="font-bold text-xl text-[rgba(255,255,255,0.2)]">
                  {item.num}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Section: Impact and Next Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Impact Generated */}
        <div className="glass-card">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="text-cyan" size={24} />
            <h3 className="font-bold text-white text-lg">Impacto Actual Generado</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
            <div className="flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[rgba(45,212,191,0.1)] flex items-center justify-center mx-auto mb-2 border border-[rgba(45,212,191,0.3)]">
                <Users className="text-teal-400" size={20} />
              </div>
              <h4 className="font-bold text-xl text-white">+25</h4>
              <p className="text-xs text-teal-400 font-semibold mb-1">Personas formadas</p>
              <p className="text-[10px] text-muted">En automatización, IA e integración continua.</p>
            </div>
            <div className="flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[rgba(59,130,246,0.1)] flex items-center justify-center mx-auto mb-2 border border-[rgba(59,130,246,0.3)]">
                <Code className="text-blue-400" size={20} />
              </div>
              <h4 className="font-bold text-xl text-white">1</h4>
              <p className="text-xs text-blue-400 font-semibold mb-1">Framework</p>
              <p className="text-[10px] text-muted">De automatización creado y adoptado por todo el estudio.</p>
            </div>
            <div className="flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[rgba(245,158,11,0.1)] flex items-center justify-center mx-auto mb-2 border border-[rgba(245,158,11,0.3)]">
                <Shield className="text-amber-400" size={20} />
              </div>
              <h4 className="font-bold text-xl text-white">2</h4>
              <p className="text-xs text-amber-400 font-semibold mb-1">Herramientas QA con IA</p>
              <p className="text-[10px] text-muted">Desarrolladas para mejorar eficiencia y calidad.</p>
            </div>
            <div className="flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[rgba(168,85,247,0.1)] flex items-center justify-center mx-auto mb-2 border border-[rgba(168,85,247,0.3)]">
                <Activity className="text-purple-400" size={20} />
              </div>
              <h4 className="font-bold text-xl text-white">+10</h4>
              <p className="text-xs text-purple-400 font-semibold mb-1">POCs realizados</p>
              <p className="text-[10px] text-muted">Para clientes en automatización e IA.</p>
            </div>
            <div className="flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[rgba(16,185,129,0.1)] flex items-center justify-center mx-auto mb-2 border border-[rgba(16,185,129,0.3)]">
                <TrendingUp className="text-emerald-400" size={20} />
              </div>
              <h4 className="font-bold text-xl text-white">Medible</h4>
              <p className="text-xs text-emerald-400 font-semibold mb-1">Impacto</p>
              <p className="text-[10px] text-muted">Mejora en cobertura, reducción de tiempos y aumento de calidad.</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="glass-card">
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-purple-400" size={24} />
            <h3 className="font-bold text-white text-lg">Próximos Pasos en mi Carrera</h3>
          </div>
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1 flex-col items-center text-center relative">
              <div className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center mb-3 z-10 border border-[rgba(255,255,255,0.1)]">
                <Target className="text-muted" size={20} />
              </div>
              <h4 className="font-bold text-sm text-white mb-1">Corto Plazo</h4>
              <span className="text-[10px] text-purple-400 font-bold mb-2 block uppercase">(0-6 meses)</span>
              <p className="text-xs text-muted">Consolidar evidencias de impacto y adopción. Ampliar formación en IA aplicada a QA.</p>
            </div>
            
            <div className="hidden sm:block flex-1 border-t border-dashed border-[rgba(255,255,255,0.2)] mt-6"></div>

            <div className="flex-1 flex-col items-center text-center relative">
              <div className="w-12 h-12 rounded-full bg-[rgba(168,85,247,0.1)] flex items-center justify-center mb-3 z-10 border border-[rgba(168,85,247,0.3)]">
                <Zap className="text-purple-400" size={20} />
              </div>
              <h4 className="font-bold text-sm text-white mb-1">Mediano Plazo</h4>
              <span className="text-[10px] text-purple-400 font-bold mb-2 block uppercase">(6-12 meses)</span>
              <p className="text-xs text-muted">Asumir liderazgo técnico en más iniciativas. Definir estándares y directrices de QA/IA.</p>
            </div>

            <div className="hidden sm:block flex-1 border-t border-dashed border-[rgba(255,255,255,0.2)] mt-6"></div>

            <div className="flex-1 flex-col items-center text-center relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center mb-3 z-10 border border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                <Award className="text-white" size={20} />
              </div>
              <h4 className="font-bold text-sm text-white mb-1">Largo Plazo</h4>
              <span className="text-[10px] text-purple-400 font-bold mb-2 block uppercase">(12+ meses)</span>
              <p className="text-xs text-muted">Proyectarme a Expert Technical Software Quality, ampliando impacto estratégico y visibilidad.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CareerPath;
