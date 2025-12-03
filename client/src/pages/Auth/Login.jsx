import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "../../components/Auth/GoogleButton";
import logo from "../../assets/logo/logo.png";
import { BASE_URL } from "../../utils/ConfigBaseUrl";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      setLoading(false);
      if (!res.ok) return setError(data.message || "Login failed");
      if (data.token) {
        localStorage.setItem("auth_token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user || {}));
      }
      navigate("/");
      window.location.reload();
    } catch (err) {
      setLoading(false);
      setError("Network error");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D2F2F] flex items-center justify-center px-4">
      <div className="bg-[#113A3A] w-full max-w-md p-8 rounded-2xl shadow-xl border border-[#1E5A5A]/40">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Gemlay" className="h-14 opacity-90" />
          <p className="mt-2 text-[#AEECE5] text-lg tracking-wide font-semibold">
            Welcome Back
          </p>
        </div>

        {error && <div className="text-red-300 mb-4 text-center">{error}</div>}

        <form className="flex flex-col gap-4 mt-4" onSubmit={handleLogin}>
          <div>
            <label className="text-sm text-gray-200">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
              required
              className="w-full mt-1 px-4 py-2 bg-[#0F2D2D] border border-[#1E5A5A] rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-300"
            />
          </div>

          <div>
            <label className="text-sm text-gray-200">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
              required
              className="w-full mt-1 px-4 py-2 bg-[#0F2D2D] border border-[#1E5A5A] rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-300"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-3 bg-teal-300 text-black font-bold rounded-lg hover:bg-teal-200 transition-all disabled:opacity-70"
          >
            {loading ? "Logging in..." : "LOGIN"}
          </button>
        </form>

        <div className="flex items-center gap-4 my-6">
          <span className="flex-grow h-px bg-[#1E5A5A]"></span>
          <span className="text-gray-300 text-sm">OR</span>
          <span className="flex-grow h-px bg-[#1E5A5A]"></span>
        </div>

        <GoogleButton text="Login with Google" />

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
