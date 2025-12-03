import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.model.js";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET || !process.env.SERVER_URL) {
  console.warn("Google OAuth env vars may be missing (GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET / SERVER_URL).");
}

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
     callbackURL: `${process.env.SERVER_URL}/api/auth/google/callback`,

    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails && profile.emails[0] && profile.emails[0].value;
        if (!email) {
          return done(new Error("No email found on Google profile"), null);
        }

        // Try to find a user by email first (covers previously-registered password users)
        let user = await User.findOne({ email });

        // If user exists but has no googleId, attach googleId (safe merge)
        if (user && !user.googleId) {
          user.googleId = profile.id;
          user.profileImageUrl = user.profileImageUrl || (profile.photos && profile.photos[0] && profile.photos[0].value) || null;
          await user.save();
          return done(null, user);
        }

        // If user not found, create a new user doc
        if (!user) {
          user = await User.create({
            name: profile.displayName || "No Name",
            email,
            googleId: profile.id,
            profileImageUrl: profile.photos && profile.photos[0] && profile.photos[0].value,
            // password left null for google users
          });
        }

        return done(null, user);
      } catch (err) {
        console.error("Google Auth Error:", err);
        return done(err, null);
      }
    }
  )
);

// Since we're using session: false in routes, serialize/deserialize are optional,
// but adding no-op versions keeps compatibility if you later enable sessions.
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id).select("-password");
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
