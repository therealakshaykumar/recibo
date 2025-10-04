import { useState } from "react";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const login = useAuthStore(state=> state.login)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent)=>{
    e.preventDefault();
    const success = login(email,password)
    if(success){
      toast.success("Login successful");
      navigate('/dashboard')
    }else{
      toast.error('Invalid credentials')
    }
  }
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex flex-col items-center justify-center md:w-1/2 p-8 relative">
        <div className="flex items-center mb-4">
          <img className="w-16 md:w-20" src="recibo.png" alt="logo" />
          <p className="recibo-text text-4xl md:text-6xl font-bold ml-3">
            Recibo
          </p>
        </div>
        <div className="recibo-text text-lg md:text-2xl font-bold text-center md:text-left">
          DIGITIZING SALES & DISTRIBUTION
        </div>
        <div className="absolute bottom-0 hidden md:block text-gray-500">
            Recibo Technologies Pvt Ltd |www.recibotech.com
        </div>
      </div>

      <div className="recibo-bg flex items-center justify-center h-full w-full md:w-1/2 p-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 md:p-10 w-full max-w-sm">
          <h1 className="text-xl md:text-2xl recibo-text mb-6 text-center">
            User Sign In
          </h1>
          <input
          value={email}
          onChange={e=> setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          />
          <input
          value={password}
          onChange={e=> setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          />
          <div className="flex items-center justify-between">
            <p className="recibo-text w-1/2 cursor-pointer">Forgot password ?</p>
          <button
            type="submit"
            className="cursor-pointer w-1/2 recibo-bg text-white font-bold py-2 rounded-lg hover:recibo-bg"
          >
            Sign In
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
