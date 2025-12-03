import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Helper - ensure JWT key exists
if (!process.env.JWT_TOKEN_KEY) {
  console.warn("JWT_TOKEN_KEY not set in env. Tokens will fail if not provided.");
}

// generate JWT token
const createJwtToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role, name: user.name },
    process.env.JWT_TOKEN_KEY,
    { expiresIn: "7d" }
  );
};

// REGISTER USER
export const userRegister = async (req, res) => {
  const { name, email, password, adminInviteToken } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and password are required",
      });
    }

    // Check existing email
    let userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User already registered with this email",
      });
    }

    // Determine admin role
    let role = "member";
    if (adminInviteToken && adminInviteToken === process.env.ADMIN_INVITE_TOKEN) {
      role = "admin";
    }

    // Encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
      profileImageUrl: null,
    });

    await user.save();

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        profileImageUrl: user.profileImageUrl,
      },
    });
  } catch (error) {
    console.error("Register Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// LOGIN USER
export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password required" });
    }

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({
        success: false,
        message: "User is not registered",
      });

    // If user was created via Google (no password)
    if (!user.password) {
      return res.status(400).json({
        success: false,
        message:
          "This account was created using Google login. Please login using Google sign-in or reset your password.",
      });
    }

    // Compare password
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword)
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });

    const token = createJwtToken(user);

    const sanitizedUser = user.toObject();
    delete sanitizedUser.password;

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token,
      role: user.role,
      data: sanitizedUser,
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// GET PROFILE
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Google OAuth callback handler (used in routes)
// Passport attaches the authenticated user to req.user
export const googleAuthCallback = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      // fallback redirect
      return res.redirect(`${process.env.CLIENT_URI.replace(/\/$/, "")}/auth/google/failure`);
    }

    const token = createJwtToken(user);

    // Redirect to frontend with token as query param (you can choose other flows)
    const redirectTo = `${process.env.CLIENT_URI.replace(/\/$/, "")}/auth/google/success?token=${token}`;
    return res.redirect(redirectTo);
  } catch (err) {
    console.error("Google Callback Error:", err);
    return res.redirect(`${process.env.CLIENT_URI.replace(/\/$/, "")}/auth/google/failure`);
  }
};
