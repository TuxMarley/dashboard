import { useState } from 'react';
import {
  Activity,
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Code2,
  Flag,
  Rocket,
  ShieldCheck,
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
  { role: 'Lead Technical Software Quality', kind: 'current', icon: Users, marker: 'Rol recomendado' },
  { role: 'Expert Technical Software Quality', kind: 'future', icon: Award },
];

const responsibilities = [
  'Liderar el diseño e implementación de soluciones de automatización Mobile y Web.',
  'Definir frameworks, herramientas y directrices técnicas reutilizables para el estudio.',
  'Diseñar procesos para integrar IA de forma responsable en proyectos y prácticas de QA.',
  'Coordinar técnicamente a un QA automatizador dentro del equipo de AvanGrid.',
  'Asesorar a otros proyectos y realizar POCs de automatización e IA para clientes.',
  'Formar a equipos y practicantes en QA, automatización, IA e integración continua.',
];

const competencies = [
  { name: 'Assurance & Testing', level: 3 },
  { name: 'Orientación a la calidad', level: 3 },
  { name: 'Desarrollo de personas', level: 2 },
  { name: 'Gestión de métodos y herramientas', level: 3 },
  { name: 'Orientación al resultado', level: 3 },
];

const currentAchievements = [
  {
    title: 'Liderazgo técnico en AvanGrid',
    description: 'Diseño de automatización Mobile, 134 casos automatizados, integración completa con Jira/Zephyr y coordinación directa de un QA automatizador.',
    icon: Users,
  },
  {
    title: 'Soluciones Mobile y Web',
    description: 'Diseño e implementación de pruebas automatizadas multiplataforma y flujos reutilizables para distintos proyectos.',
    icon: Code2,
  },
  {
    title: 'Frameworks y herramientas del estudio',
    description: 'Creación de un framework adoptado transversalmente, ArgusPy para BHP y herramientas internas de QA con IA.',
    icon: ShieldCheck,
  },
  {
    title: 'IA aplicada al delivery',
    description: 'CAOO, agente autónomo de automatización web, Radar IA e integración de IA en procesos y proyectos nuevos.',
    icon: Zap,
  },
  {
    title: 'Asesoría y POCs para clientes',
    description: 'Apoyo técnico a KOSIN, BHP y MetLife, además de pruebas de concepto de automatización e IA para otros clientes.',
    icon: TrendingUp,
  },
  {
    title: 'Formación y desarrollo de talento',
    description: 'Formaciones de automatización, IA e integración continua; acompañamiento de practicantes y referente de IA en la empresa.',
    icon: BookOpen,
  },
];

const leadAlignment = [
  {
    title: 'Liderar soluciones de prueba automatizadas',
    description: 'Cumplido: diseña, implementa y guía soluciones Mobile y Web, con trazabilidad y mejora continua.',
    icon: Target,
  },
  {
    title: 'Definir prácticas, metodologías y marcos',
    description: 'Cumplido: ha creado frameworks y herramientas adoptables por el estudio y por proyectos cliente.',
    icon: Activity,
  },
  {
    title: 'Incorporar IA como diferenciador',
    description: 'Cumplido: integra IA en proyectos, automatiza procesos y actúa como referente interno en su uso.',
    icon: Zap,
  },
  {
    title: 'Liderar desde el conocimiento',
    description: 'Cumplido: coordina a un QA automatizador, forma al equipo y desarrolla practicantes.',
    icon: Users,
  },
  {
    title: 'Asesorar a BUs y clientes',
    description: 'Cumplido: presta asesorías técnicas y construye POCs que validan viabilidad y diferenciación.',
    icon: TrendingUp,
  },
  {
    title: 'Gestionar adopción e impacto',
    description: 'Parcial: existe adopción y evidencia técnica; falta sistematizar métricas de ahorro, productividad y valor transversal.',
    icon: Award,
  },
];

const nextLevelNeeds = [
  {
    title: 'Formalizar el alcance Lead',
    description: 'Documentar responsabilidades, decisiones técnicas, proyectos asesorados y resultados del QA bajo coordinación.',
    icon: Users,
  },
  {
    title: 'Medir impacto y adopción',
    description: 'Mantener métricas de cobertura, ahorro, reducción de tiempos, reutilización y adopción por proyecto.',
    icon: TrendingUp,
  },
  {
    title: 'Gobernar estándares de QA e IA',
    description: 'Convertir frameworks y buenas prácticas en directrices comunes, con criterios de seguridad y uso responsable.',
    icon: Activity,
  },
  {
    title: 'Ampliar visión de delivery',
    description: 'Participar de forma sostenida en estimaciones, capacidad, backlog, prioridades y viabilidad de las soluciones.',
    icon: Target,
  },
  {
    title: 'Escalar desarrollo de personas',
    description: 'Definir objetivos, seguimiento y feedback para el QA automatizador y para los practicantes que acompaña.',
    icon: BookOpen,
  },
];

const timeline = [
  {
    term: 'Corto plazo',
    range: '0-3 meses',
    description: 'Presentar la evidencia para formalizar el rol Lead y establecer métricas comunes de impacto, adopción y eficiencia.',
    icon: Target,
    state: 'active',
  },
  {
    term: 'Mediano plazo',
    range: '3-9 meses',
    description: 'Consolidar gobierno técnico en varios proyectos, seguimiento del talento y participación en estimaciones del delivery.',
    icon: Activity,
    state: 'active',
  },
  {
    term: 'Largo plazo',
    range: '9-18 meses',
    description: 'Preparar la ruta a Expert mediante impacto transversal medible, estrategia de QA/IA y liderazgo de planes avanzados de desarrollo.',
    icon: Award,
    state: 'future',
  },
];

