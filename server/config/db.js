import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.error("MONGO_URI not set in environment.");
      process.exit(1);
    }
    await mongoose.connect(process.env.MONGO_URI, {
      // you can add options here if needed
    });
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.error("Error connecting mongoDB", error);
    process.exit(1); // Exit process with failure (1)
  }
};

export default connectDB;
