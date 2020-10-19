const Tour = require('./../models/tourModel')


exports.getAllTours = async (req, res) => {

    try{
            tours = await Tour.find()
                res.json({
                    status: 'success',
                    numberOfResults : tours.length,
                    result: tours
                
                })

    }catch(err){
                res.status(400).json({
                    status:'fail',
                    message:'invalid data'
                })
            }

}

exports.addNewTour = async (req, res) => {
    
    try{
    newTour = await Tour.create(req.body)

    res.status(200).json({
        status: 'success',
        data: newTour
        })
    }catch(err){
        res.status(400).json({
            status:'fail',
            message:'invalid data'
        })
        
    }
}


exports.getTourById =  async (req, res) => {

    try{
            foundTour = await Tour.findById(req.params.id)
            res.status(200).json({
                status: 'success',
                data: foundTour
                })
            
    }catch(err){
        res.status(400).json({
            status:'fail',
            message:'invalid data'
        })
    }}

