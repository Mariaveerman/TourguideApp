import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Signup = ({ onToggle, onSignupSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      onSignupSuccess();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'white',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
      maxWidth: '400px',
      width: '100%',
      textAlign: 'center',
      zIndex: 1000
    }}>
      <h2 style={{
        marginBottom: '20px',
        color: '#333',
        fontSize: '24px',
        fontWeight: 'bold'
      }}>
        Create Account
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email" style={{
            display: 'block',
            marginBottom: '5px',
            color: '#555',
            fontSize: '14px'
          }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="password" style={{
            display: 'block',
            marginBottom: '5px',
            color: '#555',
            fontSize: '14px'
          }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="confirmPassword" style={{
            display: 'block',
            marginBottom: '5px',
            color: '#555',
            fontSize: '14px'
          }}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
        <button type="submit" style={{
          width: '100%',
          padding: '12px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background 0.3s'
        }}>
          Sign Up
        </button>
      </form>
      <p style={{
        marginTop: '20px',
        color: '#777',
        fontSize: '14px'
      }}>
        Already have an account? <a href="#" onClick={onToggle} style={{ color: '#667eea', textDecoration: 'none', cursor: 'pointer' }}>Login</a>
      </p>
    </div>
  );
};

export default Signup;
