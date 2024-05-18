const user = require('../models/userModel')

const registerUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json({ "message": err.message })
    }
}
const loginUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ name: req.body.name });
        if (!user) {
           return res.status(404).json("user not found");
        }
        const validPassword = (req.body.password === user.password);
        if (!validPassword) {
           return res.status(400).json("wrong password")
        }
        return res.status(200).json(user)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
module.exports = { registerUser, loginUser }