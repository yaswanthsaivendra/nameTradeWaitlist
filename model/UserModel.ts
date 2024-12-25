import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    signupDate: {
      type: Date,
      default: Date.now, // Automatically set to current date when user is created
    },
  },
  { timestamps: true }, // This will create createdAt and updatedAt fields automatically
);

// Create the model from the schema
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
