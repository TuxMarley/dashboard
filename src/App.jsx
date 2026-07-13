import React from 'react'
import DashboardLayout from './components/DashboardLayout'
import WeeklyProgress from './components/WeeklyProgress'
import './index.css' // Importar los estilos globales

function App() {
  return (
    <DashboardLayout>
      <WeeklyProgress />
    </DashboardLayout>
  )
}

export default App
