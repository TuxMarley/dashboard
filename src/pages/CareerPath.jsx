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
  Lightbulb,
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
  { role: 'Senior Technical Software Quality', kind: 'current', icon: Star },
  { role: 'Lead Technical Software Quality', kind: 'future', icon: Users },
  { role: 'Expert Technical Software Quality', kind: 'future', icon: Award },
];

const responsibilities = [
  'Diseñar y ejecutar prácticas de pruebas técnicas y automatización.',
  'Generar informes y métricas de pruebas para la toma de decisiones.',
  'Proponer mejoras, metodologías y herramientas para aumentar eficiencia y calidad.',
  'Compartir conocimiento y formar al equipo en buenas prácticas.',
  'Asegurar el cumplimiento del plan de calidad y uso responsable de IA.',
];

const competencies = [
  'Assurance & Testing',
  'Orientación a la calidad',
  'Pensamiento analítico',
  'Pensamiento sistémico',
  'Orientación al resultado',
];

const seniorAchievements = [
  {
    title: 'Diseño y ejecución de prácticas',
    description: 'Implementación de soluciones de automatización para pruebas Mobile y Web.',
    icon: Code2,
  },
  {
    title: 'IA para calidad y eficiencia',
    description: 'Integración de IA en procesos y proyectos nuevos.',
    icon: Lightbulb,
  },
  {
    title: 'Mejora continua de metodologías',
    description: 'Creación de frameworks y herramientas QA con IA.',
    icon: ShieldCheck,
  },
  {
    title: 'Difusión de buenas prácticas',
    description: 'Formaciones en automatización, IA e integración continua.',
    icon: BookOpen,
  },
  {
    title: 'Rol de referente técnico',
    description: 'Guía para el equipo en el uso de herramientas e IA.',
    icon: Award,
  },
];

const leadAchievements = [
  {
    title: 'Liderar soluciones automatizadas',
    description: 'Diseño e implementación Web y Mobile para distintos proyectos.',
    icon: Target,
  },
  {
    title: 'Definir marcos y herramientas',
    description: 'Creación de un framework adoptado por todo el estudio.',
    icon: Activity,
  },
  {
    title: 'Incorporar IA como diferenciador',
    description: 'Integración en proyectos y creación de herramientas QA con IA.',
    icon: Zap,
  },
  {
    title: 'Transferir y desarrollar talento',
    description: 'Formación de practicantes y equipo en QA, automatización e IA.',
    icon: Users,
  },
  {
    title: 'Apoyo a clientes y propuestas',
    description: 'Realización de POCs de automatización e IA para clientes.',
    icon: TrendingUp,
  },
];

const nextLevelNeeds = [
  {
    title: 'Impacto y adopción',
    description: 'Evidenciar que los frameworks y prácticas son adoptados transversalmente.',
    icon: TrendingUp,
  },
  {
    title: 'Medir y comunicar',
    description: 'Mostrar métricas de cobertura, tiempos, eficiencia y ahorro.',
    icon: Activity,
  },
  {
    title: 'Liderazgo técnico',
    description: 'Definir estándares, revisar soluciones y mentorear al equipo.',
    icon: Users,
  },
  {
    title: 'Visión estratégica',
    description: 'Alinear las soluciones QA e IA con la estrategia del negocio.',
    icon: Target,
  },
  {
    title: 'Visibilidad',
    description: 'Participar en comunidades técnicas y compartir conocimiento.',
    icon: BookOpen,
  },
];

const timeline = [
  {
    term: 'Corto plazo',
    range: '0-6 meses',
    description: 'Consolidar evidencias de impacto y adopción. Ampliar formación en IA aplicada a QA.',
    icon: Target,
    state: 'active',
  },
  {
    term: 'Mediano plazo',
    range: '6-12 meses',
    description: 'Asumir liderazgo técnico en más iniciativas. Definir estándares y directrices de QA e IA.',
    icon: Activity,
    state: 'active',
  },
  {
    term: 'Largo plazo',
    range: '12+ meses',
    description: 'Proyectarme a Expert Technical Software Quality, ampliando impacto estratégico y visibilidad.',
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
          <h2 id="talent-map-title">Mi rol actual y proyección en QA</h2>
          <p>Análisis del Job Role: Senior Technical Software Quality</p>
        </div>

        <aside className="talent-map__objective" aria-label="Objetivo del mapa de talento">
          <Target size={20} aria-hidden="true" />
          <p>Entender qué cumplo hoy, qué exige el siguiente rol y cómo avanzar con evidencia.</p>
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
                  {item.kind === 'current' && <span>Rol actual</span>}
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
                  <p>Perfil actual</p>
                  <h3>Senior Technical Software Quality</h3>
                </div>
              </header>

              <p className="talent-profile__summary">
                Analiza, diseña y ejecuta prácticas de calidad complejas, garantizando cobertura integral y fomentando la automatización. Actúa como referente técnico, consolidando y difundiendo las mejores prácticas de pruebas.
              </p>

              <div className="talent-section-title talent-section-title--spaced">
                <Activity size={18} aria-hidden="true" />
                <h3>Responsabilidades</h3>
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
              <p className="talent-competencies__intro">Nivel actual: consolidado en cada competencia prioritaria.</p>

              <ul>
                {competencies.map((competency) => (
                  <li key={competency}>
                    <span>{competency}</span>
                    <strong aria-label={`${competency}: nivel 3 de 4`}>3<span>/4</span></strong>
                  </li>
                ))}
              </ul>
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
              items={seniorAchievements}
              tone="senior"
              heading="Lo que ya cumplo"
              subtitle="Como Senior Technical QA"
            />
            <AchievementList
              items={leadAchievements}
              tone="lead"
              heading="Capacidades que ya aporto"
              subtitle="Propias del rol Lead Technical QA"
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
                  <h3>Qué necesito para avanzar a Lead</h3>
                  <p>Focos concretos para traducir experiencia en impacto visible.</p>
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
                <p>La evidencia disponible combina adopción técnica, formación y capacidad de ejecución.</p>
                <dl>
                  <div>
                    <dt>Personas formadas</dt>
                    <dd>25+</dd>
                    <p>Automatización, IA y CI.</p>
                  </div>
                  <div>
                    <dt>Framework transversal</dt>
                    <dd>1</dd>
                    <p>Adoptado por todo el estudio.</p>
                  </div>
                  <div>
                    <dt>Herramientas QA con IA</dt>
                    <dd>2</dd>
                    <p>Desarrolladas internamente.</p>
                  </div>
                  <div>
                    <dt>POCs para clientes</dt>
                    <dd>10+</dd>
                    <p>En automatización e IA.</p>
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
