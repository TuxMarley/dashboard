import React, { useState } from 'react';
import WeeklyProgress from '../components/WeeklyProgress';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, RadialBarChart, RadialBar } from 'recharts';
import { FileSpreadsheet, Layers, UserCheck, CalendarDays, Smartphone, Settings, Percent, CheckCircle, HelpCircle } from 'lucide-react';

const juneTimelineData = [
  { day: '15 Jun', Jimmy: 1, Nicolas: 0, total: 1 },
  { day: '19 Jun', Jimmy: 5, Nicolas: 0, total: 5 },
  { day: '22 Jun', Jimmy: 1, Nicolas: 0, total: 1 },
  { day: '23 Jun', Jimmy: 4, Nicolas: 0, total: 4 },
  { day: '24 Jun', Jimmy: 4, Nicolas: 0, total: 4 },
  { day: '26 Jun', Jimmy: 11, Nicolas: 0, total: 11 },
  { day: '29 Jun', Jimmy: 4, Nicolas: 0, total: 4 },
  { day: '30 Jun', Jimmy: 9, Nicolas: 4, total: 13 },
];

const categoryData = [
  { name: 'Autopay (Pagos)', value: 24 },
  { name: 'Outages (Cortes)', value: 20 },
];

const mobileStats = [
  { module: 'Payments', androidAuto: 17, androidNo: 7, androidPen: 0, iosAuto: 20, iosNo: 4, iosPen: 0 },
  { module: 'Payment Flow', androidAuto: 0, androidNo: 4, androidPen: 47, iosAuto: 30, iosNo: 21, iosPen: 0 },
  { module: 'Login', androidAuto: 0, androidNo: 8, androidPen: 0, iosAuto: 0, iosNo: 8, iosPen: 0 },
  { module: 'Outages', androidAuto: 0, androidNo: 0, androidPen: 60, iosAuto: 43, iosNo: 18, iosPen: 0 },
  { module: 'Autopay', androidAuto: 0, androidNo: 0, androidPen: 24, iosAuto: 24, iosNo: 0, iosPen: 0 },
];

// Data formatted for chart comparison (Android vs iOS Automated TCs)
const mobileChartData = [
  { name: 'Payments', Android: 17, iOS: 20 },
  { name: 'Payment Flow', Android: 0, iOS: 30 },
  { name: 'Login', Android: 0, iOS: 0 },
  { name: 'Outages', Android: 0, iOS: 43 },
  { name: 'Autopay', Android: 0, iOS: 24 },
];

const COLORS = ['var(--brand-blue)', 'var(--brand-gold)'];

