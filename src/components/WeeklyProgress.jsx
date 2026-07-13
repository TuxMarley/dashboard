import React from 'react';
import { PlayCircle, FileText, Server, Cpu } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Lun', ejecutados: 40, ia: 24 },
  { name: 'Mar', ejecutados: 30, ia: 13 },
  { name: 'Mie', ejecutados: 20, ia: 98 },
  { name: 'Jue', ejecutados: 27, ia: 39 },
  { name: 'Vie', ejecutados: 18, ia: 48 },
  { name: 'Sab', ejecutados: 23, ia: 38 },
  { name: 'Dom', ejecutados: 34, ia: 43 },
];

const WeeklyProgress = () => {
  return (
    <div className="w-full flex-col gap-6">
      
      {/* Top Widgets */}
      <div className="grid grid-cols-4 mb-6">
        <div className="glass-card">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-sm text-muted">Casos Creados</p>
              <h3 className="text-2xl font-bold">124</h3>
            </div>
            <div className="p-2 rounded-full" style={{ background: 'rgba(0, 114, 188, 0.1)' }}>
              <FileText className="text-cyan" size={24} />
            </div>
          </div>
          <p className="text-sm" style={{ color: '#4ade80' }}>+12% vs semana ant.</p>
        </div>
        
        <div className="glass-card">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-sm text-muted">Ejecuciones</p>
              <h3 className="text-2xl font-bold">1,430</h3>
            </div>
            <div className="p-2 rounded-full" style={{ background: 'rgba(230, 182, 0, 0.1)' }}>
              <PlayCircle className="text-purple" size={24} />
            </div>
          </div>
          <p className="text-sm" style={{ color: '#4ade80' }}>+8% vs semana ant.</p>
        </div>

        <div className="glass-card">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-sm text-muted">Entornos Activos</p>
              <h3 className="text-2xl font-bold">3</h3>
            </div>
            <div className="p-2 rounded-full" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
              <Server size={24} />
            </div>
          </div>
          <p className="text-sm text-muted">QA, Staging, Prod</p>
        </div>

        <div className="glass-card">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-sm text-muted">Tareas de IA</p>
              <h3 className="text-2xl font-bold">85</h3>
            </div>
            <div className="p-2 rounded-full" style={{ background: 'rgba(0, 114, 188, 0.1)' }}>
              <Cpu className="text-cyan" size={24} />
            </div>
          </div>
          <p className="text-sm text-cyan">Automatizaciones running</p>
        </div>
      </div>

      {/* Main Chart */}
      <div className="grid grid-cols-2">
        <div className="glass-card h-full">
          <h3 className="font-semibold text-xl mb-4">Actividad de Ejecución vs IA</h3>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorEjecutados" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--brand-gold)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--brand-gold)" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorIA" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--brand-blue)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--brand-blue)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="var(--text-muted)" />
                <YAxis stroke="var(--text-muted)" />
                <Tooltip contentStyle={{ backgroundColor: 'var(--bg-dark)', border: '1px solid var(--glass-border)', borderRadius: '8px' }} />
                <Area type="monotone" dataKey="ejecutados" stroke="var(--brand-gold)" fillOpacity={1} fill="url(#colorEjecutados)" />
                <Area type="monotone" dataKey="ia" stroke="var(--brand-blue)" fillOpacity={1} fill="url(#colorIA)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card flex-col gap-4">
          <h3 className="font-semibold text-xl mb-4">Últimas Actualizaciones</h3>
          <div className="flex-col gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-start gap-4 p-3 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                <div className="w-2 h-2 mt-2 rounded-full" style={{ background: i % 2 === 0 ? 'var(--brand-blue)' : 'var(--brand-gold)', boxShadow: `0 0 8px ${i % 2 === 0 ? 'var(--brand-blue)' : 'var(--brand-gold)'}` }}></div>
                <div>
                  <h4 className="font-semibold">{i % 2 === 0 ? 'Script de IA actualizado' : 'Ejecución de Regresión Completada'}</h4>
                  <p className="text-sm text-muted">Hace {i * 2} horas en Entorno QA</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default WeeklyProgress;
