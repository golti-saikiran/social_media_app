const { mongoose } = require('mongoose');

const postSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            max: 500,
        },
        img: {
            type: String,
        },
        likes: {
            type: Array,
            default: [],
        },
    },
    { timestamps: true })

const Post = mongoose.model('post', postSchema);
module.exports = Post;