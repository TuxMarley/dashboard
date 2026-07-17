import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Smartphone, Presentation, Lightbulb, Bot, Activity, Award, Menu, X } from 'lucide-react';
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

      <aside className={`sidebar ${isMenuOpen ? 'sidebar-open' : ''}`}>
        <div className="flex items-center gap-4 mb-6 px-4">
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'var(--brand-blue)', color: '#fff' }}>
            <Activity size={24} />
          </div>
          <div>
            <h2 className="font-bold text-lg" style={{ letterSpacing: '-0.5px', lineHeight: '1.2' }}>Radar de trabajo de Jimmy</h2>
            <p className="text-sm text-cyan font-semibold">NTT DATA Agent</p>
          </div>
        </div>
        
        <nav id="dashboard-navigation" className="dashboard-nav">
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
          
          <div className="my-2 border-t border-[rgba(255,255,255,0.05)]"></div>

          <NavLink to="/career" onClick={closeMenu} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Award size={20} />
            <span>Mapa de Talento</span>
          </NavLink>
        </nav>
        
        <div className="mt-auto system-state-box p-4">
          <p className="text-sm font-semibold text-purple mb-2">Estado del Sistema</p>
          <div className="flex items-center gap-2 text-sm text-muted">
            <span className="w-2 h-2 rounded-full" style={{ background: 'var(--brand-blue)', boxShadow: '0 0 8px var(--brand-blue)' }}></span>
            Servicios Operativos
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content w-full">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Resumen de Actividades</h1>
            <p className="text-muted text-sm mt-1">Monitoreo de tareas de QA, automatización e Inteligencia Artificial.</p>
          </div>
          <div className="flex gap-4">
            <div className="pill-tag">
              <span>Semana {week}, {new Date().getFullYear()}</span>
            </div>
          </div>
        </header>
        
        <div className="w-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
