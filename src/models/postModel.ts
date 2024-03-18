import mongoose from "mongoose";


const postSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        default: "Title of post.",
        trim: true
    },
    category: {
        type: String,
        required: true,
        default: "Category of post.",
        trim: true
    },
    promptReturn: {
        type: String,
        trim: true,
        required: true,
        default: "Prompt Return.",
    },
    urlOfPrompt: {
        type: String,
        default: '',
        trim: true,
    },
    aiToolName: {
        type: String,
        trim: true,
        default: '',
    },
    hashthats: {
        type: [String],
        default: [],
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    likes: {
        type: Number,
        default: 0
    },
    likesId: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
    },
    comments: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
        ref: "comments"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })


const Post = mongoose.models.posts || mongoose.model("posts", postSchema);

export default Post;


