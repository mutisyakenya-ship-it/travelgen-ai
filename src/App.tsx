import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/LandingPage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Privacy from "./pages/Privacy/Privacy";
import ProtectedRoute from "./routes/ProtectedRoute";
import ChatWidget from "./components/chatbot/ChatWidget";

const Login = lazy(() => import("./pages/Auth/LoginPage"));
const Register = lazy(() => import("./pages/Auth/RegistrerPage"));
const ForgotPassword = lazy(() => import("./pages/Auth/ForgotPassword"));
const Planner = lazy(() => import("./pages/Planner/PlannerPage"));
const Dashboard = lazy(() => import("./pages/Dashboard/DashboardPage"));
const MyTrips = lazy(() => import("./pages/MyTrips"));
const TripDetails = lazy(() => import("./pages/TripDetails"));
const SharedTrip = lazy(() => import("./pages/SharedTrips"));
const Explore = lazy(() => import("./pages/Explore"));
const Portfolio = lazy(() => import("./pages/Portfolio/Portfolio"));
const ProfilePage = lazy(() => import("./pages/Profile/ProfilePage"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trips/:id"
            element={
              <ProtectedRoute>
                <TripDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/planner"
            element={
              <ProtectedRoute>
                <Planner />
              </ProtectedRoute>
            }
          />
          <Route
            path="/portfolio"
            element={
              <ProtectedRoute>
                <Portfolio />
              </ProtectedRoute>
            }
          />
          <Route path="/destinations" element={<Landing />} />
          <Route
            path="/trips"
            element={
              <ProtectedRoute>
                <MyTrips />
              </ProtectedRoute>
            }
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/share/:id" element={<SharedTrip />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="*" element={<Landing />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>

      <ChatWidget />
    </>
  );
}

export default App;