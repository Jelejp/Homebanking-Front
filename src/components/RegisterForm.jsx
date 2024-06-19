import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Handle form submission
      console.log('Form submitted');

    } else {
      setPasswordError('Passwords do not match');
    }
  
    try {
      const response = await axios.post('https://homebanking-1ir2.onrender.com/api/auth/signup', { 
        firstName, lastName, email, password });
      console.log(response.data);
      alert('Registration successful! Please log in.');
      navigate('/login');

      // Handle successful registration
    } catch (error) {
      console.error('Registration error:',error);
      alert('Registration failed. Please try again.');
      // Handle registration error
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 ">
      <form onSubmit={handleRegister} className="flex flex-col gap-4 p-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl rounded-lg bg-[#1a1a1a] text-white border border-[#333] sm:p-6">
        <p className='text-2xl md:text-3xl font-semibold tracking-tight flex items-center pl-4 md:pl-7 text-[#63edd8] relative'>
          Register
        </p>
        <p className="text-sm md:text-base text-[rgba(255,255,255,0.7)]">
          Signup now and get full access to our app.
        </p>
        <div className="flex flex-col sm:flex-row w-full gap-2">
          <label className="relative w-full">
            <input className="bg-[#333] text-white w-full p-3 md:p-4 outline-0 border border-[rgba(105,105,105,0.397)] rounded-md md:rounded-lg" 
            type="text" 
            value={firstName} 
            onChange={(e) => setFirstname(e.target.value)} 
            placeholder="Firstname" required />
          </label>
          <label className="relative w-full">
            <input className="bg-[#333] text-white w-full p-3 md:p-4 outline-0 border border-[rgba(105,105,105,0.397)] rounded-md md:rounded-lg" 
            type="text"
            value={lastName} 
            onChange={(e) => setLastname(e.target.value)} 
            placeholder="Lastname" required />
          </label>
        </div>
        <label className="relative w-full">
          <input className="bg-[#333] text-white w-full p-3 md:p-4 outline-0 border border-[rgba(105,105,105,0.397)] rounded-md md:rounded-lg" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" required />
        </label>
        <label className="relative w-full">
          <input
            className="bg-[#333] text-white w-full p-3 md:p-4 outline-0 border border-[rgba(105,105,105,0.397)] rounded-md md:rounded-lg"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <label className="relative w-full">
          <input
            className="bg-[#333] text-white w-full p-3 md:p-4 outline-0 border border-[rgba(105,105,105,0.397)] rounded-md md:rounded-lg"
            type="password"
            placeholder="Confirm password"
            required
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {passwordError && <span className="text-red-500 text-sm mt-1">{passwordError}</span>}
        </label>
        <Link to="/login">
        <button className="border-0 outline-0 p-3 md:p-4 rounded-md md:rounded-lg text-white text-lg md:text-xl bg-[#63efda] transition-transform duration-300 hover:bg-[#2fa493] w-full">
          Submit
        </button>
        </Link>
        <p className="text-center text-sm md:text-base text-[rgba(255,255,255,0.7)] mt-4">
          Already have an account?<Link to="/login" className="text-[#63edd8] hover:underline"> Signin</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;