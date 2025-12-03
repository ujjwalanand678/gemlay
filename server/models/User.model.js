import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    // Password not required for Google users
    password: { type: String, default: null },

    // For Google Login
    googleId: { type: String, unique: true, sparse: true },

    // Profile image URL (from Google or manual upload later)
    profileImageUrl: { type: String, default: null },

    role: {
      type: String,
      enum: ["admin", "member"],
      default: "member",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
