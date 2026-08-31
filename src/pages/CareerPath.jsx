import { useState } from 'react';
import {
  Activity,
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Code2,
  Flag,
  Gauge,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  UserRound,
  Users,
  Zap,
} from 'lucide-react';

const progression = [
  { role: 'Software Quality Analyst', kind: 'past', icon: Code2 },
  { role: 'Technical Software Quality', kind: 'past', icon: Code2 },
  { role: 'Senior Technical Software Quality', kind: 'official', icon: Star, marker: 'Categoría registrada' },
  { role: 'Lead Technical Software Quality', kind: 'current', icon: Users, marker: 'Nivel funcional evidenciado' },
  { role: 'Expert Technical Software Quality', kind: 'future', icon: Award, marker: 'Siguiente horizonte' },
];

const responsibilities = [
  'Definir, construir e implantar prácticas, metodologías, herramientas y marcos de calidad reutilizables.',
  'Diseñar y ejecutar automatización Mobile y Web, planes de prueba complejos y validaciones trazables.',
  'Integrar IA de forma gobernada en el delivery mediante agentes, LLM, RAG, skills y herramientas especializadas.',
  'Coordinar técnicamente el trabajo de automatización en AvanGrid y acompañar la ejecución del equipo desde el conocimiento.',
  'Asesorar a proyectos y clientes como ProVida, BHP, KOSIN y MetLife en automatización, agentes e IA aplicada a QA.',
  'Formar y transferir conocimiento mediante Argus, Next-Gen QA, sesiones internas y acompañamiento de talento.',
  'Convertir necesidades de migración, saneamiento, reparación y regresión en flujos técnicos repetibles y verificables.',
];

const competencies = [
  {
    name: 'Assurance & Testing',
    level: 3,
    leadRequirement: 3,
    expertTarget: 4,
    note: 'Planes complejos, automatización Mobile/Web y validación funcional y técnica.',
  },
  {
    name: 'Orientación a la calidad',
    level: 3,
    leadRequirement: 3,
    expertTarget: 4,
    note: 'Cobertura, trazabilidad, saneamiento y control de evidencias en distintos proyectos.',
  },
  {
    name: 'Desarrollo de personas',
    level: 2,
    leadRequirement: 2,
    expertTarget: 3,
    note: 'Formación Argus, iniciativa Next-Gen QA y acompañamiento técnico del equipo.',
  },
  {
    name: 'Gestión de métodos y herramientas',
    level: 3,
    leadRequirement: 3,
    expertTarget: 4,
    note: 'Argus, ArgusPy, CAOO y agentes técnicos reutilizables en contextos reales.',
  },
  {
    name: 'Orientación al resultado',
    level: 3,
    leadRequirement: 3,
    expertTarget: 4,
    note: 'Entrega sostenida en AvanGrid, MetLife, Studio QA y asesorías.',
  },
  {
    name: 'Impacto',
    level: 2,
    leadRequirement: null,
    expertTarget: 3,
    note: 'Influencia visible en equipos y clientes; falta medir adopción y valor transversal sostenido.',
  },
];

