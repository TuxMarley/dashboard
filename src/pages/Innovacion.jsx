import React from 'react';

const Innovacion = () => {
  return (
    <div className="w-full flex-col gap-6">
      <h2 className="text-2xl font-bold mb-4 font-serif">Innovación y PoCs</h2>
      <p className="text-muted mb-6">Pruebas de concepto y pilotos de Inteligencia Artificial para el equipo QA.</p>
      
      <div className="glass-card">
        <h3 className="font-semibold text-xl mb-4">Pilotos Activos</h3>
        <p className="text-sm text-muted">Aún no hay pilotos reportados esta semana.</p>
      </div>
    </div>
  );
};

export default Innovacion;
