var fs = require('fs')
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan')
const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')
const app = express();


dotenv.config({path:'./config.env'}); //configuring the environment vars for node.

//////////////////////////////////////////////////////////////////////////////////////////
//configuring the DB
const DB = process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(con => {
    
    console.log('db connec successful')
})

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

var tour1 = new Tour({
    name: 'Tour1',
    price:500,
    rating:9 
})
tour1.save().then(doc => {
    console.log(doc)
}).catch(err => {
    console.log(err)
})
//////////////////////////////////////////////////////////////////////////////////////////
//Middlewares
app.use(express.json())
app.use(morgan('dev')) //login middleware


app.use('/api/v1/tours', tourRouter) //Mounting tourRouter to specific endpoint
app.use('/api/v1/users', userRouter)

const port = 3000;

app.listen(port , () => {
    console.log(`we are listening on ${port}`)
})

