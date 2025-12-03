import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      // Save token
      localStorage.setItem("auth_token", token);

      // OPTIONAL: Fetch user from backend using token, otherwise skip
      // fetch(`${import.meta.env.VITE_SERVER_URL}/api/auth/profile`, {
      //   headers: { Authorization: `Bearer ${token}` },
      // }).then(res => res.json()).then(data => {
      //   localStorage.setItem("user", JSON.stringify(data));
      // });

      // Redirect to homepage
      navigate("/", { replace: true });
    } else {
      // If no token → redirect to login
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="text-white p-10 text-center">
      Logging in with Google...
    </div>
  );
};

export default GoogleSuccess;