const AvanGrid = () => {
  const [activeTab, setActiveTab] = useState('weekly'); // 'weekly', 'june', or 'mobile'

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold font-serif">AvanGrid (Antigravity)</h2>
          <p className="text-muted text-sm mt-1">Automatización mobile, integración continua y ejecución de pruebas.</p>
        </div>
        
        {/* Toggle buttons (3 choices) */}
        <div className="flex p-1 rounded-full" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)' }}>
          <button 
            className="px-4 py-2 text-sm font-semibold transition-all duration-300"
            style={{ 
              borderRadius: 'var(--border-radius-pill)',
              background: activeTab === 'weekly' ? 'var(--brand-blue)' : 'transparent',
              color: activeTab === 'weekly' ? '#fff' : 'var(--text-muted)'
            }}
            onClick={() => setActiveTab('weekly')}
          >
            Vista Semanal
          </button>
          <button 
            className="px-4 py-2 text-sm font-semibold transition-all duration-300"
            style={{ 
              borderRadius: 'var(--border-radius-pill)',
              background: activeTab === 'june' ? 'var(--brand-blue)' : 'transparent',
              color: activeTab === 'june' ? '#fff' : 'var(--text-muted)'
            }}
            onClick={() => setActiveTab('june')}
          >
            Reporte Junio (Real)
          </button>
          <button 
            className="px-4 py-2 text-sm font-semibold transition-all duration-300"
            style={{ 
              borderRadius: 'var(--border-radius-pill)',
              background: activeTab === 'mobile' ? 'var(--brand-blue)' : 'transparent',
              color: activeTab === 'mobile' ? '#fff' : 'var(--text-muted)'
            }}
            onClick={() => setActiveTab('mobile')}
          >
            Automatización Mobile
          </button>
        </div>
      </div>

      {activeTab === 'weekly' && <WeeklyProgress />}

      {activeTab === 'june' && (
        <div className="w-full flex-col gap-6">
          {/* June Widgets */}
          <div className="grid grid-cols-4 mb-6">
            <div className="glass-card">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm text-muted">Total Creados (Junio)</p>
                  <h3 className="text-2xl font-bold">44</h3>
                </div>
                <div className="p-2 rounded-full" style={{ background: 'rgba(0, 114, 188, 0.1)' }}>
                  <FileSpreadsheet className="text-cyan" size={24} />
                </div>
              </div>
              <p className="text-sm text-cyan font-semibold">100% de cobertura QA</p>
            </div>

            <div className="glass-card">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm text-muted">Creados por Jimmy</p>
                  <h3 className="text-2xl font-bold">40</h3>
                </div>
                <div className="p-2 rounded-full" style={{ background: 'rgba(230, 182, 0, 0.1)' }}>
                  <UserCheck className="text-purple" size={24} />
                </div>
              </div>
              <p className="text-sm text-muted">90.9% del total mensual</p>
            </div>

            <div className="glass-card">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm text-muted">Creados por Nicolas</p>
                  <h3 className="text-2xl font-bold">4</h3>
                </div>
                <div className="p-2 rounded-full" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                  <UserCheck size={24} />
                </div>
              </div>
              <p className="text-sm text-muted">9.1% del total mensual</p>
            </div>

            <div className="glass-card">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm text-muted">Categoría Líder</p>
                  <h3 className="text-2xl font-bold">Autopay</h3>
                </div>
                <div className="p-2 rounded-full" style={{ background: 'rgba(0, 114, 188, 0.1)' }}>
                  <Layers className="text-cyan" size={24} />
                </div>
              </div>
              <p className="text-sm text-cyan">24 Casos Creados</p>
            </div>
          </div>

          {/* June Charts */}
          <div className="grid grid-cols-2">
            <div className="glass-card">
              <h3 className="font-semibold text-xl mb-4">Línea de Tiempo de Creación</h3>
              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                  <BarChart data={juneTimelineData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <XAxis dataKey="day" stroke="var(--text-muted)" />
                    <YAxis stroke="var(--text-muted)" />
                    <Tooltip contentStyle={{ backgroundColor: 'var(--bg-dark)', border: '1px solid var(--glass-border)', borderRadius: '8px' }} />
                    <Legend />
                    <Bar dataKey="Jimmy" stackId="a" fill="var(--brand-blue)" />
                    <Bar dataKey="Nicolas" stackId="a" fill="var(--brand-gold)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="glass-card flex-col">
              <h3 className="font-semibold text-xl mb-4">Casos por Categoría</h3>
              <div className="flex items-center justify-between h-full" style={{ minHeight: '260px' }}>
                <div style={{ width: '50%', height: 240 }}>
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie data={categoryData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: 'var(--bg-dark)', border: '1px solid var(--glass-border)', borderRadius: '8px' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex-col gap-4" style={{ width: '45%' }}>
                  {categoryData.map((entry, index) => (
                    <div key={index} className="flex-col p-3 rounded-xl mb-2" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)' }}>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3.5 h-3.5 rounded-full" style={{ background: COLORS[index] }}></div>
                        <span className="font-bold text-sm text-white">{entry.name}</span>
                      </div>
                      <p className="text-xl font-bold ml-5">{entry.value} <span className="text-xs text-muted font-normal">casos</span></p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'mobile' && (
        <div className="w-full flex-col gap-6">
          
          {/* Mobile KPI Cards */}
          <div className="grid grid-cols-4 mb-6">
            <div className="glass-card">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm text-muted">Progreso Global</p>
                  <h3 className="text-2xl font-bold">50.6%</h3>
                </div>
                <div className="p-2 rounded-full" style={{ background: 'rgba(0, 114, 188, 0.1)' }}>
                  <Percent className="text-cyan" size={24} />
                </div>
              </div>
              <p className="text-sm text-cyan font-semibold">134 / 265 Casos Auto.</p>
            </div>

            <div className="glass-card">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm text-muted">Casos Automatizados</p>
                  <h3 className="text-2xl font-bold text-white">134</h3>
                </div>
                <div className="p-2 rounded-full" style={{ background: 'rgba(74, 222, 128, 0.1)' }}>
                  <CheckCircle style={{ color: '#4ade80' }} size={24} />
                </div>
              </div>
              <p className="text-sm text-muted">En validación de QA</p>
            </div>

            <div className="glass-card">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm text-muted">Casos No Automáticos</p>
                  <h3 className="text-2xl font-bold">70</h3>
                </div>
                <div className="p-2 rounded-full" style={{ background: 'rgba(230, 182, 0, 0.1)' }}>
                  <HelpCircle className="text-purple" size={24} />
                </div>
              </div>
              <p className="text-sm text-muted">Excluidos de automatización</p>
            </div>

            <div className="glass-card">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm text-muted">Total General TCs</p>
                  <h3 className="text-2xl font-bold">335</h3>
                </div>
                <div className="p-2 rounded-full" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                  <Smartphone size={24} />
                </div>
              </div>
              <p className="text-sm text-muted">Base de pruebas total</p>
            </div>
          </div>

          {/* Table and Chart */}
          <div className="grid grid-cols-2">
            
            {/* Chart: Automated TCs by platform */}
            <div className="glass-card">
              <h3 className="font-semibold text-xl mb-4">Casos Automatizados por Módulo</h3>
              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                  <BarChart data={mobileChartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <XAxis dataKey="name" stroke="var(--text-muted)" />
                    <YAxis stroke="var(--text-muted)" />
                    <Tooltip contentStyle={{ backgroundColor: 'var(--bg-dark)', border: '1px solid var(--glass-border)', borderRadius: '8px' }} />
                    <Legend />
                    <Bar dataKey="Android" fill="var(--brand-gold)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="iOS" fill="var(--brand-blue)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Table: Detailed breakdown */}
            <div className="glass-card flex-col" style={{ overflow: 'hidden' }}>
              <h3 className="font-semibold text-xl mb-4">Desglose Detallado de Módulos (CMP)</h3>
              <div style={{ overflowX: 'auto', flex: 1 }}>
                <table className="w-full text-sm" style={{ borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--text-muted)' }}>
                      <th className="py-2">Módulo</th>
                      <th className="py-2">Plataforma</th>
                      <th className="py-2 text-center">Total</th>
                      <th className="py-2 text-center text-purple">No Auto</th>
                      <th className="py-2 text-center text-cyan">Auto</th>
                      <th className="py-2 text-center">Pendiente</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mobileStats.map((item, idx) => (
                      <React.Fragment key={idx}>
                        {/* Android row */}
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                          <td className="py-2 font-semibold text-white" rowSpan={2}>{item.module}</td>
                          <td className="py-2 text-muted">Android</td>
                          <td className="py-2 text-center">{item.androidAuto + item.androidNo + item.androidPen}</td>
                          <td className="py-2 text-center">{item.androidNo}</td>
                          <td className="py-2 text-center text-cyan">{item.androidAuto}</td>
                          <td className="py-2 text-center">{item.androidPen}</td>
                        </tr>
                        {/* iOS row */}
                        <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                          <td className="py-2 text-muted">iOS</td>
                          <td className="py-2 text-center">{item.iosAuto + item.iosNo + item.iosPen}</td>
                          <td className="py-2 text-center">{item.iosNo}</td>
                          <td className="py-2 text-center text-cyan">{item.iosAuto}</td>
                          <td className="py-2 text-center">{item.iosPen}</td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </div>
      )}
    </div>
  );
};

export default AvanGrid;