const currentAchievements = [
  {
    title: 'AvanGrid · automatización y delivery Mobile',
    description: 'El dashboard registra 40 de 72 casos creados en junio (55,6%) y 134 de 265 casos automatizados en el alcance Mobile. La cartera RAG añade 67 registros CNG asignados, distribuidos entre Android e iOS, con 54 pruebas en estado Passed; en agosto coordinó la preparación de regresiones y dejó operativos 35 casos Mobile de BGC.',
    source: 'AvanGrid + cartera RAG',
    icon: ClipboardCheck,
  },
  {
    title: 'MetLife · agentes para migración y reparación',
    description: 'Entre el 22 de julio y el 25 de agosto se registran 33 actividades, 77 horas y 25 días de trabajo: creación y ejecución de agentes, saneamiento y migración de repositorios, reparación post-migración, remediación de entornos de QA y validaciones.',
    source: 'Historial operativo MetLife',
    icon: ShieldCheck,
  },
  {
    title: 'Studio QA · formación y evolución del talento',
    description: 'Impartió las sesiones teórica y práctica de Argus los días 29 y 30 de julio y diseñó Next-Gen QA, una iniciativa teórico-práctica de 40 horas para evolucionar perfiles QA hacia AI Engineer.',
    source: 'Studio QA',
    icon: BookOpen,
  },
  {
    title: 'Asesorías QA · soluciones adaptadas a cliente',
    description: 'Asesoró a KOSIN en planes de prueba con IA y criterios de seguridad, creó ArgusPy para BHP con Python, pytest, Playwright y Allure, y orientó a ProVida en la adopción de agentes e IA.',
    source: 'KOSIN · BHP · ProVida',
    icon: TrendingUp,
  },
  {
    title: 'IA aplicada · de la experimentación al uso repetible',
    description: 'Construyó CAOO, Radar IA y un agente autónomo de automatización web; además presentó una arquitectura de agentización con LLM, RAG, skills y herramientas para tareas técnicas gobernadas.',
    source: 'Iniciativas de Inteligencia Artificial',
    icon: Sparkles,
  },
  {
    title: 'Influencia técnica y comunidad',
    description: 'Actúa como Referente de IA en Chile, participó como Top Adopter y podcaster en IA Sessions y compartió una nueva sesión sobre cómo los agentes de IA interactúan con tools y skills para resolver tareas técnicas.',
    source: 'Comunidad GenAI GDNe',
    icon: Network,
  },
];

const leadAlignment = [
  {
    title: 'Definir y construir prácticas de calidad',
    description: 'Argus, ArgusPy, CAOO y los agentes de MetLife demuestran construcción de marcos, herramientas y flujos reutilizables.',
    status: 'Evidencia sólida',
    tone: 'strong',
    icon: Activity,
  },
  {
    title: 'Implementar y probar soluciones complejas',
    description: 'La automatización Mobile/Web, la regresión multiplataforma y los smoke tests cubren ejecución y aseguramiento técnico sostenido.',
    status: 'Evidencia sólida',
    tone: 'strong',
    icon: Target,
  },
  {
    title: 'Liderar desde el conocimiento',
    description: 'La coordinación técnica en AvanGrid, la formación Argus y Next-Gen QA muestran transferencia de criterio y desarrollo de otras personas.',
    status: 'Evidencia sólida',
    tone: 'strong',
    icon: Users,
  },
  {
    title: 'Asesorar a BUs, proyectos y clientes',
    description: 'KOSIN, BHP, ProVida y MetLife acreditan diagnóstico, adaptación técnica y definición de soluciones para contextos distintos.',
    status: 'Evidencia sólida',
    tone: 'strong',
    icon: TrendingUp,
  },
  {
    title: 'Aplicar pensamiento crítico y Tech disruption',
    description: 'Las decisiones sobre seguridad, arquitectura agéntica, RAG y automatización responsable muestran evaluación de riesgos y alternativas.',
    status: 'Evidencia sólida',
    tone: 'strong',
    icon: Zap,
  },
  {
    title: 'Demostrar impacto transversal sostenido',
    description: 'Hay adopción, producción técnica e influencia; aún falta una medición común de ahorro, eficiencia, reutilización y resultados de los equipos.',
    status: 'Por consolidar',
    tone: 'partial',
    icon: Gauge,
  },
];

