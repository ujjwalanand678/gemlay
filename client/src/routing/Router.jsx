import { Route , Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import GoogleSuccess from "../pages/GoogleSuccess";

const Router = () => {
  return (
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/auth/google/success" element={<GoogleSuccess />} />


  </Routes>
);
};

export default Router;
