import React from 'react';
import { CheckCircle2, FileText, Smartphone, Laptop } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Casos migrados y automatizados esta semana para la OPCO SCG.
const executionData = [
  { name: 'SCG', 'Make a Payment Flow': 15, Login: 7 },
];

const WeeklyProgress = () => {
  return (
    <div className="w-full flex-col gap-6">
      
      {/* Top Widgets */}
      <div className="grid grid-cols-4 mb-6">
        <div className="glass-card">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-sm text-muted">Casos Migrados y Auto.</p>
              <h3 className="text-2xl font-bold">22</h3>
            </div>
            <div className="p-2 rounded-full" style={{ background: 'rgba(0, 114, 188, 0.1)' }}>
              <FileText className="text-cyan" size={24} />
            </div>
          </div>
          <p className="text-sm text-cyan font-semibold">OPCO SCG</p>
        </div>
        
        <div className="glass-card">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-sm text-muted">Make a Payment Flow</p>
              <h3 className="text-2xl font-bold">15</h3>
            </div>
            <div className="p-2 rounded-full" style={{ background: 'rgba(230, 182, 0, 0.1)' }}>
              <FileText className="text-purple" size={24} />
            </div>
          </div>
          <p className="text-sm text-purple font-semibold">Casos automatizados</p>
        </div>

        <div className="glass-card">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-sm text-muted">Login</p>
              <h3 className="text-2xl font-bold">7</h3>
            </div>
            <div className="p-2 rounded-full" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
              <Laptop size={24} />
            </div>
          </div>
          <p className="text-sm text-muted">Casos automatizados</p>
        </div>

        <div className="glass-card">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-sm text-muted">OPCO Activa</p>
              <h3 className="text-2xl font-bold">1</h3>
            </div>
            <div className="p-2 rounded-full" style={{ background: 'rgba(0, 114, 188, 0.1)' }}>
              <Smartphone className="text-cyan" size={24} />
            </div>
          </div>
          <p className="text-sm text-cyan">SCG</p>
        </div>
      </div>

      {/* Main Chart and Summary info */}
      <div className="grid grid-cols-2 mb-6">
        <div className="glass-card h-full">
          <h3 className="font-semibold text-xl mb-4 font-serif">Migración y Automatización por Módulo</h3>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={executionData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="name" stroke="var(--text-muted)" />
                <YAxis stroke="var(--text-muted)" />
                <Tooltip contentStyle={{ backgroundColor: 'var(--bg-dark)', border: '1px solid var(--glass-border)', borderRadius: '8px' }} />
                <Legend />
                <Bar dataKey="Make a Payment Flow" fill="var(--brand-blue)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Login" fill="var(--brand-gold)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card flex-col gap-4">
          <h3 className="font-semibold text-xl mb-4 font-serif">Detalle de la Tarea Semanal</h3>
          <div className="flex-col gap-3">
            <div className="p-3 rounded-2xl" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--glass-border)' }}>
              <h4 className="font-bold text-white mb-2">Migración y Automatización — SCG</h4>
              <ul className="text-sm text-muted flex-col gap-1 pl-4">
                <li>Make a Payment Flow (15 casos)</li>
                <li>Login (7 casos)</li>
                <li>Total: 22 casos migrados y automatizados</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card border-l-4 border-l-cyan bg-[rgba(0,114,188,0.05)]" style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-[rgba(0,114,188,0.15)] flex items-center justify-center">
              <CheckCircle2 className="text-cyan" size={24} />
            </div>
            <div className="flex-col">
              <span className="text-[10px] font-bold text-cyan uppercase tracking-wider">Hito semanal — SCG</span>
              <h3 className="text-lg font-bold text-white" style={{ margin: 0 }}>Migración y Automatización Completadas</h3>
            </div>
          </div>
          <p className="text-sm text-[rgba(255,255,255,0.85)] leading-relaxed" style={{ margin: 0 }}>
            Se completó la migración y automatización de <strong className="text-cyan">22 casos</strong> para la OPCO <strong className="text-white">SCG</strong>: 15 correspondientes a Make a Payment Flow y 7 a Login.
            Este avance deja los casos preparados para su ejecución y seguimiento dentro del ciclo de automatización.
          </p>
        </div>
        <div style={{ width: '150px', height: '150px', flexShrink: 0, borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: 'var(--glass-shadow)', margin: '0 auto' }}>
          <img src="/zephyr_code.png" alt="Evidencia Código Zephyr" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left top' }} />
        </div>
      </div>
      
    </div>
  );
};

export default WeeklyProgress;