const historyMilestones = [
  {
    date: '15-30 jun 2026',
    title: 'Producción sostenida en AvanGrid',
    description: '40 de 72 casos creados durante junio y avance de la automatización Mobile en Payments, Payment Flow, Outages y Autopay.',
  },
  {
    date: '23 jun 2026',
    title: 'IA Sessions · Top Adopter',
    description: 'Participación como podcaster sobre el impacto de la IA en desarrollo y pruebas de código.',
  },
  {
    date: '2 jul 2026',
    title: 'CAOO y Referente de IA en Chile',
    description: 'Presentación del orquestador de QA con IA e incorporación a la coordinación de iniciativas GenAI.',
  },
  {
    date: '13-21 jul 2026',
    title: 'Asesoría KOSIN y Radar IA',
    description: 'Diseño de un flujo de planes de prueba con IA y puesta en marcha de un radar diario con fuentes oficiales.',
  },
  {
    date: '22 jul-13 ago 2026',
    title: 'Ciclo de agentes en MetLife',
    description: 'Creación, despliegue, saneamiento, migración, reparación y pruebas sobre repositorios y aplicativos.',
  },
  {
    date: '29-30 jul 2026',
    title: 'Formación Argus y asesoría ProVida',
    description: 'Transferencia teórico-práctica sobre agentes para automatización y orientación de adopción en cliente.',
  },
  {
    date: '6 ago 2026',
    title: 'Arquitectura de agentización técnica',
    description: 'Presentación de un enfoque modular y gobernado con LLM, RAG, skills, herramientas y Copilot.',
  },
  {
    date: '17-19 ago 2026',
    title: 'Coordinación y recuperación Mobile en BGC',
    description: 'Definición de la preparación de regresiones junto al equipo de Automatización y corrección comprobada de 35 casos Mobile.',
  },
  {
    date: '25 ago 2026',
    title: 'Sesión IA sobre agentes y continuidad en MetLife',
    description: 'Participación en una IA Session sobre agentes, tools y skills, junto con actividad de reparación y migración de base de datos en MetLife.',
  },
];

const nextLevelNeeds = [
  {
    title: 'Formalizar el alcance Lead',
    description: 'Presentar un dossier con responsabilidades, decisiones, fechas, fuentes y resultados que sustente la validación interna de categoría.',
    icon: Users,
  },
  {
    title: 'Medir impacto y adopción',
    description: 'Definir línea base y seguimiento de cobertura, ahorro, tiempo de ciclo, defectos evitados, reutilización y equipos que adoptan cada solución.',
    icon: TrendingUp,
  },
  {
    title: 'Elevar Assurance y calidad a nivel 4',
    description: 'Acreditar visión integral, estándares compartidos y planes complejos que maximicen calidad, seguridad, rendimiento y escalabilidad.',
    icon: ShieldCheck,
  },
  {
    title: 'Convertir influencia en Impacto nivel 3',
    description: 'Documentar decisiones en las que logró alinear a varias personas, responder resistencias y cambiar la forma de ejecutar el trabajo.',
    icon: Network,
  },
  {
    title: 'Escalar desarrollo de personas',
    description: 'Mantener objetivos, delegación, feedback periódico y resultados observables para quienes acompaña o forma.',
    icon: BookOpen,
  },
  {
    title: 'Ampliar visión estratégica del delivery',
    description: 'Participar de forma sostenida en estimaciones, impactos por alcance, prioridades, riesgos, viabilidad y alineación con la estrategia.',
    icon: Target,
  },
];

const impactMetrics = [
  { label: 'Casos Mobile automatizados', value: '134', detail: 'De 265 casos automatizables.' },
  { label: 'Creación en junio', value: '40/72', detail: '55,6% de los casos del equipo.' },
  { label: 'Cartera CNG asignada', value: '67', detail: '34 Android · 33 iOS.' },
  { label: 'Casos BGC recuperados', value: '35', detail: '9 el 18 de agosto y 26 el 19.' },
  { label: 'Actividad MetLife', value: '77 h', detail: '33 tareas en 25 días.' },
  { label: 'Despliegue inicial MetLife', value: '3', detail: 'Repositorios intervenidos por agente.' },
  { label: 'Programa Next-Gen QA', value: '40 h', detail: 'Formación teórico-práctica diseñada.' },
];

const timeline = [
  {
    term: 'Corto plazo',
    range: '0-3 meses',
    description: 'Formalizar Lead con un dossier trazable y activar un cuadro común de métricas de adopción, eficiencia, calidad e impacto.',
    icon: Target,
    state: 'active',
  },
  {
    term: 'Mediano plazo',
    range: '3-9 meses',
    description: 'Escalar estándares de QA e IA a varios equipos, acreditar desarrollo de personas y asumir mayor participación en decisiones de delivery.',
    icon: Activity,
    state: 'active',
  },
  {
    term: 'Largo plazo',
    range: '9-18 meses',
    description: 'Preparar Expert con Assurance y Calidad en nivel 4, Impacto en nivel 3 y resultados transversales sostenidos y alineados con estrategia.',
    icon: Award,
    state: 'future',
  },
];

