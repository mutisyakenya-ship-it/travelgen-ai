import { Routes, Route } from 'react-router-dom'

import LandingPage from '../pages/Landing/LandingPage'
import PlannerPage from '../pages/Planner/PlannerPage'
import LoginPage from '../pages/Auth/LoginPage'
import RegisterPage from '../pages/Auth/RegistrerPage'
import DashboardPage from '../pages/Dashboard/DashboardPage'
import PortfolioPage from '../pages/Portfolio/Portfolio'
import ItineraryPage from '../pages/Itinerary/ItineraryPage'

function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<LandingPage />} />

      <Route path="/planner" element={<PlannerPage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />

      <Route path="/dashboard" element={<DashboardPage />} />

      <Route path="/portfolio" element={<PortfolioPage />} />

      <Route path="/itinerary/:id" element={<ItineraryPage />} />

    </Routes>
  )
}

export default AppRoutes