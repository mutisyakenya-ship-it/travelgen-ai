import {  Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/LandingPage";
import Login from "./pages/Auth/LoginPage";
import Register from "./pages/Auth/RegistrerPage";
import Planner from "./pages/Planner/PlannerPage";
import Dashboard from "./pages/Dashboard/DashboardPage";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ProtectedRoute from "./routes/ProtectedRoute";
import MyTrips from "./pages/MyTrips";
import TripDetails from "./pages/TripDetails";
import SharedTrip from "./pages/SharedTrips";
import Explore from "./pages/Explore";
function App() {
  return (

    <Routes>

      <Route
        path="/"
        element={<Landing />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route

        path="/dashboard"

        element={

          <ProtectedRoute>

            <Dashboard/>

          </ProtectedRoute>

        }

      />
      <Route
      
        path="/trips/:id"
        element={
          <ProtectedRoute>
            <TripDetails/>
          </ProtectedRoute>
        }
      />
      <Route

        path="/planner"

        element={

          <ProtectedRoute>

            <Planner/>

          </ProtectedRoute>

        }

      />
      <Route

        path="/trips"

        element={

          <ProtectedRoute>

            <MyTrips/>

          </ProtectedRoute>

        }

      />
      <Route
    

path="/forgot-password"

element={

<ForgotPassword/>

}

/>
<Route

path="/share/:id"

element={<SharedTrip/>}

/>
<Route
path="/explore"
element={<Explore/>}
/>
<Route path="/portfolio" element={<MyTrips />} />

    </Routes>

  );
}

export default App;