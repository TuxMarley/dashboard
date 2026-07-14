import React from 'react';
import { PlayCircle, FileText, Smartphone, Laptop } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Data representing executions this week by OPCO and Module
// BGC: 15 (Make a Payment iOS) + 7 (Login iOS) + 7 (Login Android) = 29 cases
// CNG: 15 (Make a Payment iOS) + 7 (Login iOS) + 7 (Login Android) = 29 cases
const executionData = [
  { name: 'BGC', 'Make a Payment': 15, 'Login (iOS/Android)': 14 },
  { name: 'CNG', 'Make a Payment': 15, 'Login (iOS/Android)': 14 },
];

const WeeklyProgress = () => {
  return (
    <div className="w-full flex-col gap-6">
      
      {/* Top Widgets */}
      <div className="grid grid-cols-4 mb-6">
        <div className="glass-card">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-sm text-muted">Casos Creados/Refact.</p>
              <h3 className="text-2xl font-bold">15</h3>
            </div>
            <div className="p-2 rounded-full" style={{ background: 'rgba(0, 114, 188, 0.1)' }}>
              <FileText className="text-cyan" size={24} />
            </div>
          </div>
          <p className="text-sm text-cyan font-semibold">Refactorización Módulo SCG</p>
        </div>
        
        <div className="glass-card">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-sm text-muted">Casos Ejecutados</p>
              <h3 className="text-2xl font-bold">58</h3>
            </div>
            <div className="p-2 rounded-full" style={{ background: 'rgba(230, 182, 0, 0.1)' }}>
              <PlayCircle className="text-purple" size={24} />
            </div>
          </div>
          <p className="text-sm text-purple font-semibold">6 Ciclos Completados</p>
        </div>

        <div className="glass-card">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-sm text-muted">OPCOs Activas</p>
              <h3 className="text-2xl font-bold">2</h3>
            </div>
            <div className="p-2 rounded-full" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
              <Laptop size={24} />
            </div>
          </div>
          <p className="text-sm text-muted">BGC y CNG</p>
        </div>

        <div className="glass-card">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-sm text-muted">Plataformas</p>
              <h3 className="text-2xl font-bold">2</h3>
            </div>
            <div className="p-2 rounded-full" style={{ background: 'rgba(0, 114, 188, 0.1)' }}>
              <Smartphone className="text-cyan" size={24} />
            </div>
          </div>
          <p className="text-sm text-cyan">iOS y Android</p>
        </div>
      </div>

      {/* Main Chart and Summary info */}
      <div className="grid grid-cols-2 mb-6">
        <div className="glass-card h-full">
          <h3 className="font-semibold text-xl mb-4 font-serif">Ejecuciones por OPCO y Módulo</h3>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={executionData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="name" stroke="var(--text-muted)" />
                <YAxis stroke="var(--text-muted)" />
                <Tooltip contentStyle={{ backgroundColor: 'var(--bg-dark)', border: '1px solid var(--glass-border)', borderRadius: '8px' }} />
                <Legend />
                <Bar dataKey="Make a Payment" fill="var(--brand-blue)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Login (iOS/Android)" fill="var(--brand-gold)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card flex-col gap-4">
          <h3 className="font-semibold text-xl mb-4 font-serif">Detalle de Ciclos Ejecutados</h3>
          <div className="flex-col gap-3">
            <div className="p-3 rounded-2xl" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--glass-border)' }}>
              <h4 className="font-bold text-white mb-2">iOS (4 Ciclos)</h4>
              <ul className="text-sm text-muted flex-col gap-1 pl-4">
                <li>Make a Payment Flow - BGC (15 casos)</li>
                <li>Make a Payment Flow - CNG (15 casos)</li>
                <li>Login - BGC (7 casos)</li>
                <li>Login - CNG (7 casos)</li>
              </ul>
            </div>
            
            <div className="p-3 rounded-2xl" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--glass-border)' }}>
              <h4 className="font-bold text-white mb-2">Android (2 Ciclos)</h4>
              <ul className="text-sm text-muted flex-col gap-1 pl-4">
                <li>Login - BGC (7 casos)</li>
                <li>Login - CNG (7 casos)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card border-l-4 border-l-cyan bg-[rgba(0,114,188,0.05)]" style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-[rgba(0,114,188,0.15)] flex items-center justify-center">
              <Laptop className="text-cyan animate-pulse" size={24} />
            </div>
            <div className="flex-col">
              <span className="text-[10px] font-bold text-cyan uppercase tracking-wider">Hito de Integración (14/07)</span>
              <h3 className="text-lg font-bold text-white" style={{ margin: 0 }}>Integración Completa con Jira/Zephyr</h3>
            </div>
          </div>
          <p className="text-sm text-[rgba(255,255,255,0.85)] leading-relaxed" style={{ margin: 0 }}>
            Se completó con éxito la integración del ciclo de automatización de pruebas mobile con <strong className="text-cyan">Zephyr</strong>. 
            A partir de ahora, cada ejecución del pipeline crea automáticamente el ciclo en la plataforma, registra el resultado de todos los casos de prueba y asocia evidencias capturadas por cada caso exitoso (Passed). 
            Con este avance, garantizamos una <strong className="text-white">trazabilidad del 100%</strong> sin intervención manual.
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
