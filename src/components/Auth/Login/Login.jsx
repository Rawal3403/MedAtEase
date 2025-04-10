// components/Auth/Login.jsx
import React, { useState } from 'react';
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/users?username=${form.username}&password=${form.password}`);
    const data = await res.json();

    if (data.length > 0) {
      alert('Login Successful');
      // You can store user info in localStorage or use Context API
      localStorage.setItem('user', JSON.stringify(data[0]));
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="text" placeholder="Username" required onChange={(e) => setForm({ ...form, username: e.target.value })} />
      <input type="password" placeholder="Password" required onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
