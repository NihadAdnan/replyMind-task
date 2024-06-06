import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const user = { username, password };
      await axios.post('http://localhost:5000/api/users/login', user);
      alert('User logged in successfully');
      navigate('/profile');
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        className="login-input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        className="login-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button className="login-button" onClick={handleLogin}>Login</button>
      <div className="register-link-container">
        <p>Don't have an account? <Link to="/register" className="register-link">Register please</Link></p>
      </div>
    </div>
  );
};

export default Login;
