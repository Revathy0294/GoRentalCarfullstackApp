

const mongoose = require("mongoose");

function connectDB(){
    mongoose.connect('mongodb+srv://revathygufi:Rev%40123456@cluster0.t2jom4p.mongodb.net/GoRentalProject', {useUnifiedTopology: true , useNewUrlParser: true})
    const connection = mongoose.connection
    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose