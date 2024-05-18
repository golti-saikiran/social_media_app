//Imports
const express = require('express');
const { mongoose } = require('mongoose');
const userRoute = require('./routes/userRoute')
const postRoute = require('./routes/postRoute')

//Constants
const PORT = process.env.DEV_PORT || 4000;
const MONGO_URL = process.env.MONGO_URL

//Intializations
const app = express();

//middlewares
app.use(express.json())

//Routes
app.use('/user', userRoute)
app.use('/post', postRoute)

app.get('/', (req, res) => {
    res.send("Social media application Home page")
})



//Configuration
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('Database Connected!')
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch((e) => console.log(e.message)) 