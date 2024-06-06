import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css'; 

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profession, setProfession] = useState('Marketing Professional');
  const [bio, setBio] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const newUser = { username, password, profession, bio };
      await axios.post('http://localhost:5000/api/users/register', newUser);
      alert('User registered successfully');
      navigate('/');
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <input
        type="text"
        className="register-input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        className="register-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <select
        className="register-select"
        value={profession}
        onChange={(e) => setProfession(e.target.value)}
      >
        <option value="Marketing Professional">Marketing Professional</option>
        <option value="Entrepreneur">Entrepreneur</option>
        <option value="Content Creator">Content Creator</option>
      </select>
      <textarea
        className="register-textarea"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Bio"
      />
      <button className="register-button" onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;