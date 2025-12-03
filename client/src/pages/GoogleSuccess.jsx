// src/pages/GoogleSuccess.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (!token) {
      // No token -> send to login
      navigate("/login", { replace: true });
      return;
    }

    // Save token (you already use localStorage in other flows)
    localStorage.setItem("auth_token", token);

    // OPTIONAL: fetch the user's profile immediately so Header can read user object
    (async () => {
      try {
        const server = import.meta.env.VITE_SERVER_URL || "http://localhost:3000";
        const res = await fetch(`${server}/api/auth/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const user = await res.json();
          localStorage.setItem("user", JSON.stringify(user));
        } else {
          // failed to fetch profile: clear and continue
          console.warn("Could not fetch profile after Google login");
        }
      } catch (err) {
        console.warn("Profile fetch error:", err);
      } finally {
        // Always navigate to home
        navigate("/", { replace: true });
      }
    })();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D2F2F] text-white">
      <div className="p-6 rounded-lg bg-[#113A3A]">
        Logging you in with Google — redirecting to home...
      </div>
    </div>
  );
};

export default GoogleSuccess;
