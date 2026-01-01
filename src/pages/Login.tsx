import { useState, useContext, useEffect } from 'react';
import { login } from '../api/auth';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import '../css files/auth.css';

import AuthLayout from '../layouts/AuthLayout';
import cardStyle from './cardStyle';

export const Login = () => {
  const { setToken } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await login({ email, password });
      setToken(res.data.access_token);
      // localStorage.setItem('token', res.data.access_token);

      navigate('/dashboard');
      alert('Login successful!');
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error logging in');
    }
  };

  return (
    <div className="flex  flex-col justify-center items-center w-screen h-screen">
      <div className="text-5xl">My CV Builder</div>
      <div className="max-w-md mx-auto mt-20 p-6 border border-gray-200 rounded shadow  min-w-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <Input
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="auth-button-row">
          <Button text="Login" onClick={handleSubmit} />

          <Link to="/signup">Signup instead</Link>
        </span>
      </div>
    </div>
  );
};
