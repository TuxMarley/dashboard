import { Calendar, CheckCircle2, FileSearch, GitBranch, ShieldCheck, Users } from 'lucide-react'

const MetLife = () => (
  <div className="w-full flex-col gap-6">
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-2xl font-bold font-serif">MetLife</h2>
        <p className="text-muted text-sm mt-1">Tareas de agentes, reportes y preparación técnica para migración de repositorios.</p>
      </div>
      <div className="pill-tag metlife-tag">
        <ShieldCheck size={16} />
        <span>Seguridad y migración</span>
      </div>
    </div>

    <section className="glass-card flex-col gap-6" aria-labelledby="metlife-task-title">
      <div className="flex justify-between items-start gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm metlife-accent font-semibold mb-2">
            <ShieldCheck size={20} />
            <span>Agente de revisión de repositorios</span>
          </div>
          <h3 id="metlife-task-title" className="font-serif font-bold text-2xl text-white mb-2">Sanitización y preparación de repositorios para migración a GitHub</h3>
          <p className="text-sm text-muted leading-relaxed">
            Creación de un agente para analizar los reportes entregados por el equipo de desarrollo, revisar el repositorio y aplicar las remediaciones sugeridas antes de su migración desde AWS a GitHub.
          </p>
        </div>
        <div className="task-count" aria-label="Dos reportes analizados y saneados">2<br /><span>reportes</span></div>
      </div>

      <div className="metlife-details">
        <div className="metlife-detail">
          <Calendar size={18} className="metlife-accent" />
          <div><strong>22 de julio de 2026</strong><span>Fecha de ejecución</span></div>
        </div>
        <div className="metlife-detail">
          <FileSearch size={18} className="metlife-accent" />
          <div><strong>2 reportes analizados y saneados</strong><span>Revisión de hallazgos y acciones</span></div>
        </div>
        <div className="metlife-detail">
          <GitBranch size={18} className="metlife-accent" />
          <div><strong>Preparado para migración</strong><span>Sanitización previa a subida a GitHub</span></div>
        </div>
      </div>

      <div className="metlife-grid">
        <div className="metlife-panel">
          <h4>Flujo ejecutado por el agente</h4>
          <ul>
            <li><CheckCircle2 size={16} /> Analiza el reporte técnico entregado por el equipo Dev.</li>
            <li><CheckCircle2 size={16} /> Revisa el repositorio y contrasta los hallazgos reportados.</li>
            <li><CheckCircle2 size={16} /> Aplica las correcciones sugeridas para limpieza y sanitización.</li>
            <li><CheckCircle2 size={16} /> Valida el estado resultante y prepara el repositorio para su migración a GitHub.</li>
          </ul>
        </div>
        <div className="metlife-panel">
          <h4><Users size={18} /> Terminología de la reunión</h4>
          <p>“Limpieza y sanitización de repositorios para migración”.</p>
          <p className="text-muted text-sm">La migración y el push a GitHub se realizan después de completar las acciones de saneamiento y las validaciones correspondientes.</p>
        </div>
      </div>

      <figure className="metlife-evidence">
        <img src="/metlife_repository_sanitation_report.png" alt="Reporte de revisión de un repositorio MetLife con hallazgos y acciones de sanitización" />
        <figcaption>Evidencia: reporte de revisión y sanitización de repositorio.</figcaption>
      </figure>
    </section>
  </div>
)

export default MetLife
