const Router = require('express').Router();

const { getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
} = require('../controllers/userControllers')
const { registerUser, loginUser } = require('../controllers/authControllers')

Router.post('/register', registerUser)
Router.post('/login', loginUser)
Router.get('/', getAllUsers)
Router.get('/:id', getUserById)
Router.delete('/:id', deleteUser)
Router.patch("/:id", updateUser)

module.exports = Router;