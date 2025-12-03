import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import AuthRoutes from "./routes/Auth.routes.js";
import passport from "passport";
import "./config/googleAuth.js"; // Load Google Strategy

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Fix Mongo strict query warnings
// (keep mongoose.set where you initialize mongoose - moved to db file if desired)
import mongoose from "mongoose";
mongoose.set("strictQuery", false);

// CORS — DO NOT use "*" if credentials are true
const corsPolicy = {
  origin: process.env.CLIENT_URI || "*", // set explicit CLIENT_URI in .env for production
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsPolicy));
app.use(express.json());
app.use(passport.initialize()); // REQUIRED for Google OAuth

// ROUTES
app.use("/api/auth", AuthRoutes);

// START SERVER
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
