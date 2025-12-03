import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("auth_token", token);
      // You may fetch the user profile here if needed
    }

    navigate("/");
  }, [navigate]);

  return (
    <div className="text-white p-10">
      Logging you in with Google...
    </div>
  );
};

export default GoogleSuccess;
