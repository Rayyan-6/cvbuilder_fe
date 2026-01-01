import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { PrivateRoute } from './components/PrivateRoute';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import ResumeBuilder from './components/Resume/ResumeBuilder';

function App() {
  const { token } = useContext(AuthContext);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute isAuthenticated={!!token}>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/resume-builder"
            element={
              <PrivateRoute isAuthenticated={!!token}>
                <ResumeBuilder />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
