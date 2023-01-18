import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
      },
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: false,
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
})

export const UserModel = mongoose.model("users", UserSchema);
