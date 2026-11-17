import { useState } from 'react';
import { Link } from 'react-router-dom';
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
  ListChecks,
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
  'Aplicar una arquitectura multiagéntica reutilizable para reparar, sanitizar y migrar repositorios y componentes de datos.',
  'Asumir POC e iniciativas de automatización de alta complejidad, resolver su viabilidad técnica y convertirlas en entregables comprobables.',
  'Definir y apoyar frameworks, pipelines e integración continua para incorporar pruebas, evidencias y controles de calidad al delivery.',
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
    note: 'Formación Argus, programa QAI Engineering y piloto AI Engineering con seis participantes que completaron un agente propio.',
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
  {
    name: 'Pensamiento crítico y Tech Disruption',
    level: 3,
    leadRequirement: null,
    expertTarget: 3,
    note: 'Resolución de POC complejas, arquitecturas agénticas y selección de soluciones de IA aplicadas a QA; falta sistematizar decisiones y resultados.',
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
    description: 'Entre el 22 de julio y el 9 de septiembre se registran 52 actividades, 142 horas y 36 días de trabajo. Además del bloque de migraciones y reparación con agentes, la sección documenta un flujo de pruebas agénticas desde el objetivo funcional y el contexto del framework hasta la ejecución, el ajuste y la evidencia revisable.',
    source: 'Historial operativo MetLife + caso de éxito publicado',
    icon: ShieldCheck,
  },
  {
    title: 'Studio QA · formación y evolución del talento',
    description: 'Impartió las sesiones teórica y práctica de Argus, participó en entrevistas técnicas regionales y de Chile, abrió NextGen QA Network e inició un programa piloto QAI Engineering de 32 horas para transformar perfiles QA.',
    source: 'Studio QA',
    icon: BookOpen,
  },
  {
    title: 'Asesorías QA · soluciones adaptadas a cliente',
    description: 'Asesoró a KOSIN, creó ArgusPy para BHP y orientó a ProVida. Además, completó un piloto AI Engineering en el que seis participantes construyeron un agente propio y presentó Quality Engineering Agéntica en el Greenhouse de oficina.',
    source: 'KOSIN · BHP · ProVida',
    icon: TrendingUp,
  },
  {
    title: 'IA aplicada · de la experimentación al uso repetible',
    description: 'Construyó CAOO, Radar IA y un agente autónomo de automatización web; presentó una arquitectura con LLM, RAG, skills y herramientas, y realizó el workshop AI Boost sobre arquitectura agéntica aplicada a escenarios y casos de prueba.',
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
    description: 'La automatización Mobile/Web, el flujo agéntico de MetLife desde el objetivo funcional hasta la ejecución con evidencia, los smoke tests y la reparación validada cubren ejecución y aseguramiento sostenido.',
    status: 'Evidencia sólida',
    tone: 'strong',
    icon: Target,
  },
  {
    title: 'Liderar desde el conocimiento',
    description: 'La coordinación en AvanGrid, Argus, NextGen QA, QAI Engineering y el piloto AI Engineering muestran transferencia de criterio; seis participantes finalizaron este último con un agente propio.',
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
    description: 'El diagnóstico de conflictos, vulnerabilidades y reparaciones post-migración, junto con la arquitectura multiagéntica gobernada, muestra evaluación de riesgos, alternativas y tecnologías emergentes.',
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

const traceabilityGroups = [
  {
    id: 'lead',
    title: 'Lead Technical Software Quality',
    reference: 'Mapa de Talento GDNe · páginas 58-60',
    marker: 'Nivel funcional evidenciado',
    summary: 'El núcleo del rol está cubierto por evidencias de construcción, liderazgo técnico, asesoría y desarrollo de capacidades. La validación de categoría sigue siendo formal.',
    items: [
      {
        criterion: 'Responsabilizarse de definir, construir, implementar y probar prácticas, metodologías, herramientas y marcos de calidad.',
        evidence: [
          { label: 'ArgusPy y asesorías QA', to: '/innovacion' },
          { label: 'Pruebas y desarrollo agéntico en MetLife', to: '/metlife' },
          { label: 'Agente autónomo de automatización web', to: '/ia' },
        ],
        status: 'Evidencia sólida',
        tone: 'strong',
        reading: 'La evidencia muestra capacidades reutilizables y aplicadas en proyectos, no solo ejecución individual de casos.',
        next: 'Formalizar el ownership, las versiones adoptadas y los equipos que utilizan cada activo.',
      },
      {
        criterion: 'Liderar soluciones y arquitecturas de pruebas automatizadas, su alcance, ejecución, trazabilidad y uso responsable de IA.',
        evidence: [
          { label: 'AvanGrid · automatización Mobile', to: '/avangrid' },
          { label: 'MetLife · flujo desde el objetivo hasta la evidencia', to: '/metlife' },
          { label: 'Quality Engineering Agéntica', to: '/innovacion' },
        ],
        status: 'Evidencia sólida',
        tone: 'strong',
        reading: 'El piloto de MetLife documenta el ciclo completo: brief, contexto del framework, navegación real, ejecución, ajuste y evidencia revisable.',
        next: 'Añadir líneas base de tiempo, cobertura, estabilidad y mantenimiento para cuantificar la mejora.',
      },
      {
        criterion: 'Actuar como referente metodológico, transferir conocimiento e impulsar el aprendizaje y la adopción de nuevas tecnologías de prueba.',
        evidence: [
          { label: 'Studio QA · Argus, NextGen y QAI Engineering', to: '/studio-qa' },
          { label: 'Piloto AI Engineering · seis agentes', to: '/innovacion' },
          { label: 'Workshop AI Boost', to: '/ia' },
        ],
        status: 'Evidencia sólida',
        tone: 'strong',
        reading: 'Existe formación teórica y práctica, comunidad y una primera evidencia de adopción: seis participantes terminaron con un agente propio y aplican lo aprendido.',
        next: 'Mantener seguimiento de objetivos, feedback, autonomía y resultados posteriores de las personas formadas.',
      },
      {
        criterion: 'Asesorar a proyectos y BUs, sustentar propuestas técnicas y garantizar viabilidad, calidad y diferenciación de la solución.',
        evidence: [
          { label: 'Asesorías KOSIN, BHP y ProVida', to: '/innovacion' },
          { label: 'MetLife · migración y remediación', to: '/metlife' },
          { label: 'Arquitectura multiagéntica', to: '/ia' },
        ],
        status: 'Evidencia sólida',
        tone: 'strong',
        reading: 'Los casos publicados muestran diagnóstico, adaptación de frameworks y resolución de iniciativas de alta complejidad hasta obtener entregables verificables.',
        next: 'Registrar para cada POC el problema, riesgo de viabilidad, decisión técnica, alternativa descartada y resultado aceptado.',
      },
      {
        criterion: 'Gestionar estimaciones y avances de pruebas y evaluar la efectividad de la IA para aportar visibilidad al delivery.',
        evidence: [
          { label: 'AvanGrid · métricas de casos y recuperación', to: '/avangrid' },
          { label: 'MetLife · 142 horas y 52 actividades', to: '/metlife' },
          { label: 'Piloto AI Engineering · adopción inicial', to: '/innovacion' },
        ],
        status: 'Por consolidar',
        tone: 'partial',
        reading: 'Hay volumen, continuidad y resultados, pero no un cuadro común que conecte esfuerzo con ahorro, calidad, adopción y valor.',
        next: 'Definir una línea base y medir tiempo de ciclo, defectos evitados, reutilización, adopción y eficiencia.',
      },
    ],
  },
  {
    id: 'expert',
    title: 'Expert Technical Software Quality',
    reference: 'Mapa de Talento GDNe · páginas 61-64',
    marker: 'Horizonte en construcción',
    summary: 'Ya existen señales de referencia técnica, complejidad e influencia. El salto exige convertirlas en estrategia, métricas comparables y resultados transversales sostenidos.',
    items: [
      {
        criterion: 'Liderar la definición de prácticas y desarrollos de calidad complejos, alineados con la estrategia y sostenibles en el tiempo.',
        evidence: [
          { label: 'MetLife · arquitectura gobernada y migraciones', to: '/metlife' },
          { label: 'ArgusPy y Quality Engineering Agéntica', to: '/innovacion' },
          { label: 'Arquitectura de agentes y AI Boost', to: '/ia' },
        ],
        status: 'Evidencia emergente',
        tone: 'partial',
        reading: 'La complejidad técnica y la reutilización están demostradas; falta acreditar que estas prácticas operan como estándar transversal alineado con la estrategia.',
        next: 'Consolidar lineamientos comunes de QA e IA y documentar su adopción en varios equipos o unidades.',
      },
      {
        criterion: 'Alcanzar Assurance & Testing nivel 4 y Orientación a la calidad nivel 4 con visión integral de seguridad, rendimiento, escalabilidad y delivery.',
        evidence: [
          { label: 'AvanGrid · cobertura y regresión multiplataforma', to: '/avangrid' },
          { label: 'MetLife · validación, smoke tests y remediación', to: '/metlife' },
          { label: 'Asesorías QA · frameworks y seguridad', to: '/innovacion' },
        ],
        status: 'Nivel 3 evidenciado',
        tone: 'partial',
        reading: 'La evidencia actual cubre con solidez el nivel requerido para Lead; todavía no prueba una visión integral nivel 4 aplicada y sostenida en el conjunto del delivery.',
        next: 'Acreditar estrategia integral de pruebas, criterios de salida, riesgos no funcionales y resultados comparables entre proyectos.',
      },
      {
        criterion: 'Demostrar Impacto nivel 3 como referente experto ante clientes, stakeholders y comunidades técnicas.',
        evidence: [
          { label: 'Entrevistas y comunidad NextGen QA', to: '/studio-qa' },
          { label: 'Greenhouse y asesorías a proyectos', to: '/innovacion' },
          { label: 'Referente IA, IA Sessions y AI Boost', to: '/ia' },
        ],
        status: 'En construcción',
        tone: 'partial',
        reading: 'Hay visibilidad local y regional, exposición y recurrencia como referente; falta evidenciar decisiones transversales modificadas y resultados sostenidos por esa influencia.',
        next: 'Registrar decisiones, personas o equipos alineados, resistencias resueltas, adopción conseguida y resultado posterior.',
      },
      {
        criterion: 'Definir y validar métricas, planificar alcance y backlog, medir la efectividad de IA y supervisar la viabilidad del delivery.',
        evidence: [
          { label: 'AvanGrid · producción y recuperación Mobile', to: '/avangrid' },
          { label: 'MetLife · historial operativo y caso completado', to: '/metlife' },
          { label: 'Programas formativos y adopción inicial', to: '/innovacion' },
        ],
        status: 'Brecha principal',
        tone: 'gap',
        reading: 'El dashboard conserva actividad y algunos resultados, pero aún no demuestra control estratégico de presupuesto, estimaciones, SLA, productividad ni efectividad de IA.',
        next: 'Crear un cuadro de mando con baseline, objetivo, resultado, ahorro, calidad, adopción, owner y periodo de observación.',
      },
      {
        criterion: 'Diseñar y liderar desarrollo avanzado de personas, especialización, autonomía y transferencia de conocimiento.',
        evidence: [
          { label: 'QAI Engineering · programa de 32 horas', to: '/studio-qa' },
          { label: 'Piloto AI Engineering · seis participantes', to: '/innovacion' },
          { label: 'Argus y NextGen QA', to: '/studio-qa' },
          { label: 'Workshop AI Boost', to: '/ia' },
        ],
        status: 'Evidencia emergente',
        tone: 'partial',
        reading: 'La formación ya produce entregables y adopción inicial. Para Expert se necesita probar evolución sostenida, especialización y autonomía de las personas acompañadas.',
        next: 'Definir objetivos por cohorte, evaluar antes y después, observar aplicación en proyecto y registrar feedback de responsables.',
      },
    ],
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
  {
    date: '8 sep 2026',
    title: 'Primer bloque de migraciones a GitHub completado',
    description: 'Migración desde Azure DevOps a GitHub con reparación y sanitización de repositorios, migración de repositorios .NET y bases de datos a Oracle 19c mediante agentes especializados.',
  },
  {
    date: '9 sep 2026',
    title: 'Primera sesión de NextGen QA Network',
    description: 'Espacio de comunidad para compartir experiencias y herramientas de QA funcional y automatizado desarrolladas con IA y agentes.',
  },
  {
    date: '25 sep 2026',
    title: 'Inicio del programa piloto QAI Engineering',
    description: 'Programa de 32 horas con contenido teórico y tareas técnicas para evolucionar perfiles QA hacia QA Engineering.',
  },
  {
    date: '29 sep 2026',
    title: 'Workshop AI Boost para QA',
    description: 'Exposición sobre arquitectura agéntica aplicada a escenarios y casos de prueba para ampliar capacidades de IA en QA.',
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
    title: 'Consolidar AI Engineering dentro de Software Quality',
    description: 'Documentar cómo agentes, pipelines, migraciones y remediación fortalecen la arquitectura de calidad, la trazabilidad y la eficiencia del delivery.',
    icon: Code2,
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
  { label: 'Actividad MetLife', value: '142 h', detail: '52 tareas en 36 días.' },
  { label: 'Primer bloque de migraciones', value: 'Completado', detail: 'Azure DevOps a GitHub, repositorios .NET y Oracle 19c.' },
  { label: 'Programa Next-Gen QA', value: '40 h', detail: 'Formación teórico-práctica diseñada.' },
  { label: 'Programa QAI Engineering', value: '32 h', detail: 'Formación continua con tareas técnicas.' },
  { label: 'Piloto AI Engineering', value: '6 agentes', detail: 'Un agente creado por cada participante.' },
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
    description: 'Escalar estándares de QA e IA a varios equipos, acreditar desarrollo de personas y consolidar AI Engineering como capacidad de Software Quality.',
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
  { id: 'traceability', label: 'Trazabilidad Lead → Expert', icon: ListChecks },
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

function TraceabilityGroup({ group }) {
  return (
    <section className={`talent-traceability-group talent-traceability-group--${group.id}`} aria-labelledby={`traceability-${group.id}-title`}>
      <header className="talent-traceability-group__header">
        <div>
          <span>{group.reference}</span>
          <h3 id={`traceability-${group.id}-title`}>{group.title}</h3>
          <p>{group.summary}</p>
        </div>
        <strong>{group.marker}</strong>
      </header>

      <div className="talent-traceability-columns" aria-hidden="true">
        <span>Criterio oficial sintetizado</span>
        <span>Evidencia publicada</span>
        <span>Lectura y próximo paso</span>
      </div>

      <ol className="talent-traceability-list">
        {group.items.map((item) => (
          <li key={item.criterion}>
            <div className="talent-traceability-criterion">
              <span>Criterio</span>
              <h4>{item.criterion}</h4>
            </div>

            <div className="talent-traceability-evidence">
              <span>Hechos publicados</span>
              <div>
                {item.evidence.map((source) => (
                  <Link key={`${source.to}-${source.label}`} to={source.to}>
                    {source.label}
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="talent-traceability-assessment">
              <span className={`talent-traceability-status talent-traceability-status--${item.tone}`}>{item.status}</span>
              <p><strong>Lectura:</strong> {item.reading}</p>
              <p><strong>Para cerrar:</strong> {item.next}</p>
            </div>
          </li>
        ))}
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
          <h2 id="talent-map-title">Mi posicionamiento como líder técnico de Software Quality</h2>
          <p>Reanálisis completo · Lead Technical Software Quality · evidencia revisada al 17 de noviembre de 2026</p>
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
                El alcance actual ya no se limita a ejecutar automatización. Jimmy define prácticas y arquitecturas de pruebas, construye frameworks, resuelve POC complejas, integra IA e integración continua en el delivery, asesora a distintos proyectos y desarrolla capacidades en otras personas. Esa combinación sitúa su encaje principal en Lead Technical Software Quality; las tareas de AI Engineering y modernización amplían la profundidad técnica del rol sin desplazar su eje de calidad.
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
                <p>La evidencia cubre de manera consistente el núcleo de Lead: definir, construir, implementar y probar prácticas de calidad, liderar desde el conocimiento y desarrollar capacidades en otras personas. MetLife, ArgusPy y Quality Engineering Agéntica refuerzan el posicionamiento como referente técnico de Software Quality con capacidades de AI Engineering. Expert todavía no está consolidado porque exige Assurance & Testing y Orientación a la calidad en nivel 4, Impacto en nivel 3 y una referencia estratégica transversal demostrada con métricas y continuidad.</p>
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

        {activeTab === 'traceability' && (
          <section
            id="talent-panel-traceability"
            role="tabpanel"
            aria-labelledby="talent-tab-traceability"
            className="talent-traceability"
          >
            <header className="talent-traceability__intro">
              <div className="talent-section-title">
                <ListChecks size={19} aria-hidden="true" />
                <h3>Trazabilidad entre el mapa oficial y mi evidencia</h3>
              </div>
              <p>Cada fila separa el criterio sintetizado del Mapa de Talento, los hechos navegables dentro del dashboard y la interpretación profesional. Los estados describen la solidez de la evidencia; no sustituyen la evaluación formal.</p>

              <dl aria-label="Resumen de la trazabilidad profesional">
                <div>
                  <dt>Lead</dt>
                  <dd>Núcleo cubierto</dd>
                  <p>Construcción, automatización, asesoría y desarrollo de personas.</p>
                </div>
                <div>
                  <dt>Expert</dt>
                  <dd>En construcción</dd>
                  <p>Hay complejidad y referencia; falta consolidar estrategia e impacto transversal.</p>
                </div>
                <div>
                  <dt>Brecha principal</dt>
                  <dd>Métricas comparables</dd>
                  <p>Adopción, eficiencia, calidad, ahorro y resultados sostenidos.</p>
                </div>
              </dl>
            </header>

            {traceabilityGroups.map((group) => (
              <TraceabilityGroup key={group.id} group={group} />
            ))}

            <aside className="talent-traceability__boundary">
              <ShieldCheck size={19} aria-hidden="true" />
              <p><strong>Límite de la evidencia:</strong> el dashboard acredita POC, frameworks, automatizaciones, formaciones y entregas completadas, pero no documenta qué iniciativas habían sido descartadas previamente ni por quién. Para usar ese contexto en una solicitud de promoción, conviene añadir un registro verificable del problema, la inviabilidad percibida, la decisión adoptada y el resultado obtenido.</p>
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
                subtitle="Actividad actual e histórica revisada al 17 de noviembre de 2026"
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
