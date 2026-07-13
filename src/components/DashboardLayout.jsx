import React from 'react';
import { LayoutDashboard, CheckSquare, Settings, Activity } from 'lucide-react';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex w-full min-h-screen">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="flex items-center gap-4 mb-6 px-4">
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'var(--neon-purple)', color: '#fff' }}>
            <Activity size={24} />
          </div>
          <div>
            <h2 className="font-bold text-xl">QA Nexus</h2>
            <p className="text-sm text-cyan">Personal AI Agent</p>
          </div>
        </div>
        
        <nav className="flex-col gap-2 mt-6">
          <a href="#" className="nav-item active">
            <LayoutDashboard size={20} />
            <span>Resumen Semanal</span>
          </a>
          <a href="#" className="nav-item">
            <CheckSquare size={20} />
            <span>Casos de Prueba</span>
          </a>
          <a href="#" className="nav-item">
            <Settings size={20} />
            <span>Configuración</span>
          </a>
        </nav>
        
        <div className="mt-auto glass-card p-4">
          <p className="text-sm font-semibold text-cyan mb-2">Estado del Sistema</p>
          <div className="flex items-center gap-2 text-sm text-muted">
            <span className="w-2 h-2 rounded-full" style={{ background: 'var(--neon-cyan)', boxShadow: '0 0 8px var(--neon-cyan)' }}></span>
            Todos los servicios OK
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content w-full">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Bienvenido de vuelta, Ingeniero.</h1>
            <p className="text-muted text-sm mt-1">Aquí está el resumen de tus actividades de QA y automatización.</p>
          </div>
          <div className="flex gap-4">
            <div className="glass-card px-4 py-2 flex items-center gap-2">
              <span className="text-sm font-semibold">Semana 28, 2026</span>
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
