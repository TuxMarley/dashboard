import React, { useState, useEffect } from 'react';
import WeeklyProgress from '../components/WeeklyProgress';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { FileSpreadsheet, Layers, UserCheck, Smartphone, Percent, CheckCircle, HelpCircle } from 'lucide-react';
import { normalizeTasks } from '../utils/dashboard';

const juneTimelineData = [
  { day: '15 Jun', Jimmy: 1, Nicolas: 0, total: 1 },
  { day: '18 Jun', Jimmy: 0, Nicolas: 11, total: 11 },
  { day: '19 Jun', Jimmy: 5, Nicolas: 4, total: 9 },
  { day: '22 Jun', Jimmy: 1, Nicolas: 8, total: 9 },
  { day: '23 Jun', Jimmy: 4, Nicolas: 8, total: 12 },
  { day: '24 Jun', Jimmy: 4, Nicolas: 1, total: 5 },
  { day: '26 Jun', Jimmy: 11, Nicolas: 0, total: 11 },
  { day: '29 Jun', Jimmy: 4, Nicolas: 0, total: 4 },
  { day: '30 Jun', Jimmy: 9, Nicolas: 4, total: 13 },
];

const categoryData = [
  { name: 'Make a Payment Flow', value: 28 },
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

const mobileChartData = [
  { name: 'Payments', Android: 17, iOS: 20 },
  { name: 'Payment Flow', Android: 0, iOS: 30 },
  { name: 'Login', Android: 0, iOS: 0 },
  { name: 'Outages', Android: 0, iOS: 43 },
  { name: 'Autopay', Android: 0, iOS: 24 },
];

const COLORS = ['var(--brand-blue)', 'var(--brand-gold)', 'rgba(255, 255, 255, 0.4)'];

const AvanGrid = () => {
  const [activeTab, setActiveTab] = useState('weekly'); // 'weekly', 'june', or 'mobile'
  const [todayTasks, setTodayTasks] = useState([]);
  const [taskLoadError, setTaskLoadError] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}daily_tasks.json`)
      .then(response => {
        if (!response.ok) throw new Error('No se pudieron cargar las tareas diarias');
        return response.json();
      })
      .then(data => setTodayTasks(normalizeTasks(data)))
      .catch(() => {
        setTodayTasks([]);
        setTaskLoadError(true);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold font-serif">AvanGrid (Antigravity)</h2>
          <p className="text-muted text-sm mt-1">Automatización mobile, integración continua y ejecución de pruebas.</p>
        </div>
        
        {/* Toggle buttons (3 choices) */}
        <div className="tab-list" role="tablist" aria-label="Vistas de AvanGrid">
          <button 
            className="tab-button"
            role="tab"
            aria-selected={activeTab === 'weekly'}
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
            className="tab-button"
            role="tab"
            aria-selected={activeTab === 'june'}
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
            className="tab-button"
            role="tab"
            aria-selected={activeTab === 'mobile'}
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

      {/* Daily Tasks Notification if available */}
      {todayTasks && todayTasks.length > 0 && (
        <div className="glass-card mb-6" style={{ borderColor: 'rgba(0, 180, 216, 0.4)', borderWidth: '1px' }}>
          <h3 className="font-semibold text-lg text-cyan mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan animate-pulse"></span>
            Actualización del Día ({todayTasks[0].date}) - Tareas Finalizadas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {todayTasks.map((task, idx) => (
              <div key={idx} className="p-3 rounded-xl flex justify-between items-start" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)' }}>
                <div>
                  <span className="text-xs bg-cyan text-dark font-bold px-2 py-0.5 rounded mr-2" style={{ backgroundColor: 'var(--brand-blue)', color: '#fff' }}>{task.key}</span>
                  <span className="text-xs text-muted">{task.sheet}</span>
                  <p className="text-sm font-semibold mt-1 text-white">{task.name}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: 'rgba(0,114,188,0.2)', color: 'var(--brand-blue-light)' }}>
                    {task.assigned}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {taskLoadError && (
        <p className="data-notice" role="status">No fue posible cargar la actualización diaria. El resto del dashboard sigue disponible.</p>
      )}

      {activeTab === 'weekly' && <WeeklyProgress />}

      {activeTab === 'june' && (
        <div className="w-full flex-col gap-6">
          {/* June Widgets */}
          <div className="grid grid-cols-4 mb-6">
            <div className="glass-card">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm text-muted">Total Creados (Junio)</p>
                  <h3 className="text-2xl font-bold">72</h3>
                </div>
                <div className="p-2 rounded-full" style={{ background: 'rgba(0, 114, 188, 0.1)' }}>
                  <FileSpreadsheet className="text-cyan" size={24} />
                </div>
              </div>
              <p className="text-sm text-cyan font-semibold">Casos consolidados de QA</p>
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
              <p className="text-sm text-muted">55.6% del total mensual</p>
            </div>

            <div className="glass-card">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm text-muted">Creados por Nicolás</p>
                  <h3 className="text-2xl font-bold">32</h3>
                </div>
                <div className="p-2 rounded-full" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                  <UserCheck size={24} />
                </div>
              </div>
              <p className="text-sm text-muted">44.4% del total mensual</p>
            </div>

            <div className="glass-card">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm text-muted">Categoría Líder</p>
                  <h3 className="text-2xl font-bold">Payment Flow</h3>
                </div>
                <div className="p-2 rounded-full" style={{ background: 'rgba(0, 114, 188, 0.1)' }}>
                  <Layers className="text-cyan" size={24} />
                </div>
              </div>
              <p className="text-sm text-cyan">28 Casos Creados</p>
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
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                          <td className="py-2 font-semibold text-white" rowSpan={2}>{item.module}</td>
                          <td className="py-2 text-muted">Android</td>
                          <td className="py-2 text-center">{item.androidAuto + item.androidNo + item.androidPen}</td>
                          <td className="py-2 text-center">{item.androidNo}</td>
                          <td className="py-2 text-center text-cyan">{item.androidAuto}</td>
                          <td className="py-2 text-center">{item.androidPen}</td>
                        </tr>
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
