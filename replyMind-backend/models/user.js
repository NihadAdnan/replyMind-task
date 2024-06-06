import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: [true,"Username is required!"], unique: [true,"Username should be unique!"] },
  password: { type: String, required: [true,"Password is required"] },
  profession: { type: String, enum: ['Marketing Professional', 'Entrepreneur', 'Content Creator'], required: true },
  interests: [String],
  bio: { type: String, maxlength: 50 },
});

export default User = mongoose.model("User",userSchema)
