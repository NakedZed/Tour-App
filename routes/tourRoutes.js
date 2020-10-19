
const express = require('express')
const tourController = require('../controllers/tourController')
const router = express.Router()

router.param('id', tourController.checkID) //middleware for checking the validity of the id

//create a checkbody middleware
//check if body contains name and price
//if not return 404
//add it to handler stack



router.route('/')
    .get(tourController.getAllTours)
    .post(tourController.checkBody, tourController.addNewTour)

router.route('/:id')
    .get(tourController.getTourById)


module.exports = router;