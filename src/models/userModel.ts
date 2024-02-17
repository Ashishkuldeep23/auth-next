import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        trim: true
    },

    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },

    forgotPassToken: String,
    forgotPassExp: Date,
    verifyToken: String,
    verifyTokenExp: Date

}, { timestamps: true })



// // // Creating models in next js by userSchema --->

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;

