import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Smartphone, Presentation, Lightbulb, Bot, Activity, Award, Menu, X, ShieldCheck } from 'lucide-react';
import { getIsoWeek } from '../utils/dashboard';

const DashboardLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const week = getIsoWeek(new Date());
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="flex w-full min-h-screen">
      <button
        className="menu-toggle"
        type="button"
        aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
        aria-expanded={isMenuOpen}
        aria-controls="dashboard-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      {isMenuOpen && <button className="sidebar-backdrop" type="button" aria-label="Cerrar menú" onClick={closeMenu} />}

      <aside className={`sidebar ${isMenuOpen ? 'sidebar-open' : ''}`} aria-label="Navegación principal">
        <div className="brand-lockup">
          <div className="brand-mark" aria-hidden="true">
            <Activity size={22} strokeWidth={2.25} />
          </div>
          <div>
            <p className="brand-eyebrow">NTT DATA Agent</p>
            <h2>Radar de trabajo<br />de Jimmy</h2>
          </div>
        </div>

        <nav id="dashboard-navigation" className="dashboard-nav" aria-label="Secciones del dashboard">
          <NavLink to="/avangrid" onClick={closeMenu} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Smartphone size={20} />
            <span>AvanGrid</span>
          </NavLink>
          
          <NavLink to="/studio-qa" onClick={closeMenu} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Presentation size={20} />
            <span>Studio QA</span>
          </NavLink>
          
          <NavLink to="/innovacion" onClick={closeMenu} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Lightbulb size={20} />
            <span>Asesorías QA</span>
          </NavLink>
          
          <NavLink to="/ia" onClick={closeMenu} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Bot size={20} />
            <span>Inteligencia Artificial</span>
          </NavLink>

          <NavLink to="/metlife" onClick={closeMenu} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <ShieldCheck size={20} />
            <span>MetLife</span>
          </NavLink>
          
          <div className="my-2 border-t border-[rgba(255,255,255,0.05)]"></div>

          <NavLink to="/career" onClick={closeMenu} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Award size={20} />
            <span>Mapa de Talento</span>
          </NavLink>
        </nav>
        
        <div className="system-state-box">
          <p>Estado del sistema</p>
          <div>
            <span className="status-dot" aria-hidden="true"></span>
            Servicios operativos
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main id="main-content" className="main-content w-full">
        <header className="dashboard-header">
          <div>
            <p className="page-kicker">Panel operativo</p>
            <h1>Resumen de actividades</h1>
            <p>Monitoreo de tareas de QA, automatización e Inteligencia Artificial.</p>
          </div>
          <div className="week-indicator" aria-label={`Semana ${week} del año ${new Date().getFullYear()}`}>
            <span>Semana</span>
            <strong>{week}</strong>
            <small>{new Date().getFullYear()}</small>
          </div>
        </header>

        <div className="dashboard-body">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
