import { useState } from "react";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email.trim() === '') return toast.error('Email is required')
    if(password.trim() === '') return toast.error('Password is required')
    const success = login(email, password);
    if (success) {
      toast.success("Login successful");
      navigate("/dashboard");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      <div className="flex flex-col items-center justify-center md:w-1/2 p-8 relative bg-white">
        <div className="flex items-center mb-6">
          <img className="w-14 md:w-20" src="recibo.png" alt="logo" />
          <p className="recibo-text text-3xl md:text-5xl font-extrabold ml-3">
            Recibo
          </p>
        </div>
        <p className="recibo-text text-base md:text-xl font-semibold text-center md:text-left leading-snug">
          DIGITIZING SALES & DISTRIBUTION
        </p>
        <p className="absolute bottom-4 text-xs md:text-sm text-gray-500 hidden md:block">
          Recibo Technologies Pvt Ltd | www.recibotech.com
        </p>
      </div>

      <div className="recibo-bg flex items-center justify-center h-full w-full md:w-1/2 p-6 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-10 w-full max-w-md"
        >
          <h1 className="text-xl md:text-3xl recibo-text mb-6 text-center font-bold">
            User Sign In
          </h1>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#04BCFC] focus:outline-none transition"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#04BCFC] focus:outline-none transition"
          />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="recibo-text text-sm sm:text-base cursor-pointer hover:underline">
              Forgot password?
            </p>
            <button
              type="submit"
              className="cursor-pointer w-full sm:w-1/2 recibo-bg text-white font-bold py-3 rounded-lg shadow hover:opacity-90 transition"
            >
              Sign In
            </button>
          </div>
            <div className="text-xs text-gray-400 mt-5 md:mt-0">
              <p>Trial Creds</p>
              <p>ak@gmail.com</p>
              <p>12345</p>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
