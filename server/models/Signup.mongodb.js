import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const signupSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    passwordHash:{
        type: String,
        required: true,
    },
    role:{
        type:String,
        required: true
    },
    mobileNumber:{
        type:String,
        required:true,
    }
}, {timestamps: true})

// helper method to check password
signupSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.passwordHash);
}

const SignupSchema = mongoose.model("signUp", signupSchema);
export default SignupSchema