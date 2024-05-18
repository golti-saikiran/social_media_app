const Post = require('../models/PostModel')

//create a post
const createPost = async (req, res, next) => {
    try {
        const post = await Post.create(req.body);
        !post && res.status(404).json({ message: "Error occured creating post" });
        return res.status(200).json({ message: "post created", post })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}
// delete a post
const deletePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await Post.findByIdAndDelete(req.params.id)
            return res.status(200).json({ message: `Post with Id ${req.params.id} is deleted` })
        } else {
            return res.status(404).json({ message: "You can not delete other's posts" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}
// update a post 
const updatePost = async (req,res, next) => {
    try{
        const post = await Post.findById(req.params.id)
        if(post.userId === req.body.userId){
            await Post.updateOne({$set:req.body})
            return res.status(200).json({ message: `Post with Id ${req.params.id} is updated` })
        }else {
            return res.status(404).json({ message: "You can not update other's posts" })
        }
    }catch(err){
        return res.status(500).json({ message: err.message })
    }
}

module.exports = { createPost, deletePost, updatePost }