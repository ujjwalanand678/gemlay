import { Route , Routes} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import Login from "../pages/Auth/Login.jsx";
import SignUp from "../pages/Auth/SignUp.jsx";
import GoogleSuccess from "../pages/GoogleSuccess.jsx";

const Router = () => {
  return (
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/auth/google/success" element={<GoogleSuccess />} />
     <Route path="/auth/google/failure" element={<div>Google login failed</div>} />


  </Routes>
);
};

export default Router;
