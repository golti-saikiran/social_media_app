const Router = require('express').Router();
const { createPost, deletePost, updatePost } = require('../controllers/postController')

Router.post('/create', createPost)
Router.delete('/:id', deletePost)
Router.put('/:id', updatePost)

module.exports = Router