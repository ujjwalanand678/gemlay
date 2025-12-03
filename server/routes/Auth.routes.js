import express from "express";
import { getUserProfile, userLogin, userRegister, googleAuthCallback } from "../controllers/Auth.controller.js";
import { authorize } from "../middlewares/verifyTokenMiddleware.js";
import passport from "passport";

const route = express.Router();

//http://localhost:3000/api/auth/register
route.post("/register", userRegister);

//http://localhost:3000/api/auth/login
route.post("/login", userLogin);

//http://localhost:3000/api/auth/profile/
route.get("/profile", authorize, getUserProfile);

// TEST URL for Google OAuth setup
// http://localhost:3000/api/auth/google/test
route.get("/google/test", (req, res) => {
  res.json({
    success: true,
    message: "Google OAuth test route is working",
    googleClientID: process.env.GOOGLE_CLIENT_ID ? "LOADED" : "MISSING",
    callbackURL: process.env.SERVER_URL
      ? `${process.env.SERVER_URL.replace(/\/$/, "")}/api/auth/google/callback`
      : "SERVER_URL missing",
  });
});

// Start Google login flow:
route.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Google callback: use failureRedirect for clean UX and then our handler will redirect to frontend success
route.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: `${process.env.CLIENT_URI ? process.env.CLIENT_URI.replace(/\/$/, "") : "/"} /auth/google/failure`,
  }),
  googleAuthCallback
);

export default route;
