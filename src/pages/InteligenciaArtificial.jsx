import React from 'react';
import { Bot, Calendar, BrainCircuit, CheckCircle2, Newspaper, Presentation } from 'lucide-react';

const InteligenciaArtificial = () => {
  return (
    <div className="w-full flex-col gap-6">
      <h2 className="text-2xl font-bold mb-4 font-serif">Inteligencia Artificial</h2>
      <p className="text-muted mb-6">Comunidad GenAI, IA Sessions y herramientas desarrolladas con IA.</p>
      
      <div className="glass-card mb-6 flex-col gap-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-xl">Eventos y Herramientas Presentadas</h3>
          <div className="pill-tag" style={{ background: 'rgba(0, 114, 188, 0.15)', color: 'var(--brand-blue)', borderColor: 'rgba(0, 114, 188, 0.3)' }}>
            <span>Hitos Recientes</span>
          </div>
        </div>

        {/* Scheduled AI news radar card */}
        <div className="p-6 rounded-3xl" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--glass-border)' }}>
          <div className="flex-col gap-6">
            <div className="flex-col">
              <div className="flex items-center gap-2 mb-2 text-sm text-cyan font-semibold">
                <Newspaper size={20} />
                <span>Referentes IA GDNE</span>
              </div>

              <h4 className="font-serif font-bold text-2xl text-white mb-2">Radar IA: noticias destacadas automatizadas</h4>

              <div className="flex items-center gap-2 text-sm text-muted mb-4">
                <Calendar size={16} />
                <span>Tarea realizada el 21 de julio de 2026</span>
              </div>

              <p className="text-sm text-muted mb-4 leading-relaxed">
                Creación de un agente programado para que, cada mañana a las 09:00, consulte los repositorios oficiales de OpenAI, Google/Gemini y Anthropic. El agente recopila las novedades más destacadas para nutrir con información verificada al grupo de Inteligencia Artificial de GDNE.
              </p>

              <div className="flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-white">
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>Monitoreo diario de fuentes oficiales para identificar lanzamientos y actualizaciones relevantes.</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white mt-1">
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>Resumen listo para compartir con el equipo de referentes IA de GDNE.</span>
                </div>
              </div>
            </div>

            <div className="flex-col items-center" style={{ width: '100%', maxWidth: '920px', alignSelf: 'center' }}>
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--glass-border)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}>
                <img
                  src="/radar_ia_july_21.png"
                  alt="Evidencia del agente programado Radar IA con noticias de OpenAI, Anthropic y Google Gemini"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  style={{ display: 'block' }}
                />
              </div>
              <p className="text-xs text-muted text-center mt-2 font-serif italic">Evidencia del informe generado por el agente programado Radar IA</p>
            </div>
          </div>
        </div>

        {/* GitHub Copilot autonomous QA agent card */}
        <div className="p-6 rounded-3xl" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--glass-border)' }}>
          <div className="flex gap-6 items-start" style={{ flexWrap: 'wrap-reverse' }}>
            <div className="flex-col" style={{ flex: '2 1 400px' }}>
              <div className="flex items-center gap-2 mb-2 text-sm text-cyan font-semibold">
                <Bot size={20} />
                <span>GitHub Copilot en acción</span>
              </div>

              <h4 className="font-serif font-bold text-2xl text-white mb-2">Agente autónomo para automatización web</h4>

              <p className="text-sm text-muted mb-4 leading-relaxed">
                Implementación de ingeniería de inteligencia artificial para automatizar pruebas web de forma autónoma mediante un agente especializado en GitHub Copilot. El agente explora la aplicación real, analiza y extrae sus elementos, diseña los casos de prueba y los automatiza para ejecutar una revisión completa del módulo.
              </p>

              <div className="flex-col gap-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-white">
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>Navegación real de la UI con Playwright MCP para generar pruebas con evidencia.</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white mt-1">
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>Práctica implementada con agentes, instrucciones, skills y MCP, incluyendo ejecución y reparación del test.</span>
                </div>
              </div>
            </div>

            <div className="flex-col items-center" style={{ flex: '1 1 250px', minWidth: '220px' }}>
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--glass-border)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}>
                <img
                  src="/metlife_copilot_agent.png"
                  alt="Flujo de trabajo del agente de GitHub Copilot para automatización web"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  style={{ display: 'block' }}
                />
              </div>
              <p className="text-xs text-muted text-center mt-2 font-serif italic">Flujo de trabajo autónomo con GitHub Copilot, Playwright MCP y evidencias</p>
            </div>
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

        {/* Comunidad IA Generativa Chile Card */}
        <div className="p-6 rounded-3xl mt-4" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--glass-border)' }}>
          <div className="flex gap-6 items-start" style={{ flexWrap: 'wrap-reverse' }}>
            
            {/* Text details */}
            <div className="flex-col" style={{ flex: '2 1 400px' }}>
              <div className="flex items-center gap-2 mb-2 text-sm text-cyan font-semibold">
                <BrainCircuit size={20} />
                <span>Comunidad GenAI Chile</span>
              </div>
              
              <h4 className="font-serif font-bold text-2xl text-white mb-2">Comunidad de IA Generativa Chile: Reunión de Coordinación</h4>
              
              <div className="flex items-center gap-2 text-sm text-muted mb-4">
                <Calendar size={16} />
                <span>Jueves 2 de Julio de 2026</span>
              </div>

              <p className="text-sm text-muted mb-4 leading-relaxed">
                Participación en la primera reunión de coordinación presencial y remota de la comunidad de IA Generativa en Chile, liderada por Daniel Povedano. Inclusión oficial como Referente de Inteligencia Artificial en Chile para liderar y coordinar futuras tareas, casos de uso e iniciativas tecnológicas de IA.
              </p>

              <div className="flex-col gap-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-white">
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>Inclusión formal como Referente de IA para liderar y coordinar futuras tareas de IA en el país.</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white mt-1">
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>Reunión de alineamiento estratégico de comunidad con líderes técnicos y referentes de la GDN-e.</span>
                </div>
              </div>
            </div>

            {/* Session Screenshot */}
            <div className="flex-col items-center" style={{ flex: '1 1 250px', minWidth: '220px' }}>
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--glass-border)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}>
                <img 
                  src="/ia_community_july_2.jpg" 
                  alt="Reunión Comunidad IA Generativa Chile" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  style={{ display: 'block' }}
                />
              </div>
              <p className="text-xs text-muted text-center mt-2 font-serif italic">Captura de la reunión de coordinación liderada por Daniel Povedano</p>
            </div>

          </div>
        </div>

        {/* IA Session Podcaster Card */}
        <div className="p-6 rounded-3xl mt-4" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--glass-border)' }}>
          <div className="flex-col gap-6">
            
            {/* Text details */}
            <div className="flex-col">
              <div className="flex items-center gap-2 mb-2 text-sm text-cyan font-semibold">
                <Presentation size={20} />
                <span>IA Sessions</span>
              </div>
              
              <h4 className="font-serif font-bold text-2xl text-white mb-2">IA Sessions: magIA que inspira</h4>
              
              <div className="flex items-center gap-2 text-sm text-muted mb-4">
                <Calendar size={16} />
                <span>Martes 23 de Junio de 2026</span>
              </div>

              <p className="text-sm text-muted mb-4 leading-relaxed">
                Participación como podcaster en la primera IA Session de la GDN-e, un nuevo formato interactivo para conversar sobre cómo la inteligencia artificial está transformando el desarrollo y las pruebas de código.
              </p>

              <div className="flex-col gap-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-white">
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>Conversación sobre mejores prácticas de desarrollo y el impacto de la IA en la eficiencia de proyectos.</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white mt-1">
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>Espacio junto a Gustavo Vigueras (Leader Developer) y Jimmy Cuevas (Testing Leader Specialist) como Top Adopters.</span>
                </div>
              </div>
            </div>

            {/* Session Afiche/Screenshot */}
            <div className="flex-col items-center" style={{ width: '100%', maxWidth: '420px', alignSelf: 'center' }}>
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--glass-border)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}>
                <img 
                  src="/ia_session_june_23.jpg" 
                  alt="IA Sessions magIA que inspira" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  style={{ display: 'block' }}
                />
              </div>
              <p className="text-xs text-muted text-center mt-2 font-serif italic">Afiche oficial de la IA Session - GDN-e</p>
            </div>

          </div>
        </div>

      </div>
      
    </div>
  );
};

export default InteligenciaArtificial;
