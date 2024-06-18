import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { login } from '../actions/authActions';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('https://homebanking-1ir2.onrender.com/api/auth/login', { email, password });
      const token = response.data;

      // Dispatch the login action with token and user data
      dispatch(login({ email, token}));
      
      // Guarda el token en el almacenamiento local
      localStorage.setItem('token', token);
      
      navigate('/accounts');
      toast.success('Successfully logged in', {
        position: 'top-center'
      });
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response.data);
      toast.error('Error al iniciar sesión', {
        position: 'top-center'
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <form 
        className="flex flex-col gap-4 p-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl rounded-lg bg-[#1a1a1a] text-white border border-[#333] sm:p-6" 
        onSubmit={handleLogin}
      >
        <p className='text-3xl md:text-4xl font-semibold tracking-tight flex items-center pl-4 md:pl-7 lg:mt-10 text-[#63edd8] relative'>
          Login
        </p>
        <p className="text-lg md:text-xl text-[rgba(255,255,255,0.7)]">
          Welcome back! Please login to your account.
        </p>
        <div className='flex flex-col gap-4 lg:mt-8'>
          <label className="relative w-full">
            <input
              className="bg-[#333] text-white w-full h-12 md:h-14 p-3 md:p-4 outline-0 border border-[rgba(105,105,105,0.397)] rounded-md md:rounded-lg"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label className="relative w-full">
            <input
              className="bg-[#333] text-white w-full h-12 md:h-14 p-3 md:p-4 outline-0 border border-[rgba(105,105,105,0.397)] rounded-md md:rounded-lg"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
        </div>
        <button 
          type="submit" 
          className="border-0 outline-0 p-3 md:p-4 rounded-md md:rounded-lg text-white text-lg md:text-xl mt-6 bg-[#63efda] transition-transform duration-300 hover:bg-[#2fa493] w-full"
        >
          Login
        </button>
        <p className="text-center text-lg md:text-xl text-[rgba(255,255,255,0.7)] mt-4">
          Don't have an account? <Link to="/register" className="text-[#63edd8] hover:underline">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;