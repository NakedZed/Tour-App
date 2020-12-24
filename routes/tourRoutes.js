
const express = require('express')
const tourController = require('../controllers/tourController')
const router = express.Router()

// router.param('id', tourController.checkID) //middleware for checking the validity of the id


router.route('/')
    .get(tourController.getAllTours)
    .post(tourController.addNewTour)

router.route('/:id')
    .get(tourController.getTourById)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour)
 

module.exports = router;