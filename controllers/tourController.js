const Tour = require('./../models/tourModel')

exports.getAllTours = (req, res) => {
    res.json({
        status: 'success'
       
    })

}

exports.addNewTour = async (req, res) => {
    try{
    newTour = await Tour.create(req.body)

    res.status(200).json({
        status: 'success',
        data: newTour
        })
    }
    catch(err){
        res.status(400).json({
            status:'fail',
            message:'invalid data'
        })
        
    }

}


exports.getTourById =  (req, res) => {
    
   
  
    res.json({
        status: 'success'
        
    })    
  }

