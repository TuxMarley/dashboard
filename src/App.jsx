import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from './components/DashboardLayout'
import AvanGrid from './pages/AvanGrid'
import StudioQA from './pages/StudioQA'
import Innovacion from './pages/Innovacion'
import InteligenciaArtificial from './pages/InteligenciaArtificial'
import './index.css'

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/avangrid" replace />} />
          <Route path="/avangrid" element={<AvanGrid />} />
          <Route path="/studio-qa" element={<StudioQA />} />
          <Route path="/innovacion" element={<Innovacion />} />
          <Route path="/ia" element={<InteligenciaArtificial />} />
        </Routes>
      </DashboardLayout>
    </Router>
  )
}

export default App