const tabs = [
  { id: 'profile', label: 'Posicionamiento actual', icon: UserRound },
  { id: 'achievements', label: 'Evidencias e historial', icon: Briefcase },
  { id: 'nextSteps', label: 'Brechas y plan de avance', icon: Rocket },
];

function AchievementList({ items, tone, heading, subtitle }) {
  return (
    <section className={`talent-achievement-panel talent-achievement-panel--${tone}`}>
      <header className="talent-panel-heading">
        <div className="talent-panel-icon">
          {tone === 'evidence' ? <CheckCircle2 aria-hidden="true" /> : <Star aria-hidden="true" />}
        </div>
        <div>
          <h3>{heading}</h3>
          <p>{subtitle}</p>
        </div>
      </header>

      <ol className="talent-achievement-list">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.title}>
              <span className="talent-achievement-icon" aria-hidden="true">
                <Icon size={18} />
              </span>
              <div>
                <div className="talent-achievement-title-row">
                  <h4>{item.title}</h4>
                  {item.status && <span className={`talent-evidence-status talent-evidence-status--${item.tone}`}>{item.status}</span>}
                </div>
                <p>{item.description}</p>
                {item.source && <span className="talent-evidence-source">{item.source}</span>}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

const CareerPath = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabKeyDown = (event, tabId) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;

    event.preventDefault();
    const currentIndex = tabs.findIndex((tab) => tab.id === tabId);
    const nextIndex = event.key === 'Home'
      ? 0
      : event.key === 'End'
        ? tabs.length - 1
        : (currentIndex + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    const nextTab = tabs[nextIndex];

    setActiveTab(nextTab.id);
    document.getElementById(`talent-tab-${nextTab.id}`)?.focus();
  };

  return (
    <section className="talent-map" aria-labelledby="talent-map-title">
      <header className="talent-map__header">
        <div className="talent-map__intro">
          <p className="talent-map__kicker">Mapa de talento</p>
          <h2 id="talent-map-title">Mi posicionamiento funcional en QA</h2>
          <p>Reanálisis completo · Lead Technical Software Quality · evidencia actualizada al 25 de agosto de 2026</p>
        </div>

        <aside className="talent-map__objective" aria-label="Conclusión del mapa de talento">
          <Target size={20} aria-hidden="true" />
          <p><strong>Conclusión:</strong> categoría registrada Senior; nivel funcional evidenciado Lead. El siguiente paso es formalizar Lead y construir evidencia de impacto para avanzar hacia Expert.</p>
        </aside>
      </header>

      <section className="talent-progression" aria-labelledby="progression-title">
        <div className="talent-section-title">
          <TrendingUp size={18} aria-hidden="true" />
          <h3 id="progression-title">Ruta de progresión en QA</h3>
        </div>

        <div className="talent-progression__track">
          {progression.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="talent-progression__segment" key={item.role}>
                <article className={`talent-role talent-role--${item.kind}`}>
                  <Icon size={item.kind === 'current' ? 22 : 18} aria-hidden="true" />
                  <p>{item.role}</p>
                  {item.marker && <span>{item.marker}</span>}
                </article>
                {index < progression.length - 1 && <ChevronRight className="talent-role-arrow" aria-hidden="true" />}
              </div>
            );
          })}
        </div>
      </section>

      <div className="talent-tabs" role="tablist" aria-label="Secciones del mapa de talento">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              className={`talent-tab ${isActive ? 'talent-tab--active' : ''}`}
              type="button"
              role="tab"
              tabIndex={isActive ? 0 : -1}
              aria-selected={isActive}
              aria-controls={`talent-panel-${tab.id}`}
              id={`talent-tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(event) => handleTabKeyDown(event, tab.id)}
            >
              <Icon size={17} aria-hidden="true" />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="talent-tab-panel" key={activeTab}>
        {activeTab === 'profile' && (
          <section
            id="talent-panel-profile"
            role="tabpanel"
            aria-labelledby="talent-tab-profile"
            className="talent-profile-layout"
          >
            <article className="talent-profile">
              <header className="talent-profile__header">
                <div className="talent-monogram" aria-hidden="true">JC</div>
                <div>
                  <p>Nivel funcional evidenciado</p>
                  <h3>Lead Technical Software Quality</h3>
                </div>
              </header>

              <p className="talent-profile__summary">
                El alcance actual ya no se limita a ejecutar automatización. Jimmy define y construye prácticas y herramientas, resuelve problemas técnicos complejos, integra IA en el delivery, asesora a distintos proyectos y desarrolla capacidades en otras personas. Esa combinación coincide con la definición funcional de Lead del Mapa de Talento GDNe.
              </p>

              <dl className="talent-status-grid" aria-label="Resumen del posicionamiento profesional">
                <div>
                  <dt>Categoría formal</dt>
                  <dd>Senior</dd>
                  <p>Registro actual</p>
                </div>
                <div>
                  <dt>Nivel funcional</dt>
                  <dd>Lead</dd>
                  <p>Respaldado por evidencia</p>
                </div>
                <div>
                  <dt>Próximo horizonte</dt>
                  <dd>Expert</dd>
                  <p>Requiere nuevas evidencias</p>
                </div>
              </dl>

              <div className="talent-profile__verdict">
                <strong>Resultado del reanálisis</strong>
                <p>La evidencia cubre de manera consistente el núcleo de Lead: definir, construir, implementar y probar prácticas de calidad, y liderar al equipo desde el conocimiento. Expert todavía no está consolidado porque exige Assurance & Testing y Orientación a la calidad en nivel 4, Impacto en nivel 3 y una referencia estratégica transversal demostrada en el tiempo.</p>
              </div>

              <div className="talent-section-title talent-section-title--spaced">
                <Activity size={18} aria-hidden="true" />
                <h3>Responsabilidades que ejerzo</h3>
              </div>

              <ul className="talent-responsibilities">
                {responsibilities.map((responsibility) => (
                  <li key={responsibility}>
                    <CheckCircle2 size={17} aria-hidden="true" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </article>

            <aside className="talent-competencies" aria-labelledby="competencies-title">
              <div className="talent-section-title">
                <Star size={18} aria-hidden="true" />
                <h3 id="competencies-title">Lectura de competencias</h3>
              </div>
              <p className="talent-competencies__intro">Estimación funcional basada en evidencias. El proceso interno debe confirmar niveles y promoción.</p>

              <ul>
                {competencies.map((competency) => (
                  <li key={competency.name}>
                    <div className="talent-competency-heading">
                      <span>{competency.name}</span>
                      <strong aria-label={`${competency.name}: nivel funcional estimado ${competency.level} de 4`}>{competency.level}<span>/4</span></strong>
                    </div>
                    <progress max="4" value={competency.level} aria-label={`${competency.name}: ${competency.level} de 4`} />
                    <div className="talent-competency-targets">
                      <span>{competency.leadRequirement ? `Lead ${competency.leadRequirement}` : 'No crítica en Lead'}</span>
                      <span>Referencia Expert {competency.expertTarget}</span>
                    </div>
                    <p>{competency.note}</p>
                  </li>
                ))}
              </ul>

              <div className="talent-growth">
                <span>Growth Mindset</span>
                <strong>Tramo 3 compatible · preparado para el salto</strong>
                <p>La autonomía, el camino elegido en QA Automation e IA y las asignaciones de reto son compatibles con T3. No se asigna percentil: debe confirmarse en la evaluación formal.</p>
              </div>
            </aside>

            <aside className="talent-method-note">
              <ShieldCheck size={18} aria-hidden="true" />
              <p><strong>Base del análisis:</strong> Mapa de Talento GDNe IBIOL, modelo Growth Mindset, cartera RAG de AvanGrid e historial completo de AvanGrid, MetLife, Studio QA, Asesorías QA e Inteligencia Artificial. Esta lectura orienta la conversación de carrera; no sustituye la validación interna.</p>
            </aside>
          </section>
        )}

        {activeTab === 'achievements' && (
          <section
            id="talent-panel-achievements"
            role="tabpanel"
            aria-labelledby="talent-tab-achievements"
            className="talent-evidence-view"
          >
            <div className="talent-achievements-layout">
              <AchievementList
                items={currentAchievements}
                tone="evidence"
                heading="Evidencias profesionales integradas"
                subtitle="Actividad actual e histórica hasta el 25 de agosto de 2026"
              />
              <AchievementList
                items={leadAlignment}
                tone="lead"
                heading="Ajuste al rol Lead"
                subtitle="Contraste directo con el Mapa de Talento GDNe"
              />
            </div>

            <section className="talent-history" aria-labelledby="talent-history-title">
              <header>
                <div className="talent-section-title">
                  <Briefcase size={18} aria-hidden="true" />
                  <h3 id="talent-history-title">Historial que sustenta la evolución</h3>
                </div>
                <p>Los hitos muestran continuidad entre ejecución, creación de herramientas, asesoría y desarrollo de personas.</p>
              </header>
              <ol className="talent-history-list">
                {historyMilestones.map((milestone) => (
                  <li key={`${milestone.date}-${milestone.title}`}>
                    <time>{milestone.date}</time>
                    <div>
                      <h4>{milestone.title}</h4>
                      <p>{milestone.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </section>
        )}

        {activeTab === 'nextSteps' && (
          <section
            id="talent-panel-nextSteps"
            role="tabpanel"
            aria-labelledby="talent-tab-nextSteps"
            className="talent-next-steps"
          >
            <article className="talent-needs">
              <header className="talent-needs__header">
                <Flag size={22} aria-hidden="true" />
                <div>
                  <h3>Qué necesito para formalizar Lead y construir el salto a Expert</h3>
                  <p>La prioridad inmediata es convertir un alcance Lead ya visible en evidencia comparable, sostenida y validable.</p>
                </div>
              </header>

              <ul>
                {nextLevelNeeds.map((need) => {
                  const Icon = need.icon;

                  return (
                    <li key={need.title}>
                      <span className="talent-need-icon" aria-hidden="true"><Icon size={17} /></span>
                      <div>
                        <h4>{need.title}</h4>
                        <p>{need.description}</p>
                      </div>
                      <ArrowRight className="talent-need-arrow" size={17} aria-hidden="true" />
                    </li>
                  );
                })}
              </ul>
            </article>

            <div className="talent-next-grid">
              <article className="talent-impact">
                <div className="talent-section-title">
                  <TrendingUp size={19} aria-hidden="true" />
                  <h3>Impacto respaldado por datos</h3>
                </div>
                <p>Estas cifras describen el alcance visible; el siguiente paso es vincularlas con ahorro, eficiencia, adopción y calidad obtenida.</p>
                <dl>
                  {impactMetrics.map((metric) => (
                    <div key={metric.label}>
                      <dt>{metric.label}</dt>
                      <dd>{metric.value}</dd>
                      <p>{metric.detail}</p>
                    </div>
                  ))}
                </dl>
              </article>

              <article className="talent-timeline">
                <div className="talent-section-title">
                  <Rocket size={19} aria-hidden="true" />
                  <h3>Plan de evolución</h3>
                </div>
                <ol>
                  {timeline.map((item) => {
                    const Icon = item.icon;

                    return (
                      <li className={`talent-timeline-item talent-timeline-item--${item.state}`} key={item.term}>
                        <span className="talent-timeline-icon" aria-hidden="true"><Icon size={16} /></span>
                        <div>
                          <div className="talent-timeline-item__heading">
                            <h4>{item.term}</h4>
                            <span>{item.range}</span>
                          </div>
                          <p>{item.description}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </article>
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export default CareerPath;
