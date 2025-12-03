import React, { useState } from "react";
import GoogleButton from "./GoogleButton";
import { BASE_URL } from "../../utils/ConfigBaseUrl";

const AuthModal = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Signup state
  const [name, setName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  if (!open) return null;



  const handleLogin = async (e) => {
    e?.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });
      const data = await res.json();
      setLoading(false);
      if (!res.ok) return setError(data.message || "Login failed");
      // Expecting token and user info
      if (data.token) {
        localStorage.setItem("auth_token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user || {}));
      }
      onClose();
      window.location.reload(); // refresh so header sees auth state (simple approach)
    } catch (err) {
      setLoading(false);
      setError("Network error");
      console.error(err);
    }
  };

  const handleSignup = async (e) => {
    e?.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email: signupEmail, password: signupPassword }),
      });
      const data = await res.json();
      setLoading(false);
      if (!res.ok) return setError(data.message || "Signup failed");
      if (data.token) {
        localStorage.setItem("auth_token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user || {}));
      }
      onClose();
      window.location.reload();
    } catch (err) {
      setLoading(false);
      setError("Network error");
      console.error(err);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-[#113A3A] w-full max-w-md p-6 rounded-xl border border-[#1E5A5A] shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tabs */}
        <div className="flex justify-around mb-4">
          <button
            onClick={() => setActiveTab("login")}
            className={`px-6 py-2 rounded-lg text-lg font-semibold ${
              activeTab === "login"
                ? "text-teal-300 border-b-2 border-teal-300"
                : "text-gray-300"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setActiveTab("signup")}
            className={`px-6 py-2 rounded-lg text-lg font-semibold ${
              activeTab === "signup"
                ? "text-teal-300 border-b-2 border-teal-300"
                : "text-gray-300"
            }`}
          >
            Signup
          </button>
        </div>

        {error && (
          <div className="text-red-300 text-sm mb-2 text-center">{error}</div>
        )}

        {/* LOGIN FORM */}
        {activeTab === "login" && (
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <div>
              <label className="text-sm text-gray-200">Email</label>
              <input
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                required
                className="mt-1 w-full px-4 py-2 bg-[#0F2D2D] border border-[#1E5A5A] rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <div>
              <label className="text-sm text-gray-200">Password</label>
              <input
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                type="password"
                placeholder="Enter password"
                required
                className="mt-1 w-full px-4 py-2 bg-[#0F2D2D] border border-[#1E5A5A] rounded-lg text-white focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <button
              disabled={loading}
              className="w-full py-3 bg-teal-300 text-black font-bold rounded-lg mt-2 disabled:opacity-70"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        )}

        {/* SIGNUP FORM */}
        {activeTab === "signup" && (
          <form className="flex flex-col gap-4" onSubmit={handleSignup}>
            <div>
              <label className="text-sm text-gray-200">Full Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter full name"
                required
                className="mt-1 w-full px-4 py-2 bg-[#0F2D2D] border border-[#1E5A5A] rounded-lg text-white focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <div>
              <label className="text-sm text-gray-200">Email</label>
              <input
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                required
                className="mt-1 w-full px-4 py-2 bg-[#0F2D2D] border border-[#1E5A5A] rounded-lg text-white focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <div>
              <label className="text-sm text-gray-200">Password</label>
              <input
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                type="password"
                placeholder="Create a password"
                required
                className="mt-1 w-full px-4 py-2 bg-[#0F2D2D] border border-[#1E5A5A] rounded-lg text-white focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <button
              disabled={loading}
              className="w-full py-3 bg-teal-300 text-black font-bold rounded-lg mt-2 disabled:opacity-70"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>
        )}

        {/* OR divider & Google */}
        <div className="my-4 flex items-center gap-4">
          <span className="flex-grow h-px bg-[#1E5A5A]" />
          <span className="text-gray-300 text-sm">OR</span>
          <span className="flex-grow h-px bg-[#1E5A5A]" />
        </div>

        <GoogleButton text={activeTab === "login" ? "Login with Google" : "Sign up with Google"} />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-xl text-teal-300"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
