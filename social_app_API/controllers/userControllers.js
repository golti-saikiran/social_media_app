const User = require('../models/userModel')


const getAllUsers = async (req, res, next) => { 
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({ "message": err.message })
    }
}
const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json({ "message": err.message })
    }
}
const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if (!user) {
            res.status(404).json({ message: "user not found" })
        }
        const updatedUser = await User.findById(id);
        res.status(200).json({ message: "user updated", user: updatedUser })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id, req.body);
        if (!user) {
            res.status(404).json({ message: "user not found" })
        }
        res.status(200).json({ message: "user deleted" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = { getAllUsers, getUserById, updateUser, deleteUser }