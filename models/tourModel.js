const mongoose = require('mongoose')
const tourSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'A tour mustve a name'],
        unique:true
    },
    price:{
        type:Number,
        default:4.5
    },
    rating:{
        type: Number
    }
})
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
