const { mongoose } = require("mongoose");


const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter First Name']
    },
    lastName: {
        type: String,
        required: [true, 'please enter Last Name']
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    }
},
    {
        timestamps: true,
    })
 const User = mongoose.model('User', userSchema)
 module.exports = User;