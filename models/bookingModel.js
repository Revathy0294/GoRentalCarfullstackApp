const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({


      car : {type : mongoose.Schema.Types.ObjectID , ref:'cars'},
      user : {type : mongoose.Schema.Types.ObjectID , ref:'users'},
    

},
 
)

const bookingModel = mongoose.model('bookings' , bookingSchema)

module.exports = bookingModel