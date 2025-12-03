import React, { useState } from "react";

const AuthModal = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState("login");

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-[#113A3A] w-full max-w-md p-6 rounded-xl border border-[#1E5A5A] shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tabs */}
        <div className="flex justify-around mb-6">
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

        {/* LOGIN FORM */}
        {activeTab === "login" && (
          <form className="flex flex-col gap-4">
            <div>
              <label className="text-sm text-gray-200">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-4 py-2 bg-[#0F2D2D] border border-[#1E5A5A] rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <div>
              <label className="text-sm text-gray-200">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="mt-1 w-full px-4 py-2 bg-[#0F2D2D] border border-[#1E5A5A] rounded-lg text-white focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <button className="w-full py-3 bg-teal-300 text-black font-bold rounded-lg mt-2">
              Login
            </button>
          </form>
        )}

        {/* SIGNUP FORM */}
        {activeTab === "signup" && (
          <form className="flex flex-col gap-4">
            <div>
              <label className="text-sm text-gray-200">Full Name</label>
              <input
                type="text"
                placeholder="Enter full name"
                className="mt-1 w-full px-4 py-2 bg-[#0F2D2D] border border-[#1E5A5A] rounded-lg text-white focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <div>
              <label className="text-sm text-gray-200">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-4 py-2 bg-[#0F2D2D] border border-[#1E5A5A] rounded-lg text-white focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <div>
              <label className="text-sm text-gray-200">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                className="mt-1 w-full px-4 py-2 bg-[#0F2D2D] border border-[#1E5A5A] rounded-lg text-white focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <button className="w-full py-3 bg-teal-300 text-black font-bold rounded-lg mt-2">
              Create Account
            </button>
          </form>
        )}

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
