import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  password:{
    type:String,
    required:true,
    validate:[validator.isStrongPassword,"Password is Too Weak"]
  }
});

export const Users = mongoose.model("Users", userSchema);
