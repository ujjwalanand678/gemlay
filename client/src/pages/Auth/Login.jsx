import React from "react";
import { Link } from "react-router-dom";
import GoogleButton from "../../components/Auth/GoogleButton";
import logo from "../../assets/logo/logo.png";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#0D2F2F] flex items-center justify-center px-4">
      <div className="bg-[#113A3A] w-full max-w-md p-8 rounded-2xl shadow-xl border border-[#1E5A5A]/40">
        
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Gemlay" className="h-14 opacity-90" />
          <p className="mt-2 text-[#AEECE5] text-lg tracking-wide font-semibold">
            Welcome Back
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4 mt-4">
          <div>
            <label className="text-sm text-gray-200">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full mt-1 px-4 py-2 bg-[#0F2D2D] border border-[#1E5A5A] rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-300"
            />
          </div>

          <div>
            <label className="text-sm text-gray-200">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full mt-1 px-4 py-2 bg-[#0F2D2D] border border-[#1E5A5A] rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-300"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-3 bg-teal-300 text-black font-bold rounded-lg hover:bg-teal-200 transition-all"
          >
            LOGIN
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <span className="flex-grow h-px bg-[#1E5A5A]"></span>
          <span className="text-gray-300 text-sm">OR</span>
          <span className="flex-grow h-px bg-[#1E5A5A]"></span>
        </div>

        {/* Google Login */}
        <GoogleButton text="Login with Google" />

        {/* Bottom Text */}
        <p className="text-center text-gray-300 mt-6 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-teal-300 font-medium underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
