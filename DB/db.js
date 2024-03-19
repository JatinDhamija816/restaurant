const mongoose = require('mongoose')

const Connection = async () => {
    try {
        await mongoose.connect(process.env.URL)
        console.log("DB Connected")
    } catch (error) {
        console.log("Mongo DB Error")
    }
}

module.exports = Connection