import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from './components/DashboardLayout'
import './index.css'

const AvanGrid = lazy(() => import('./pages/AvanGrid'))
const StudioQA = lazy(() => import('./pages/StudioQA'))
const Innovacion = lazy(() => import('./pages/Innovacion'))
const InteligenciaArtificial = lazy(() => import('./pages/InteligenciaArtificial'))
const CareerPath = lazy(() => import('./pages/CareerPath'))
const MetLife = lazy(() => import('./pages/MetLife'))

const NotFound = () => (
  <section className="glass-card empty-state" aria-labelledby="not-found-title">
    <p className="text-cyan font-semibold">404</p>
    <h2 id="not-found-title" className="text-2xl font-bold mb-2">Sección no encontrada</h2>
    <p className="text-muted">La dirección solicitada no forma parte de este dashboard.</p>
  </section>
)

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Suspense fallback={<div className="loading-state" role="status">Cargando sección…</div>}>
          <Routes>
            <Route path="/" element={<Navigate to="/avangrid" replace />} />
            <Route path="/avangrid" element={<AvanGrid />} />
            <Route path="/studio-qa" element={<StudioQA />} />
            <Route path="/innovacion" element={<Innovacion />} />
            <Route path="/ia" element={<InteligenciaArtificial />} />
            <Route path="/metlife" element={<MetLife />} />
            <Route path="/career" element={<CareerPath />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </DashboardLayout>
    </Router>
  )
}

export default App
