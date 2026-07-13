import React from 'react';
import WeeklyProgress from '../components/WeeklyProgress';

const AvanGrid = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 font-serif">AvanGrid (Antigravity)</h2>
      <p className="text-muted mb-6">Automatización mobile, integración continua y ejecución de pruebas.</p>
      <WeeklyProgress />
    </div>
  );
};

export default AvanGrid;
