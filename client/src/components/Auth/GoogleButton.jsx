const GoogleButton = ({ text = "Continue with Google" }) => {
  const handleGoogleLogin = () => {
    const server = import.meta.env.VITE_SERVER_URL || "http://localhost:3000";
    // starts OAuth flow on backend
    window.location.href = `${server}/api/auth/google`;
  };

  return (
    <button
      type="button"
      onClick={handleGoogleLogin}
      className="w-full py-3 mt-4 bg-white text-black font-semibold rounded-lg flex items-center justify-center gap-3 shadow-md hover:bg-gray-200 transition-all"
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
        className="w-5 h-5"
      />
      {text}
    </button>
  );
};

export default GoogleButton;
