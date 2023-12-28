import React, { useState } from 'react';
import './LoginPage.css'; 

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim() !== '' && password.trim() !== '') {
      const isAuthenticated = true;

      if (isAuthenticated) {
        onLogin();
      } 
     else {
      alert('Oops! Something went wrong.. Username and password cannot be empty');
    }}
  };

  return (
    <div className='container'>
    <div className="login-container">
      <h2>Login Page</h2>
      <div className="form-group">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
        />
      </div>
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
    </div>
  );
};

export default LoginPage;
