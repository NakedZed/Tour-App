const mongoose = require('mongoose')
const tourSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'A tour mustve a name'],
        unique:true
    },
    duration: {
        type: Number,
        required: [true, 'A tour must have a duration']
    },
    maxGroupSize:{
        type: Number,
        required: [true, 'A tour must have a group size']
    },
    difficulty: {
        type: String,
        required: [true, 'A tour must have a difficulty']
    },
    ratingsAvg:{
        type: Number
    },
    ratingQuantity:{
        type: Number,
        default: 0
    },
    price:{
        type:Number,
        default:4.5,
        required: [true, 'A tour must have a price']
    },
    summary:{
        type: String,
        trim: true,
        required:[true, 'A tour must have a summary']
    },
    rating:{
        type: Number
    },
    description: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },

})
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