const tabs = [
  { id: 'profile', label: 'Perfil actual', icon: UserRound },
  { id: 'achievements', label: 'Logros y cumplimiento', icon: Briefcase },
  { id: 'nextSteps', label: 'Proyección y próximos pasos', icon: Rocket },
];

function AchievementList({ items, tone, heading, subtitle }) {
  return (
    <section className={`talent-achievement-panel talent-achievement-panel--${tone}`}>
      <header className="talent-panel-heading">
        <div className="talent-panel-icon">
          {tone === 'senior' ? <CheckCircle2 aria-hidden="true" /> : <Star aria-hidden="true" />}
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
                <h4>{item.title}</h4>
                <p>{item.description}</p>
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

  return (
    <section className="talent-map" aria-labelledby="talent-map-title">
      <header className="talent-map__header">
        <div className="talent-map__intro">
          <p className="talent-map__kicker">Mapa de talento</p>
          <h2 id="talent-map-title">Mi nivel funcional y proyección en QA</h2>
          <p>Análisis de funciones: Lead Technical Software Quality · actualizado al 23 de julio de 2026</p>
        </div>

        <aside className="talent-map__objective" aria-label="Objetivo del mapa de talento">
          <Target size={20} aria-hidden="true" />
          <p>Conclusión: las responsabilidades ejercidas corresponden a Lead. La categoría formal debe validarse mediante el proceso interno.</p>
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
              aria-selected={isActive}
              aria-controls={`talent-panel-${tab.id}`}
              id={`talent-tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
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
                  <p>Nivel funcional recomendado</p>
                  <h3>Lead Technical Software Quality</h3>
                </div>
              </header>

              <p className="talent-profile__summary">
                Define, construye e implementa prácticas, metodologías, herramientas y marcos de calidad, y lidera desde el conocimiento al equipo para aplicarlos. Su alcance combina automatización Mobile y Web, incorporación de IA, asesoría técnica, desarrollo de talento y coordinación directa de un QA automatizador.
              </p>

              <div className="talent-profile__verdict">
                <strong>Resultado del análisis</strong>
                <p>La categoría registrada es Senior, pero el alcance real cubre de forma consistente los criterios de Lead. Aún no corresponde Expert porque falta consolidar gobierno estratégico, planificación económica e impacto transversal medido de manera sostenida.</p>
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
                <h3 id="competencies-title">Competencias clave</h3>
              </div>
              <p className="talent-competencies__intro">Referencias del rol Lead definidas por el Mapa de Talento.</p>

              <ul>
                {competencies.map((competency) => (
                  <li key={competency.name}>
                    <span>{competency.name}</span>
                    <strong aria-label={`${competency.name}: nivel ${competency.level} de 4`}>{competency.level}<span>/4</span></strong>
                  </li>
                ))}
              </ul>

              <div className="talent-growth">
                <span>Growth Mindset</span>
                <strong>Tramo 3 - Preparado para el salto</strong>
                <p>Existe autonomía, un camino elegido en QA Automation e IA y responsabilidades desafiantes del nivel siguiente. La promoción y el percentil deben confirmarse en la evaluación formal.</p>
              </div>
            </aside>
          </section>
        )}

        {activeTab === 'achievements' && (
          <section
            id="talent-panel-achievements"
            role="tabpanel"
            aria-labelledby="talent-tab-achievements"
            className="talent-achievements-layout"
          >
            <AchievementList
              items={currentAchievements}
              tone="senior"
              heading="Evidencias del trabajo actual"
              subtitle="AvanGrid, Studio QA, Asesorías QA e Inteligencia Artificial"
            />
            <AchievementList
              items={leadAlignment}
              tone="lead"
              heading="Cumplimiento del rol Lead"
              subtitle="Contraste directo con el Mapa de Talento GDNe"
            />
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
                  <h3>Qué necesito para consolidar Lead y avanzar hacia Expert</h3>
                  <p>La prioridad es formalizar y escalar un alcance que ya opera funcionalmente en nivel Lead.</p>
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
                  <h3>Impacto actual generado</h3>
                </div>
                <p>La evidencia combina ejecución, adopción técnica, liderazgo y transferencia de conocimiento.</p>
                <dl>
                  <div>
                    <dt>QA bajo coordinación</dt>
                    <dd>1</dd>
                    <p>Automatizador en AvanGrid.</p>
                  </div>
                  <div>
                    <dt>Casos mobile automatizados</dt>
                    <dd>134</dd>
                    <p>Android e iOS.</p>
                  </div>
                  <div>
                    <dt>Trazabilidad Zephyr</dt>
                    <dd>100%</dd>
                    <p>Ciclos, resultados y evidencias.</p>
                  </div>
                  <div>
                    <dt>Repositorios MetLife</dt>
                    <dd>3</dd>
                    <p>Analizados y saneados.</p>
                  </div>
                </dl>
              </article>

              <article className="talent-timeline">
                <div className="talent-section-title">
                  <Rocket size={19} aria-hidden="true" />
                  <h3>Próximos pasos en mi carrera</h3>
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
