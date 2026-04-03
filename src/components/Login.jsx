import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/checkout"); 
  };

  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center text-white relative overflow-hidden">
      
      <div className="absolute -top-52 -left-25 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"></div>
      
      <h1 className="text-4xl font-black mb-4 tracking-tighter uppercase italic">ShopZone Access</h1>
      <p className="text-gray-400 mb-8 text-sm tracking-widest">Please sign in to continue to checkout</p>
      
      <button 
        onClick={handleLogin}
        className="px-12 py-4 bg-white text-black font-black uppercase text-[10px] tracking-[0.3em] hover:bg-purple-600 hover:text-white transition-all duration-300"
      >
        Login as Guest
      </button>
    </div>
  );
}

export default Login;