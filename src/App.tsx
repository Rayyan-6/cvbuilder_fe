
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
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
        <Route path='/' element={(<Navigate to='/resume-builder' />)} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

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
  )
}

export default App
