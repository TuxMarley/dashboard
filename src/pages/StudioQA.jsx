import React from 'react';

const StudioQA = () => {
  return (
    <div className="w-full flex-col gap-6">
      <h2 className="text-2xl font-bold mb-4 font-serif">Studio QA</h2>
      <p className="text-muted mb-6">Formaciones y asesorías para nuevos proyectos de automatización e IA.</p>
      
      <div className="glass-card">
        <h3 className="font-semibold text-xl mb-4">Próximas Formaciones</h3>
        <p className="text-sm text-muted">Aún no hay formaciones programadas para esta semana.</p>
      </div>
    </div>
  );
};

export default StudioQA;
